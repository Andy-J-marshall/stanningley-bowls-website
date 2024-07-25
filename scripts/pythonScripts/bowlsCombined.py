import json
import os
from datetime import date
import utils
import re

year = str(date.today().year)

leaguesDays = utils.teamDays
players = utils.players
duplicatePlayerNames = utils.duplicatePlayerNames
playerResults = utils.returnListOfPlayerStats(utils.teamDays, False)
formatName = utils.formatName
standardiseName = utils.standardiseName
teamsTracking = utils.teamsTracking
returnTotalAggAvailablePerGame = utils.returnTotalAggAvailablePerGame
sanityChecksOnPlayerStats = utils.sanityChecksOnPlayerStats
checkFileSize = utils.checkFileSize
cupTextList = utils.cupText
leaguesProcessed = []

print('UPDATING ALL PLAYER STATS')

for league in leaguesDays:
    # To prevent duplication
    league = league.replace(' (A)', '').replace(' (B)', '')
    if league in leaguesProcessed:
        continue
    leaguesProcessed.append(league)

    # Goes through each sheet in turn
    with open('bowlsnetReports/' + year + '/' + league + '.txt', 'r') as file:
        print('Updating Stats: ' + league)
        allRowsInFile = file.readlines()

        # Find the number of rows in the file and the stating row to check the stats
        startingRow = 0
        endRow = 0
        for rowNumber, line in enumerate(allRowsInFile, start=0):
            row = allRowsInFile[rowNumber]
            if row and type(row) is str and 'FULL RESULTS' in row.upper():
                startingRow = rowNumber
            endRow = rowNumber
            
        if endRow == 0:
            raise Exception('Report file is empty')

        # Find the cup games in the stats
        cupGameRows = []
        for rowNumber, line in enumerate(allRowsInFile, start=0):
            if rowNumber <= startingRow:
                continue
            row = allRowsInFile[rowNumber]
            if row and type(row) is str:
                for cupText in cupTextList:
                    if cupText in row.lower():
                        for i in range(0, 11):
                            cupGameRows.append(rowNumber + i)
                        break

        # Find rows in spreadsheet for players' games
        homePlayerRow = []
        awayPlayerRow = []
        for rowNumber, line in enumerate(allRowsInFile, start=0):
            if rowNumber <= startingRow:
                continue
            row = allRowsInFile[rowNumber]
            if (row and type(row) is str):
                findPossiblePlayerNames = re.findall(r"([A-za-z'\-()]+(?: [A-Za-z'\-()]+)+)", row)
                if len(findPossiblePlayerNames) > 1:                
                    possiblePlayerNameHome = str(findPossiblePlayerNames[0]).strip()
                    possiblePlayerNameHome = standardiseName(possiblePlayerNameHome).lower()
                    if possiblePlayerNameHome in players or possiblePlayerNameHome in duplicatePlayerNames:
                        homePlayerRow.append(rowNumber)

                    possiblePlayerNameAway = str(findPossiblePlayerNames[1]).strip()
                    possiblePlayerNameAway = standardiseName(possiblePlayerNameAway).lower()
                    if possiblePlayerNameAway in players or possiblePlayerNameAway in duplicatePlayerNames:
                        awayPlayerRow.append(rowNumber)

        # Find each players' results
        for rowNumber in range(startingRow, endRow + 1):
            # Create list as players may be playing against one another
            playerRows = []
            playerToProcess = False
            
            if rowNumber in homePlayerRow:
                playerToProcess = True
                playerRows.append('home')

            if rowNumber in awayPlayerRow:
                playerToProcess = True
                playerRows.append('away')
            
            if playerToProcess is False:
                continue

            for homeOrAway in playerRows:
                # reset variable values
                aggregate = 0
                opponentAggregate = 0
                secondOpponent = ''
                playerName = ''
                opponentsName = ''
                pairsGame = False
                pairsPartner = ''
                opponentTeam = ''
                correctPlayerFound = False
                homeGame = None
                awayGame = None
                cupGame = False
                cupHome = False
                cupAway = False

                # Find columns
                if rowNumber in cupGameRows:
                    cupGame = True
                    if homeOrAway == 'home':
                        cupHome = True
                    if homeOrAway == 'away':
                        cupAway = True

                if homeOrAway == 'home':
                    if not cupGame:
                        homeGame = True

                if homeOrAway == 'away':
                    if not cupGame:
                        awayGame = True

                # Checks player plays for expected team
                for i in range(0, 13):
                    if rowNumber - i <= startingRow:
                        break

                    possibleTeamText = allRowsInFile[rowNumber - i]
                    if type(possibleTeamText) is str:
                        # Checks against full team name first
                        for team in teamsTracking:
                            if team.lower() in possibleTeamText.lower():
                                correctPlayerFound = True
                                break
                        
                        if correctPlayerFound is True:
                            break
                            
                        # Checks against each word in the team name if team not found
                        teamNameParts = possibleTeamText.split(' ')
                        for part in teamNameParts:
                            if part.lower() in teamsTracking:
                                correctPlayerFound = True
                                break

                # Find result details
                if correctPlayerFound:
                    text = allRowsInFile[rowNumber]

                    findPossiblePlayerNames = re.findall(r"([A-za-z'\-()]+(?: [A-Za-z'\-()]+)+)", text)
                    if homeGame or cupHome:
                        opponentsName = findPossiblePlayerNames[1]
                    
                    if awayGame or cupAway:
                        opponentsName = findPossiblePlayerNames[0]
                        
                    if 'walkover' not in opponentsName.lower() and 'no player' not in opponentsName.lower():
                        if homeGame or cupHome:
                            playerName = findPossiblePlayerNames[0]
                            
                            aggregateMatch = re.findall(r'\d+', text)
                            if aggregateMatch:
                                aggregate = int(aggregateMatch[0].strip())
                                opponentAggregate = int(aggregateMatch[1].strip())

                        if awayGame or cupAway:
                            playerName = findPossiblePlayerNames[1]
                            
                            aggregateMatch = re.findall(r'\d+', text)
                            if aggregateMatch:
                                aggregate = int(aggregateMatch[1].strip())
                                opponentAggregate = int(aggregateMatch[0].strip())

                        # Checks whether it's a pairs game
                        pairsGame = False
                        scoreFoundInText = any(char.isdigit() for char in text)
                        if scoreFoundInText is False:
                            pairsGame = True
                            rowBelowText = allRowsInFile[rowNumber - 1]
                            
                            findPossiblePairsPlayerNames = re.findall(r"([A-za-z'\-()]+(?: [A-Za-z'\-()]+)+)", rowBelowText)
                            pairsAggregateMatch = re.findall(r'\d+', rowBelowText)
                            if homeGame or cupHome:
                                pairsPartner = findPossiblePairsPlayerNames[0]
                                secondOpponent = findPossiblePairsPlayerNames[1]
                                aggregate = int(pairsAggregateMatch[0].strip())
                                opponentAggregate = int(pairsAggregateMatch[1].strip())
                    
                            if awayGame or cupAway:
                                pairsPartner = findPossiblePairsPlayerNames[1]
                                secondOpponent = findPossiblePairsPlayerNames[0]
                                aggregate = int(pairsAggregateMatch[1].strip())
                                opponentAggregate = int(pairsAggregateMatch[0].strip())
                                
                        else:
                            rowBelowText = allRowsInFile[rowNumber + 1]
                            
                            findPossiblePairsPlayerNames = re.findall(r"([A-za-z'\-()]+(?: [A-Za-z'\-()]+)+)", rowBelowText)
                            pairsAggregateMatch = re.findall(r'\d+', rowBelowText)
                            if len(pairsAggregateMatch) == 0:
                                pairsGame = True
                                if homeGame or cupHome:
                                    pairsPartner = findPossiblePairsPlayerNames[0]
                                    secondOpponent = findPossiblePairsPlayerNames[1]
                                if awayGame or cupAway:
                                    pairsPartner = findPossiblePairsPlayerNames[1]
                                    secondOpponent = findPossiblePairsPlayerNames[0]

                        playerName = formatName(playerName)
                        opponentsName = formatName(opponentsName)
                        pairsPartner = formatName(pairsPartner)
                        secondOpponent = formatName(secondOpponent)

                        # Store player stats
                        playerNameForResult = playerName
                        if pairsGame:
                            playerResults[playerName]['pairsPartners'].append(pairsPartner)
                            playerNameForResult = playerName + ' & ' + pairsPartner
                            opponentsName = opponentsName + ' & ' + secondOpponent
                            playerResults[playerName]['availablePairsAgg'] += returnTotalAggAvailablePerGame(league)
                            playerResults[playerName]['totalPairsAgg'] += aggregate
                            playerResults[playerName]['totalPairsAggAgainst'] += opponentAggregate

                        playerResults[playerName]['totalGamesPlayed'] += 1
                        playersResult = playerNameForResult + ' ' + \
                            str(aggregate) + ' - ' + \
                            str(opponentAggregate) + ' ' + opponentsName
                        playerResults[playerName]['results'].append(
                            playersResult)

                        # Wins
                        if aggregate > opponentAggregate:
                            if pairsGame:
                                playerResults[playerName]['winningPairsPartners'].append(pairsPartner)
                                playerResults[playerName]['pairWins'] += 1
                            if homeGame:
                                playerResults[playerName]['homeWins'] += 1
                                if pairsGame:
                                    playerResults[playerName]['pairHomeWins'] += 1
                            if awayGame:
                                playerResults[playerName]['awayWins'] += 1
                                if pairsGame:
                                    playerResults[playerName]['pairAwayWins'] += 1
                            if cupGame:
                                playerResults[playerName]['cupWins'] += 1
                                if pairsGame:
                                    playerResults[playerName]['pairCupWins'] += 1
                        # Losses
                        else:
                            if pairsGame:
                                playerResults[playerName]['losingPairsPartners'].append(pairsPartner)
                                playerResults[playerName]['pairLosses'] += 1
                            if homeGame:
                                playerResults[playerName]['homeLosses'] += 1
                                if pairsGame:
                                    playerResults[playerName]['pairHomeLosses'] += 1
                            if awayGame:
                                playerResults[playerName]['awayLosses'] += 1
                                if pairsGame:
                                    playerResults[playerName]['pairAwayLosses'] += 1
                            if cupGame:
                                playerResults[playerName]['cupLosses'] += 1
                                if pairsGame:
                                    playerResults[playerName]['pairCupLosses'] += 1

                        # Averages
                        playerResults[playerName]['availableAgg'] += returnTotalAggAvailablePerGame(league)
                        playerResults[playerName]['totalAgg'] += aggregate
                        playerResults[playerName]['totalAggAgainst'] += opponentAggregate
                        if homeGame:
                            playerResults[playerName]['availableHomeAgg'] += returnTotalAggAvailablePerGame(league)
                            playerResults[playerName]['totalHomeAgg'] += aggregate
                            playerResults[playerName]['totalHomeAggAgainst'] += opponentAggregate
                            if pairsGame:
                                playerResults[playerName]['availablePairsHomeAgg'] += returnTotalAggAvailablePerGame(league)
                                playerResults[playerName]['totalPairsHomeAgg'] += aggregate
                                playerResults[playerName]['totalPairsHomeAggAgainst'] += opponentAggregate
                        if awayGame:
                            playerResults[playerName]['availableAwayAgg'] += returnTotalAggAvailablePerGame(league)
                            playerResults[playerName]['totalAwayAgg'] += aggregate
                            playerResults[playerName]['totalAwayAggAgainst'] += opponentAggregate
                            if pairsGame:
                                playerResults[playerName]['availablePairsAwayAgg'] += returnTotalAggAvailablePerGame(league)
                                playerResults[playerName]['totalPairsAwayAgg'] += aggregate
                                playerResults[playerName]['totalPairsAwayAggAgainst'] += opponentAggregate
                        playerResults[playerName]['dayPlayed'].append(league)
    file.close()

# Create JSON file
dataToExport = {
    'playerResults': playerResults,
    'lastUpdated': date.today().strftime("%d/%m/%Y"),
    'statsYear': year
}

filename = 'src/data/allPlayerStats' + year + '.json'
previousFileSize = 0
if os.path.exists(filename):
    previousFileSize = checkFileSize(filename)
    os.remove(filename)

with open(filename, 'w') as jsonFile:
    json.dump(dataToExport, jsonFile, indent=4)
    print(filename + ' created')
    print('------')
    jsonFile.close()

# Sanity checks on the data
sanityChecksOnPlayerStats(playerResults, players)
newFileSize = checkFileSize(filename)
if newFileSize < previousFileSize:
    raise Exception(f'JSON file has fewer rows than before. Updated: {newFileSize}, previous: {previousFileSize}')
print('Sanity checks for all teams stats complete')
