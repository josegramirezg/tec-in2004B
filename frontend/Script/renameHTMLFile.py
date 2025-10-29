from pathlib import Path
import os

def renameHTMLFile(location_file, htmlName, hashName):
    full_path = os.path.join(location_file, htmlName)
    hash_name = os.path.join(location_file, hashName + ".html")

    Path(full_path).replace(hash_name)
    print(f"✅ Renombrado: {htmlName} → {hashName}.html")