import json
from datetime import date

year = str(date.today().year)


def findEndRowOfFile(league, allRowsInFile):
    endRow = len(allRowsInFile)

    if endRow == 0:
        raise Exception(league + ": Report file is empty")

    return endRow


def saveFile(filename, dataToExport):
    with open(filename, "w") as jsonFile:
        json.dump(dataToExport, jsonFile, indent=4)
        print(filename + " created")
        print('------------')
        jsonFile.close()


def returnTodayDate():
    return date.today().strftime("%d/%m/%Y")
