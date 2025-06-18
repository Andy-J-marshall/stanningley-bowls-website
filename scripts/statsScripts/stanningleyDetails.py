teamNames = [
    "Stanningley",
    "Stanningley A",
    "Stanningley B",
    "Stanningley Park",
    "Stanningley Park A",
    "Stanningley Park B",
    "Stanningley Pk",
    "Stanningley Pk A",
    "Stanningley Pk B",
]
displayTeamName = "Stanningley"

# Days played (add duplicate days for second teams suffixed with (A) or (B) etc.)
teamDays = [
    "AireWharfe Monday",
    "Leeds Tuesday Vets",
    "Leeds Tuesday",
    "Leeds Half Holiday",
    "AireWharfe Wednesday Pairs",
    "Leeds Thursday Vets",
    "Leeds Ladies",
    "Leeds Saturday (A)",
    "Leeds Saturday (B)",
]

# Some leagues have different number of players depending on the division. Make sure you match the team name exactly as it appears in teamDays
teamsWithWithDifferentNumberOfPlayersToLeagueNorm = []

# Every player (lowercase)
players = [
    "andrew marshall",
    "alyssa randell",
    "paul bowes",
    "andy waller",
    "john armitage",
    "clifford brogie",
    "donald shaw",
    "alison woodfine",
    "joey broadbent",
    "vanessa lancaster",
    "jim moorin",
    "duncan mcphail",
    "craig clarkson",
    "steve gardner",
    "neil porter",
    "stewart watson",
    "dave eaton",
    "tracey marshall",
    "derek wilson",
    "laila packer",
    "paul leonard",
    "malvin miller",
    "stuart potter",
    "colin haque",
    "ken green",
    "stephen tiernan",
    "phil sutcliffe",
    "martin fulton",
    "harvey leonard",
    "richard hodgson",
    "jim swailes",
    "rob packer",
    "nicola bona",
    "linda barrand",
    "bob marshall",
    "karen uttley",
    "mary spears",
    "louise roberts",
    "eleanor graves",
    "kate hall",
    "sarah connolly",
    "stuart reardon",
    "malcolm crowson",
    "steve sheldon",
]

# Players with different spellings of name (lowercase). Also need to add to deduplicateNames function
duplicatePlayerNames = [
    "david eaton",
    "duncan mc phail",
    "stuart watson",
    "andy marshall",
    "andrew waller",
    "cliff brogie",
    "james moorin",
    "jim swales",
    "jimmy swailes",
    "elenor graves",
]


# Add players who play for other teams in leagues the team player in (lowercase)
traitorPlayers = {
    "AireWharfe Monday": [
        "jim moorin",
        "stewart watson",
        "richard hodgson",
        "martin fulton",
        "duncan mcphail",
        "john armitage",
        "jim swailes",
    ],
    "Leeds Tuesday Vets": [],
    "Leeds Tuesday": ["neil porter", "stuart reardon", "malcolm crowson"],
    "Leeds Half Holiday": ["clifford brogie"],
    "AireWharfe Wednesday Pairs": [],
    "Leeds Thursday Vets": ["neil porter", "stuart reardon", "malcolm crowson"],
    "Leeds Ladies": [],
    "Leeds Saturday": ["clifford brogie", "neil porter", "stuart reardon", "malcolm crowson"],
}
