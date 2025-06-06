import playerDetails
from sanityChecks import checkPlayerStats
from fileUtils import returnTodayDate, saveFile, year
from statsHelper import findCupGameRows
from playerStatsHelper import (
    returnListOfPlayerStats,
    calculatePlayerStats,
    checkCorrectTeamForPlayer,
    returnHomeAndAwayPlayerRowsForAllTeams,
)


playerStats = returnListOfPlayerStats(
    playerDetails.allLeagues, False, playerDetails.players
)

print("UPDATING ALL PLAYER STATS")

for league in playerDetails.allLeagues:
    # Goes through each sheet in turn
    with open(f"bowlsnetReports/{year}/{league}.txt", "r") as file:
        print("Updating Stats: " + league)
        allRowsInFile = file.readlines()

        # Find the cup games in the stats
        cupGameRows = findCupGameRows(allRowsInFile)

        # Find rows in spreadsheet for players' games
        homePlayerRow, awayPlayerRow = returnHomeAndAwayPlayerRowsForAllTeams(
            allRowsInFile, playerDetails.players, playerDetails.duplicatePlayerNames
        )

        # Find each players' results
        for rowNumber in range(0, len(allRowsInFile) + 1):
            # Create list as players may be playing against one another
            playerRows = []
            playerToProcess = False

            if rowNumber in homePlayerRow:
                playerToProcess = True
                playerRows.append("home")

            if rowNumber in awayPlayerRow:
                playerToProcess = True
                playerRows.append("away")

            if playerToProcess is False:
                continue

            for homeOrAway in playerRows:
                # reset variable values
                correctPlayerFound = False
                homeGame = None
                awayGame = None
                cupGameBool = False
                cupHome = False
                cupAway = False

                # Find columns
                if rowNumber in cupGameRows:
                    cupGameBool = True
                    if homeOrAway == "home":
                        cupHome = True
                    if homeOrAway == "away":
                        cupAway = True

                if homeOrAway == "home":
                    if not cupGameBool:
                        homeGame = True

                if homeOrAway == "away":
                    if not cupGameBool:
                        awayGame = True

                # Checks player plays for expected team
                correctPlayerFound = checkCorrectTeamForPlayer(
                    allRowsInFile,
                    rowNumber,
                    homeGame,
                    awayGame,
                    cupHome,
                    cupAway,
                )

                # Find result details
                if correctPlayerFound:
                    calculatePlayerStats(
                        playerStats,
                        allRowsInFile,
                        rowNumber,
                        league,
                        homeGame,
                        awayGame,
                        cupHome,
                        cupAway,
                        cupGameBool,
                        False,
                    )
    file.close()

# Create JSON file
dataToExport = {
    "playerResults": playerStats,
    "lastUpdated": returnTodayDate(),
    "statsYear": year,
}

filename = f"src/data/allClubsStats{year}.json"

# Sanity checks on the data
checkPlayerStats(
    playerStats, filename, False, playerDetails.players, playerDetails.allLeagues
)

# Save the file
saveFile(filename, dataToExport)
