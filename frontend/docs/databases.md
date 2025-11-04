# Estructura de Datos - Base de Datos JSON

Este documento explica la estructura del archivo `subjects-modules.json`, que contiene toda la información sobre las materias, módulos y presentaciones del sistema.

---

## 📊 Estructura General

El archivo JSON contiene un objeto raíz con una propiedad `materias`, que es un array de objetos de tipo **Materia**.

```json
{
    "materias": [...]
}
```

---

## 🎓 Nivel 1: Materias (Subjects)

Cada materia representa un curso o asignatura completa.

### Propiedades de una Materia:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `id` | `number` | Identificador único de la materia |
| `nombre` | `string` | Nombre completo de la materia |
| `codigo` | `string` | Código de la materia (ej: "ITC-204") |
| `descripcion` | `string` | Descripción breve del contenido de la materia |
| `modulos` | `Module[]` | Array de módulos que pertenecen a esta materia |

### Ejemplo:

```json
{
    "id": 1,
    "nombre": "Programacion Avanzada",
    "codigo": "ITC-204",
    "descripcion": "Curso sobre estructuras de datos y algoritmos fundamentales, enfatizando su impacto en la eficiencia del código.",
    "modulos": [...]
}
```

---

## 📚 Nivel 2: Módulos (Modules)

Cada módulo representa una unidad temática dentro de una materia. Una materia puede tener múltiples módulos.

### Propiedades de un Módulo:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `id` | `number` | Identificador único del módulo |
| `nombre` | `string` | Nombre del módulo (ej: "Listas") |
| `descripcion` | `string` | Descripción del contenido del módulo |
| `presentaciones` | `Presentation[]` | Array de presentaciones que pertenecen a este módulo |

### Ejemplo:

```json
{
    "id": 1,
    "nombre": "Listas",
    "descripcion": "Estudio de listas como estructura de datos y sus ventajas frente a otros tipos.",
    "presentaciones": [...]
}
```

---

## 📽️ Nivel 3: Presentaciones (Presentations)

Cada presentación es una unidad de contenido específica dentro de un módulo. Puede ser una clase, tutorial, o material educativo.

### Propiedades de una Presentación:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `id` | `number` | Identificador único de la presentación |
| `nombre` | `string` | Título de la presentación |
| `descripcion` | `string` | Descripción breve del contenido |
| `tipo` | `string` | Tipo de presentación (ej: "Quarto", "Jupyter", etc.) |
| `link_to_colab` | `string` | Enlace a Google Colab u otro recurso externo |
| `hash` | `string` | Hash único para identificar la versión del archivo |

### Ejemplo:

```json
{
    "id": 1,
    "nombre": "Uso y Conceptos de Listas",
    "descripcion": "Introducción al concepto de listas, sus operaciones básicas y consideraciones de eficiencia.",
    "tipo": "Quarto",
    "link_to_colab": "link a colab",
    "hash": "29c5c10c682"
}
```

---

## 🔗 Relaciones entre Entidades

La estructura sigue un modelo jerárquico de **uno a muchos**:

```
Materia (1)
    └── Módulo (N)
            └── Presentación (N)
```

### Explicación:

1. **Una Materia** puede tener **muchos Módulos**
2. **Un Módulo** puede tener **muchas Presentaciones**
3. **Una Presentación** pertenece a **un solo Módulo**
4. **Un Módulo** pertenece a **una sola Materia**

---

## 📐 Diagrama de la Estructura

```
subjects-modules.json
│
└── materias: []
    │
    └── Materia
        ├── id: number
        ├── nombre: string
        ├── codigo: string
        ├── descripcion: string
        │
        └── modulos: []
            │
            └── Módulo
                ├── id: number
                ├── nombre: string
                ├── descripcion: string
                │
                └── presentaciones: []
                    │
                    └── Presentación
                        ├── id: number
                        ├── nombre: string
                        ├── descripcion: string
                        ├── tipo: string
                        ├── link_to_colab: string
                        └── hash: string
```

---

## 💡 Ejemplo Completo

```json
{
    "materias": [
        {
            "id": 1,
            "nombre": "Programacion Avanzada",
            "codigo": "ITC-204",
            "descripcion": "Curso sobre estructuras de datos y algoritmos fundamentales.",
            "modulos": [
                {
                    "id": 1,
                    "nombre": "Listas",
                    "descripcion": "Estudio de listas como estructura de datos.",
                    "presentaciones": [
                        {
                            "id": 1,
                            "nombre": "Uso y Conceptos de Listas",
                            "descripcion": "Introducción al concepto de listas.",
                            "tipo": "Quarto",
                            "link_to_colab": "link a colab",
                            "hash": "29c5c10c682"
                        },
                        {
                            "id": 2,
                            "nombre": "Listas Enlazadas",
                            "descripcion": "Implementación de listas enlazadas.",
                            "tipo": "Quarto",
                            "link_to_colab": "link a colab",
                            "hash": "65ac2c0be66"
                        }
                    ]
                },
                {
                    "id": 2,
                    "nombre": "Árboles",
                    "descripcion": "Estructuras de datos jerárquicas.",
                    "presentaciones": [...]
                }
            ]
        },
        {
            "id": 2,
            "nombre": "Bases de Datos",
            "codigo": "ITC-305",
            "descripcion": "Fundamentos de bases de datos relacionales.",
            "modulos": [...]
        }
    ]
}
```

---

## 🔧 Consideraciones de Implementación

### IDs Únicos
- Cada entidad (materia, módulo, presentación) debe tener un `id` único **dentro de su nivel**
- No es necesario que los IDs sean únicos globalmente, solo dentro de su contexto

### Hash de Presentaciones
- El `hash` identifica una versión específica del contenido
- Útil para cacheo y detección de cambios
- Debe ser único para cada presentación (se genera automáticamente con el uso del Script de Python)

### Extensibilidad
La estructura permite agregar fácilmente:
- Nuevas propiedades a cualquier nivel
- Metadatos adicionales (fecha de creación, autor, etiquetas, etc.)
- Relaciones adicionales (prerequisitos, temas relacionados, etc.)

---

## ⚠️ Buenas Prácticas

1. **Mantén los IDs únicos** dentro de cada nivel
2. **Usa descripciones claras** para facilitar la búsqueda
4. **Valida el JSON** antes de hacer commit (usa un linter o validador)
5. **Documenta los tipos** de presentación que usas (Quarto, Jupyter, PDF, etc.)

---

Esta estructura proporciona una base sólida para gestionar contenido educativo de forma organizada y escalable.