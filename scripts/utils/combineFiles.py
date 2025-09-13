from datetime import date

year = str(date.today().year)

files_to_update = [
    {
        "input_file": f"bowlsnetReports/{year}/AireWharfe Monday Cup.txt",
        "output_file": f"bowlsnetReports/{year}/AireWharfe Monday.txt",
    },
    {
        "input_file": f"bowlsnetReports/{year}/AireWharfe Wednesday Pairs Cup.txt",
        "output_file": f"bowlsnetReports/{year}/AireWharfe Wednesday Pairs.txt",
    },
    {
        "input_file": f"bowlsnetReports/{year}/West Riding Cup.txt",
        "output_file": f"bowlsnetReports/{year}/Spen Valley.txt",
    },
    {
        "input_file": f"bowlsnetReports/{year}/Leeds Saturday CrossFlatts.txt",
        "output_file": f"bowlsnetReports/{year}/Leeds Saturday.txt",
    },
    {
        "input_file": f"bowlsnetReports/{year}/Leeds Ladies Cup.txt",
        "output_file": f"bowlsnetReports/{year}/Leeds Ladies.txt",
    },
]

for file_pair in files_to_update:
    # Read data from the input file
    with open(file_pair["input_file"], "r", encoding="utf-8") as f:
        input_lines = f.readlines()

    # Read the original output file data
    with open(file_pair["output_file"], "r", encoding="utf-8") as f:
        output_lines = f.readlines()

    # Only write if every row from input_file is not already in output_file
    if not all(line in output_lines for line in input_lines):
        with open(file_pair["output_file"], "w", encoding="utf-8") as f:
            f.writelines(output_lines)
            f.writelines(input_lines)
