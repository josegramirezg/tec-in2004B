import hashlib
from datetime import datetime

def generateHash(subjectName, moduleName, presentationName):
    # Construir el texto a hashear
    text = f"{subjectName}-{moduleName}-{presentationName}-{datetime.now()}"

    # Generar el hash
    return hashlib.md5(text.encode('utf-8')).hexdigest()[:11]