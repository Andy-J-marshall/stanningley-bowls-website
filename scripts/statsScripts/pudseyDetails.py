teamNames = [
    "Pudsey",
    "Pudsey A",
    "Pudsey B",
    "Pudsey C",
    "Pudsey 'A'",
    "Pudsey 'B'",
    "Pudsey 'C'",
    "Pudsey BC Ltd",
    "Pudsey BC Ltd 'A'",
    "Pudsey BC Ltd 'B'",
    "Pudsey BC",
    "Pudsey BC A",
    "Pudsey BC B",
    "Pudsey BC 'A'",
    "Pudsey BC 'B'",
    "Pudsey BC 'C'",
    "Pudsey BC 'D'",
    "Pudsey BC - A",
    "Pudsey BC - B",
    "Pudsey BC - C",
    "Pudsey BC - D",
]
displayTeamName = "Pudsey"

# Days played (add duplicate days for second teams suffixed with (A) or (B) etc.)
teamDays = [
    "AireWharfe Monday (A)",
    "AireWharfe Monday (B)",
    "AireWharfe Vets",
    "Mirfield (A)",
    "Mirfield (B)",
    "Mirfield (C)",
    "Bradford Half Holiday (A)",
    "Bradford Half Holiday (B)",
    "Spen Valley (A)",
    "Spen Valley (B)",
    "Spen Valley (C)",
    "Bradford Vets (A)",
    "Bradford Vets (B)",
    "Bradford Saturday (A)",
    "Bradford Saturday (B)",
    "Bradford Saturday (C)",
]

# Some leagues have different number of players depending on the division. Make sure you match the team name exactly as it appears in teamDays
teamsWithWithDifferentNumberOfPlayersToLeagueNorm = []

# Every player (lowercase)
players = [
    "richard hodgson",
    "andy hodgson",
    "stewart watson",
    "linda barrand",
    "eleanor graves",
]

# Players with different spellings of name (lowercase). Also need to add to deduplicateNames function
duplicatePlayerNames = ["stuart watson", "elenor graves"]

# Add players who play for other teams in leagues the team player in (lowercase)
traitorPlayers = {
    "AireWharfe Monday": [],
    "AireWharfe Vets": ["stewart watson"],
    "Mirfield": ["andy hodgson"],
    "Bradford Half Holiday": ["stewart watson"],
    "Spen Valley": ["stewart watson", "andy hodgson"],
    "Bradford Vets": [],
    "Bradford Saturday": ["stewart watson", "andy hodgson"],
}
