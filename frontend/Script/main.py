import json
import os
import sys
import asyncio
from generateHash import generateHash
from renameHTMLFile import renameHTMLFile
from transformFormat import transformFormat

# Cargar datos del archivo data.json
with open('../src/data/subjects-modules.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

with open('../src/data/predefined-routes.json', 'r', encoding='utf-8') as file:
    predefined_routes = json.load(file)

# Variable global para las rutas predefinidas
PREDEFINED_HASHES_ROUTES = predefined_routes['predefinedHashesRoutes']

# Variable global para la materia
MATERIAS = data['materias']
TEMP_STORAGE = {}

# Funciones reutilizables
def clean_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def ask_continue(message):
    return input(f'{message} (s/n): ').lower() == 's'

def print_materias(materias):
    for materia in materias:
        print(f'{materia["id"]}. {materia["nombre"]}')

def print_modulos(modulos):
    for modulo in modulos:
        print(f'{modulo["id"]}. {modulo["nombre"]}')

def input_materia_id():
    return int(input('\n- Inserta el número de la materia: '))

def input_modulo_id():
    return int(input('\n- Inserta el número del módulo: '))

# Funciones de agregación de datos
async def add_presentaciones(currentSize):
    presentaciones = []
    while True:
        clean_screen()
        print("\n* Registra una nueva presentación: " + "\n")
        presentacion = {
            'id': currentSize + 1,
            'nombre': input('- Nombre de la presentación: '),
            'descripcion': input('- Descripción de la presentación: '),
            'tipo': input('- Tipo de presentación (Quarto, PDF, PowerPoint, etc.): ')
        }
        TEMP_STORAGE["presentationName"] = presentacion['nombre']

        # Generar el hash de la presentación
        genereatedHash = generateHash(**TEMP_STORAGE)
        PREDEFINED_HASHES_ROUTES.append(genereatedHash)
        presentacion['hash'] = genereatedHash
        
        fileName = input('\n- Inserta el nombre del archivo (.qmd): ')

        # Transformar el archivo a HTML
        try:
            location_file = await transformFormat(fileName)
        except Exception as e:
            print(f"\nERROR: Fallo al renderizar {fileName}: {e}")
            print("Terminando ejecución...")
            sys.exit(1)

        # Cambiar el nombre del archivo de la presentación de HTML a hash
        try:
            renameHTMLFile(location_file, fileName.replace('.qmd', '.html'), genereatedHash)
        except Exception as e:
            print(f"\nERROR: Fallo al renombrar archivo: {e}")
            print("Terminando ejecución...")
            sys.exit(1)

        presentaciones.append(presentacion)

        if not ask_continue('\n¿Desea agregar otra presentación?'):
            break
        currentSize += 1
    return presentaciones

async def add_modulos(currentSize):
    modulos = [] 
    while True:
        clean_screen()
        print("\n* Registra un nuevo módulo: " + "\n")
        modulo = {
            'id': currentSize + 1,
            'nombre': input('- Nombre del módulo: '),
            'descripcion': input('- Descripción del módulo: '),
        }
        TEMP_STORAGE["moduleName"] = modulo['nombre']
        modulo['presentaciones'] = await add_presentaciones(0)

        modulos.append(modulo)

        if not ask_continue('\n¿Desea agregar otro módulo?'):
            break
        currentSize += 1
    return modulos

async def add_materias(currentSize):
    materias = []
    clean_screen()
    print("\n* Registra una nueva materia: " + "\n")
    while True:
        materia = {
            'id': currentSize + 1,
            'nombre': input('- Nombre de la materia: '),
            'codigo': input('- Código de la materia: '),
            'descripcion': input('- Descripción de la materia: '),
        }
        TEMP_STORAGE["subjectName"] = materia['nombre']
        materia['modulos'] = await add_modulos(0)

        materias.append(materia)

        if not ask_continue('\n¿Desea agregar otra materia?'):
            break
        currentSize += 1
    return materias


async def main():
    while True:
        clean_screen()
        # ------------------------------------------------------------
        # Menu de opciones
        print('* Elige la operación que deseas realizar: ' + "\n")
        if len(MATERIAS) > 0:
            print("1. Agregar presentaciones a módulos existentes")
            print("2. Agregar módulos a materias existentes")
        print("3. Agregar materias")
        opcion = int(input('\n- Inserta un número: '))
        # ------------------------------------------------------------
        clean_screen()

        match opcion:
            case 1 if len(MATERIAS) > 0:
                print("\n* Elige la materia a la que deseas agregar presentaciones: " + "\n")
                print_materias(MATERIAS)
                materia_id = input_materia_id()
                clean_screen()
                if 1 <= materia_id <= len(MATERIAS):
                    TEMP_STORAGE["subjectName"] = MATERIAS[materia_id - 1]["nombre"]
                    print("\n* Elige el módulo al que deseas agregar presentaciones: " + "\n")
                    data_modulo = MATERIAS[materia_id - 1]['modulos']
                    print_modulos(data_modulo)
                    modulo_id = input_modulo_id()
                    if 1 <= modulo_id <= len(data_modulo):
                        TEMP_STORAGE["moduleName"] = data_modulo[modulo_id - 1]["nombre"]
                        total_presentaciones = len(data_modulo[modulo_id - 1]['presentaciones'])
                        nuevas_presentaciones = await add_presentaciones(total_presentaciones)

                        # Construir toda la materia con los datos actualizados
                        MATERIAS[materia_id - 1]['modulos'][modulo_id - 1]['presentaciones'].extend(nuevas_presentaciones)
                        print("\n" + json.dumps(MATERIAS, indent=4, ensure_ascii=False))
                    else: 
                        print("Módulo no encontrado")
                else:
                    print("Materia no encontrada")

            case 2 if len(MATERIAS) > 0:
                print("\n* Elige la materia a la que deseas agregar módulos: " + "\n")
                print_materias(MATERIAS)
                materia_id = input_materia_id()
                clean_screen()
                if 1 <= materia_id <= len(MATERIAS):
                    TEMP_STORAGE["subjectName"] = MATERIAS[materia_id - 1]["nombre"]
                    print("\n* Elige el módulo al que deseas agregar presentaciones: " + "\n")
                    data_modulo = MATERIAS[materia_id - 1]['modulos']
                    total_modulos = len(data_modulo)
                    nuevos_modulos = await add_modulos(total_modulos)
                    MATERIAS[materia_id - 1]['modulos'].extend(nuevos_modulos)
                    print("="*40)
                    print("Vista previa de los datos")
                    print("="*40)
                    print("\n" + json.dumps(MATERIAS, indent=4, ensure_ascii=False))
                else:
                    print("Materia no encontrada")

            case 3:
                total_materias = len(MATERIAS)
                nuevas_materias = await add_materias(total_materias)
                MATERIAS.extend(nuevas_materias)
                print("\n" + json.dumps(MATERIAS, indent=4, ensure_ascii=False))
            case _:
                print('Opción inválida')

        if not ask_continue('\n- ¿Desea realizar otra operación?'):
            break

    if input('\n- ¿Desea guardar los cambios? (s/n): ').lower() == "s":
        with open('../src/data/subjects-modules.json', 'w', encoding='utf-8') as file:
            object_to_save = {"materias": MATERIAS}
            json.dump(object_to_save, file, indent=4, ensure_ascii=False)
        with open('../src/data/predefined-routes.json', 'w', encoding='utf-8') as file:
            object_to_save = {"predefinedHashesRoutes": PREDEFINED_HASHES_ROUTES}
            json.dump(object_to_save, file, indent=4, ensure_ascii=False)
        print('\n ✅ Cambios guardados')
    else:
        print('\n ❌ No se guardaron los cambios')

# Ejecutar la función main
if __name__ == "__main__":
    asyncio.run(main())