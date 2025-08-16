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
]

for file_pair in files_to_update:
    # Read data from the input file
    with open(file_pair["input_file"], "r", encoding="utf-8") as f:
        data_to_append = f.read()

    # Read the original output file data
    with open(file_pair["output_file"], "r", encoding="utf-8") as f:
        original_data = f.read()

    # Write the combined data back to the output file (original first, then append)
    with open(file_pair["output_file"], "w", encoding="utf-8") as f:
        f.write(original_data)
        f.write(data_to_append)
