import re
import argparse
from datetime import datetime

from teamStatsHelper import (
    checkTeamName,
    findHomeAndAwayTeamGameRows,
    isCupGame,
    returnTeamScoreRowDownNumber,
)
from sanityChecks import (
    checksTeamStats,
    checkPlayerStats,
    validatePlayerNotProcessedTwice,
)
from fileUtils import returnTodayDate, saveFile, year
from statsHelper import (
    findCupGameRows,
    removeSuffixFromTeamName,
    returnTeamNameToStoreData,
    returnTeamNameForLeague,
)
from playerStatsHelper import (
    returnListOfPlayerStats,
    returnHomeAndAwayPlayerRowsForTeam,
    calculatePlayerStats,
)

# Set up argument parser
parser = argparse.ArgumentParser()
parser.add_argument(
    "--club",
    choices=["littlemoor", "stanningley", "pudsey"],
    required=True,
    help="Specify the club details to use.",
)
args = parser.parse_args()

# Import the appropriate club details module based on the argument
generateTeamStats = True
if args.club == "stanningley":
    generateTeamStats = True
    import stanningleyDetails as clubDetails
elif args.club == "littlemoor":
    generateTeamStats = False
    import littlemoorDetails as clubDetails
elif args.club == "pudsey":
    generateTeamStats = False
    import pudseyDetails as clubDetails

playerStats = returnListOfPlayerStats(clubDetails.teamDays, True, clubDetails.players)
teamsProcessed = []
allTeamResults = []

print("UPDATING STATS:", clubDetails.teamNames[0].upper())

for team in clubDetails.teamDays:
    print("Updating Stats: " + team)

    league = removeSuffixFromTeamName(team)
    # this is to store first team data under the old name, to help with backward compatibility
    teamNameToStoreData = returnTeamNameToStoreData(team)

    if team in teamsProcessed:
        raise Exception("team is being processed twice: " + team)
    teamsProcessed.append(team)

    with open(f"bowlsnetReports/{year}/{league}.txt", "r") as file:
        allRowsInFile = file.readlines()

        # Find team name used by team in this league
        teamNameUsedForLeague, teamNameToUse = returnTeamNameForLeague(
            allRowsInFile, team, clubDetails.displayTeamName, clubDetails.teamNames
        )
        if teamNameUsedForLeague is None or teamNameToUse is None:
            # Checks the team name appears in the league file if it is after the 1st of May
            if datetime.now().month > 4:
                raise Exception(f"{args.club} not found in league file for {team}")
            continue

        continueGeneratingStats = checkTeamName(
            team, teamNameUsedForLeague, clubDetails.displayTeamName
        )
        if not continueGeneratingStats:
            print(f"Skipping {team} as it doesn't exist in the league report file yet")
            continue

        # Find the cup games in the stats
        cupGameRows = findCupGameRows(allRowsInFile)

        #### TEAM STATS ####
        # Team stats are only generated for Stanningley
        if generateTeamStats:
            # Find team's home and away games
            homeRows, awayRows = findHomeAndAwayTeamGameRows(
                allRowsInFile, teamNameUsedForLeague, clubDetails.displayTeamName
            )

            # Find team results and scores
            awayWins = 0
            awayLosses = 0
            homeWins = 0
            homeLosses = 0
            homeDraws = 0
            awayDraws = 0
            cupWins = 0
            cupLosses = 0
            results = []

            for rowNumber, line in enumerate(allRowsInFile, start=0):
                row = allRowsInFile[rowNumber]

                # Check if cup game
                cupRow = allRowsInFile[rowNumber - 1]
                cupGameBool = isCupGame(cupRow)

                # Find the number of rows down for the team scores
                totalNumberOfRowsAdjustmentInt = returnTeamScoreRowDownNumber(
                    cupGameBool, allRowsInFile, rowNumber, league
                )

                # Prevents attempting to process a line that doesn't exist
                if rowNumber + totalNumberOfRowsAdjustmentInt >= len(allRowsInFile):
                    break

                # Save the scores after checking if it's a decimal or integer
                text = allRowsInFile[rowNumber + totalNumberOfRowsAdjustmentInt]

                if text and type(text) is str:
                    matchScore = re.findall(r"\d+\.\d+|\d+", text)
                    if len(matchScore) == 2:
                        if any("." in score for score in matchScore):
                            homeScore = float(matchScore[0].strip())
                            awayScore = float(matchScore[1].strip())
                        else:
                            homeScore = int(matchScore[0].strip())
                            awayScore = int(matchScore[1].strip())

                # Home games
                rowText = allRowsInFile[rowNumber]
                if rowNumber in homeRows:
                    opponent = rowText.split(teamNameUsedForLeague)[1]
                    opponent = opponent.replace("&amp;", "&").strip()
                    result = f"{teamNameToUse} {homeScore} - {awayScore} {opponent}"
                    results.append(result)
                    if homeScore > awayScore:
                        if cupGameBool:
                            cupWins += 1
                        else:
                            homeWins += 1
                    elif homeScore < awayScore:
                        if cupGameBool:
                            cupLosses += 1
                        else:
                            homeLosses += 1
                    elif awayScore == homeScore:
                        homeDraws += 1

                # Away games
                if rowNumber in awayRows:
                    opponent = rowText.split(teamNameUsedForLeague)[0]
                    opponent = opponent.replace("&amp;", "&").strip()
                    result = f"{opponent} {homeScore} - {awayScore} {teamNameToUse}"
                    results.append(result)
                    if awayScore > homeScore:
                        if cupGameBool:
                            cupWins += 1
                        else:
                            awayWins += 1
                    elif awayScore < homeScore:
                        if cupGameBool:
                            cupLosses += 1
                        else:
                            awayLosses += 1
                    elif awayScore == homeScore:
                        awayDraws += 1

            # Store team result data
            teamResults = {
                "day": teamNameToStoreData,
                "awayWins": awayWins,
                "homeWins": homeWins,
                "wins": awayWins + homeWins + cupWins,
                "awayLosses": awayLosses,
                "homeLosses": homeLosses,
                "homeDraws": homeDraws,
                "awayDraws": awayDraws,
                "draws": homeDraws + awayDraws,
                "cupWins": cupWins,
                "cupLosses": cupLosses,
                "losses": homeLosses + awayLosses + cupLosses,
                "totalGamesPlayed": awayWins
                + homeWins
                + cupWins
                + awayLosses
                + homeLosses
                + cupLosses
                + awayDraws
                + homeDraws,
                "results": results,
            }
            allTeamResults.append(teamResults)

        #### PLAYER STATS ####

        # Find rows in spreadsheet for players' games
        homePlayerRows, awayPlayerRows, combinedRows = (
            returnHomeAndAwayPlayerRowsForTeam(
                allRowsInFile,
                teamNameUsedForLeague,
                league,
                clubDetails.players,
                clubDetails.duplicatePlayerNames,
                clubDetails.traitorPlayers,
            )
        )

        # Find each players' results
        for rowNumber in sorted(combinedRows):
            # reset variable values
            homeGame = None
            awayGame = None
            cupGameBool = False
            cupHome = False
            cupAway = False

            # Find columns
            if rowNumber in cupGameRows:
                cupGameBool = True
                if rowNumber in homePlayerRows:
                    cupHome = True
                if rowNumber in awayPlayerRows:
                    cupAway = True

            if rowNumber in homePlayerRows:
                if not cupGameBool:
                    homeGame = True

            if rowNumber in awayPlayerRows:
                if not cupGameBool:
                    awayGame = True

            # Find result details
            calculatePlayerStats(
                playerStats,
                allRowsInFile,
                rowNumber,
                team,
                homeGame,
                awayGame,
                cupHome,
                cupAway,
                cupGameBool,
                True,
            )

            validatePlayerNotProcessedTwice(rowNumber, homePlayerRows, awayPlayerRows)

    file.close()

# Create JSON file
dataToExport = {
    "playerResults": playerStats,
    "teamResults": allTeamResults,
    "lastUpdated": returnTodayDate(),
    "statsYear": year,
}

filename = f"src/data/{clubDetails.displayTeamName.lower()}Stats{year}.json"

# Sanity checks on the data
if generateTeamStats:
    checksTeamStats(allTeamResults, filename, clubDetails.teamDays)
checkPlayerStats(playerStats, filename, True, clubDetails.players, clubDetails.teamDays)

# Save the file
saveFile(filename, dataToExport)
