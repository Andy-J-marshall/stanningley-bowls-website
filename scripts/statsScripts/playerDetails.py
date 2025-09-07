import playerStatsHelper
import stanningleyDetails
import littlemoorDetails
import pudseyDetails

players = list(
    set(stanningleyDetails.players + littlemoorDetails.players + pudseyDetails.players)
)
duplicatePlayerNames = list(
    set(
        stanningleyDetails.duplicatePlayerNames
        + littlemoorDetails.duplicatePlayerNames
        + pudseyDetails.duplicatePlayerNames
    )
)


# Add alternative names for players (lowercase)
def deduplicateNames(name):
    name = playerStatsHelper.standardiseName(name)
    if name == "david eaton":
        name = "dave eaton"
    if name == "duncan mc phail":
        name = "duncan mcphail"
    if name == "andy marshall":
        name = "andrew marshall"
    if name == "stuart watson":
        name = "stewart watson"
    if name == "cliff brogie":
        name = "clifford brogie"
    if name == "andrew waller":
        name = "andy waller"
    if name == "don shaw":
        name = "donald shaw"
    if name == "james moorin":
        name = "jim moorin"
    if name == "jim swales":
        name = "jim swailes"
    if name == "jimmy swailes":
        name = "jim swailes"
    if name == "elenor graves":
        name = "eleanor graves"
    if name == "malcolm crowsman":
        name = "malcolm crowson"
    if name == "andrew hodgson":
        name = "andy hodgson"
    return name


allLeagues = [
    "Leeds Monday Combined",
    "Leeds Tuesday Vets",
    "Leeds Tuesday",
    "Leeds Half Holiday",
    "Leeds Thursday Vets",
    "Leeds Saturday",
    "Leeds Ladies",
    "Mirfield",
    "Spen Valley",
    "Ossett and Horbury",
    "Tadcaster",
    "AireWharfe Monday",
    "AireWharfe Wednesday Pairs",
    "AireWharfe Vets",
    "AireWharfe Saturday",
    "Bradford Monday",
    "Bradford Half Holiday",
    "Bradford Vets",
    "Bradford Saturday",
    "Barkston Ash",
]

allClubs = [
    "stanningley",
    "pudsey",
    "littlemoor",
    "farsley",
    "new wortley",
    "meanwood",
    "garforth",
    "spen victoria",
]
