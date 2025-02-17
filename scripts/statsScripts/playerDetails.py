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
    if name == "philip thornton":
        name = "phil thornton"
    if name == "phillip thornton":
        name = "phil thornton"
    if name == "jim swales":
        name = "jim swailes"
    return name


allLeagues = [
    "Leeds Monday Combined",
    "Leeds Tuesday Vets",
    "Leeds Tuesday",
    "Leeds Half Holiday",
    "Leeds Thursday Vets",
    "Leeds Saturday",
    "Mirfield",
    "Spen Valley",
    "AireWharfe Monday",
    "AireWharfe Wednesday Pairs",
    "AireWharfe Vets",
    "Bradford Monday",
    "Bradford Half Holiday",
    "Bradford Vets",
    "Bradford Saturday",
]

allClubs = [
    "stanningley",
    "pudsey",
    "burley",
    "littlemoor",
    "farsley",
    "new wortley",
    "wibsey",
    "bramley",
    "new armley",
]
