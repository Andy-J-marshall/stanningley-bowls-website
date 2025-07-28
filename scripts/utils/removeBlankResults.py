import glob
from datetime import date

year = str(date.today().year)

target_line = "*No Player*            0 *No Player*            0"
txt_files = glob.glob(f"bowlsnetReports/{year}/*.txt")

for filename in txt_files:
    with open(filename, "r", encoding="utf-8") as f:
        lines = f.readlines()

    result = []
    i = 0
    n = len(lines)
    while i < n:
        if lines[i].strip() == target_line:
            # Count consecutive target lines
            start = i
            while i < n and lines[i].strip() == target_line:
                i += 1
            if i - start == 1:
                # Only one occurrence, keep it
                result.append(lines[start])
            # If more than one, skip them all
        else:
            result.append(lines[i])
            i += 1

    with open(filename, "w", encoding="utf-8") as f:
        f.writelines(result)
