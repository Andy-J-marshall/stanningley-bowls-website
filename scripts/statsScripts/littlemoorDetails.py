teamNames = [
    "Littlemoor",
    "Littlemoor A",
    "Littlemoor B",
    "Littlemoor 'A'",
    "Littlemoor 'B'",
    "Littlemoor - A",
    "Littlemoor - B",
    "Littlemoor WMC",
    "Littlemoor BC",
    "Pudsey Littlemoor",
    "Pudsey Littlemoor A",
    "Pudsey Littlemoor B",
    "Littlemoor S&SC",
    "Littlemoor S&SC 'A'",
    "Littlemoor S&SC 'B'",
    "Littlemoor S & SC",
    "Littlemoor S & SC A",
    "Littlemoor S & SC B",
    "Littlemoor S & SC 'A'",
    "Littlemoor S & SC 'B'",
]
displayTeamName = "Littlemoor"

# Days played (add duplicate days for second teams suffixed with (A) or (B) etc.)
teamDays = [
    "AireWharfe Monday (A)",
    "AireWharfe Monday (B)",
    "Mirfield (A)",
    "Mirfield (B)",
    "Bradford Half Holiday (A)",
    "Bradford Half Holiday (B)",
    "Spen Valley (A)",
    "Spen Valley (B)",
    "Bradford Vets",
    "Bradford Saturday (A)",
    "Bradford Saturday (B)",
]

# Some leagues have different number of players depending on the division. Make sure you match the team name exactly as it appears in teamDays
teamsWithWithDifferentNumberOfPlayersToLeagueNorm = []


# Every player (lowercase)
players = [
    "alyssa randell",
    "stuart potter",
    "andy marshall",
    "stewart watson",
    "paul bowes",
    "martin fulton",
    "phil thornton",
    "john armitage",
    "jim moorin",
]

# Players with different spellings of name (lowercase). Also need to add to deduplicateNames function
duplicatePlayerNames = [
    "stuart watson",
    "andrew marshall",
    "james moorin",
    "phillip thornton",
    "philip thornton",
]


# Add players who play for other teams in leagues the team player in (lowercase)
traitorPlayers = {
    "AireWharfe Monday": ["stewart watson"],
    "Mirfield": ["stewart watson"],
    "Bradford Half Holiday": [],
    "Spen Valley": [],
    "Bradford Vets": [],
    "Bradford Saturday": [],
}
