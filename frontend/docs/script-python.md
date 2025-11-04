# Script Python para Gestión de Presentaciones

Este documento explica cómo usar el script Python para agregar presentaciones de forma automatizada.

---

## 📋 Requisitos Previos

1. **Python 3.7+** instalado
2. **Quarto** instalado y configurado
3. Archivo `.qmd` de tu presentación listo

---

## 🚀 Pasos para Ejecutar el Script

### 1. Navegar a la carpeta del script

```powershell
cd frontend\Script
```

### 2. Ejecutar el script

```powershell
python main.py
```

---

## 📝 Menú de Opciones

El script te mostrará un menú con opciones que varían según si ya existen materias:

**Si ya hay materias registradas:**
```
* Elige la operación que deseas realizar:

1. Agregar presentaciones a módulos existentes
2. Agregar módulos a materias existentes
3. Agregar materias
```

**Si NO hay materias (primera vez):**
```
* Elige la operación que deseas realizar:

3. Agregar materias
```

---

## 🎯 Flujos de Trabajo

### Opción 1: Agregar Presentaciones a Módulos Existentes

**Pasos:**

1. Selecciona la opción `1`
2. Elige la materia (se mostrará un listado numerado)
3. Elige el módulo (se mostrará un listado numerado)
4. Ingresa los datos de la presentación:
   - **Nombre**: Título de la presentación
   - **Descripción**: Descripción breve
   - **Tipo**: `Quarto`, `PDF`, `PowerPoint`, etc.
   - **Link a Colab**: URL o déjalo vacío
   - **Nombre del archivo**: Ejemplo: `limites.qmd`
5. El script automáticamente:
   - Renderiza el `.qmd` a HTML usando Quarto
   - Genera un hash único
   - Renombra el HTML con el hash
   - Actualiza el JSON

---

### Opción 2: Agregar Módulos a Materias Existentes

**Pasos:**

1. Selecciona la opción `2`
2. Elige la materia
3. Ingresa los datos del módulo:
   - **Nombre**: Título del módulo
   - **Descripción**: Descripción breve
4. Agrega presentaciones al módulo (sigue el proceso de la Opción 1)

---

### Opción 3: Agregar Nuevas Materias

**Pasos:**

1. Selecciona la opción `3`
2. Ingresa los datos de la materia:
   - **Nombre**: Título de la materia
   - **Código**: Código de la materia (ej: `ITC-204`)
   - **Descripción**: Descripción breve
3. Agrega módulos a la materia (sigue el proceso de la Opción 2)

---

## 📂 Ubicación del Archivo `.qmd`

**Importante**: El archivo `.qmd` debe estar dentro de la carpeta `documents/`, puede estar en cualquier nivel de la jerarquía:

```
frontend/
└── public/
    └── documents/
        └── [materia]/
            └── [modulo]/
                └── [presentacion]/
                    └── tu-archivo.qmd  ← Puede estar aquí
```

O en cualquier subcarpeta dentro de `documents/`.

---

## ✅ Resultado del Script

El script genera automáticamente:

1. **Archivo HTML con hash**: `[hash].html`
2. **Carpeta de recursos**: `[nombre]_files/`
3. **Actualiza `subjects-modules.json`**: Con los datos de la nueva presentación
4. **Actualiza `predefined-routes.json`**: Con el nuevo hash

---

## 📌 Ejemplo Práctico

### Entrada:

```
- Nombre de la presentación: Límites y Continuidad
- Descripción: Introducción a límites y continuidad
- Tipo: Quarto
- Link a Colab: 
- Nombre del archivo: limites.qmd
```

### Salida:

```
public/documents/matematicas-avanzadas/calculo-diferencial/limites-continuidad/
├── 29c5c10c682.html     ← HTML renombrado con hash
├── limites.qmd           ← Tu archivo original
└── limites_files/        ← Recursos generados por Quarto
```

**JSON actualizado:**

```json
{
    "id": 1,
    "nombre": "Límites y Continuidad",
    "descripcion": "Introducción a límites y continuidad",
    "tipo": "Quarto",
    "link_to_colab": "",
    "hash": "29c5c10c682"
}
```

---

## ⚠️ Notas Importantes

1. **No se genera `styles.css`**: Debes crearlo manualmente si necesitas estilos personalizados
2. **Guardar cambios**: Al final, el script pregunta si quieres guardar los cambios en el JSON
3. **Errores de renderizado**: Si Quarto falla, el script termina automáticamente
4. **Nombres de archivos**: Asegúrate de que el archivo `.qmd` exista en la carpeta `Script/`

---

## 🔄 Flujo Completo Visual

```
1. Ejecutar script
   ↓
2. Elegir opción
   ↓
3. Ingresar datos
   ↓
4. Script ejecuta Quarto → Genera HTML
   ↓
5. Script genera hash → Renombra HTML
   ↓
6. Script actualiza JSON
   ↓
7. ¿Guardar cambios? (s/n)
   ↓
8. ✅ Cambios guardados
```

---

## 🛠️ Solución de Problemas

### Error: "No se encuentra el archivo .qmd"

**Solución**: Asegúrate de que el archivo `.qmd` esté en `frontend/Script/`

### Error: "Quarto no está instalado"

**Solución**: Instala Quarto desde [quarto.org](https://quarto.org)

### Error: "Fallo al renderizar"

**Solución**: Verifica que tu archivo `.qmd` no tenga errores de sintaxis

---

Con este script, puedes agregar presentaciones de forma rápida y automatizada sin editar manualmente los archivos JSON.