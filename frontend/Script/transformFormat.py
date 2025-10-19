import subprocess
from findFileLocation import searchHTMLFile
import os

async def render_quarto_file(file_path):
    result = subprocess.run(['quarto', 'render', file_path])
    return result.returncode

async def transformFormat(quarto_file):
    try:
        qmd_file = searchHTMLFile(quarto_file)
        if qmd_file:
            await render_quarto_file(qmd_file)
            print(" ✅ El archivo se ha renderizado correctamente")
            return os.path.dirname(qmd_file)
        else:
            print("❌ El archivo no se encontró")
            return -1
    except Exception as e:
        print(f"❌ Error al renderizar el archivo: {e}")