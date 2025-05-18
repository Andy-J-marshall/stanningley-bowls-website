import statsHelper

# Bradford saturday and Mirfield teams have 10 players except in low divisions
leaguesWith10Players = [
    "airewharfe monday",
    "airewharfe saturday",
    "bradford saturday",
    "mirfield",
]
leaguesWith6Players = [
    "bradford monday",
    "bradford half holiday",
    "leeds half holiday",
]


def returnBaseRowDownNumber(cupGameBool, forAggAdjustmentBool):
    if cupGameBool or forAggAdjustmentBool:
        return 9
    return 10


def returnTeamScoreRowDownNumber(cupGameBool, allRowsInFile, rowNumber, league):
    baseAdjustment = returnBaseRowDownNumber(cupGameBool, False)
    rowsDownAdjustmentInt = 0
    rowsUpAdjustmentInt = 0
    totalNumberOfRowsAdjustmentInt = 0

    # AireWharfe, Mirfield and Bradford leagues display scores differently
    if "bradford" in league.lower() or "airewharfe" in league.lower():
        rowsUpAdjustmentInt += 1

    if "mirfield" in league.lower():
        rowsDownAdjustmentInt += 1

    rowsUpAdjustmentInt = adjustRowNumberFor10PlayerTeams(league, rowsUpAdjustmentInt)
    rowsDownAdjustmentInt = returnAdjustedRowNumberFor6PlayerTeams(
        league, rowsDownAdjustmentInt
    )

    if cupGameBool:
        if "wednesday pairs" in league.lower():
            rowsUpAdjustmentInt -= 1

        # To account for handicap row in cup games
        checkForTeamHandicap = allRowsInFile[
            rowNumber + baseAdjustment - rowsDownAdjustmentInt
        ]
        if (
            type(checkForTeamHandicap) is str
            and "handicap" in checkForTeamHandicap.lower()
        ):
            rowsDownAdjustmentInt -= 1

        # Spen cup games have 12 player teams
        if "spen" in league.lower():
            rowsDownAdjustmentInt -= 5

    totalNumberOfRowsAdjustmentInt = (
        baseAdjustment - rowsDownAdjustmentInt + rowsUpAdjustmentInt
    )
    return totalNumberOfRowsAdjustmentInt


def adjustRowNumberFor10PlayerTeams(league, rowsUpAdjustmentInt):
    if league.lower() in leaguesWith10Players:
        return rowsUpAdjustmentInt + 2
    return rowsUpAdjustmentInt


def returnAdjustedRowNumberFor6PlayerTeams(league, rowsDownAdjustmentInt):
    if league.lower() in leaguesWith6Players:
        return rowsDownAdjustmentInt + 2
    return rowsDownAdjustmentInt


def isCupGame(cupRow):
    if cupRow and type(cupRow) is str:
        for text in statsHelper.cupText:
            if text.lower() in cupRow.lower():
                return True
    return False


def findHomeAndAwayTeamGameRows(allRowsInFile, teamNameUsedForLeague, displayTeamName):
    homeRow = []
    awayRow = []
    for rowNumber, line in enumerate(allRowsInFile, start=0):
        row = allRowsInFile[rowNumber]
        if row and type(row) is str:
            # This ignores cup games hosted by the club
            hostedCupGame = isCupGame(row.lower())

            # Check if A and B team are playing each other
            playingEachOtherBool = False
            if not hostedCupGame and row.lower().count(displayTeamName.lower()) > 1:
                playingEachOtherBool = True
                suffixes = [" a", " 'a'", " b", " 'b'", " c", " 'c'", " d", " 'd'"]
                for suffix in suffixes:
                    if row.lower().strip().endswith(suffix):
                        if teamNameUsedForLeague.lower().endswith(suffix):
                            awayRow.append(rowNumber)
                        else:
                            homeRow.append(rowNumber)
                        break

            # Store home and away game rows
            if (
                playingEachOtherBool is False
                and hostedCupGame is False
                and teamNameUsedForLeague.lower() in row.lower()
            ):
                words = row.strip().lower().split()
                firstWord = words[0].lower()
                if firstWord == displayTeamName.lower():
                    homeRow.append(rowNumber)
                else:
                    awayRow.append(rowNumber)

    return homeRow, awayRow


def checkTeamName(name, nameUsedForLeague, expectedDisplayName):
    continueGenerating = True

    # Checks team not processed twice
    if name.lower().endswith(" (a)") and nameUsedForLeague.lower().endswith(" b"):
        raise Exception("B team found for A team stats")
    if name.lower().endswith(" (b)") and nameUsedForLeague.lower().endswith(" a"):
        raise Exception("A team found for B team stats")

    # Checks valid team name found
    if expectedDisplayName.lower() not in nameUsedForLeague.lower():
        raise Exception("Incorrect team name found")

    # Checks not picking up wrong team if one of the teams has not played a game yet
    if name.lower().endswith(" (a)") and not nameUsedForLeague.lower().endswith(
        (" a", " 'a'")
    ):
        continueGenerating = False
    if name.lower().endswith(" (b)") and not nameUsedForLeague.lower().endswith(
        (" b", " 'b'")
    ):
        continueGenerating = False

    return continueGenerating
