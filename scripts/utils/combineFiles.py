files_to_update = [
    {
        "input_file": "bowlsnetReports/2025/AireWharfe Monday Cup.txt",
        "output_file": "bowlsnetReports/2025/AireWharfe Monday.txt",
    },
    {
        "input_file": "bowlsnetReports/2025/AireWharfe Wednesday Pairs Cup.txt",
        "output_file": "bowlsnetReports/2025/AireWharfe Wednesday Pairs.txt",
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
