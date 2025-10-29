from pathlib import Path

def searchHTMLFile(fileName):
    root = Path("../public/documents/")

    archivos_encontrados = list(root.rglob(fileName))

    return archivos_encontrados[0] if archivos_encontrados else False

print(searchHTMLFile("test.qmd"))