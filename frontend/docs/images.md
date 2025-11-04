# Estructura de Imágenes

Este documento explica la estructura de carpetas recomendada para organizar las imágenes de las presentaciones Quarto y cómo referenciarlas correctamente en los archivos CSS.

---

## 📁 Estructura de Carpetas para Imágenes

La estructura de carpetas para las imágenes sigue un patrón simple y organizado:

```
frontend/
└── public/
    └── images/
        └── [nombre-presentacion]/
            ├── Diapositiva1.PNG
            ├── Diapositiva2.PNG
            ├── Diapositiva3.PNG
            └── ...
```

### Ejemplo Real:

```
frontend/
└── public/
    └── images/
        └── limites-continuidad/
            ├── Diapositiva1.PNG
            ├── Diapositiva4.PNG
            ├── Diapositiva5.PNG
            ├── Diapositiva7.PNG
            ├── Diapositiva9.PNG
            ├── Diapositiva10.PNG
            ├── Diapositiva11.PNG
            ├── Diapositiva12.PNG
            ├── Diapositiva13.PNG
            ├── Diapositiva14.PNG
            └── Diapositiva15.PNG
```

---

## 📐 Convención de Nombres

### Para Carpetas de Imágenes:
- Usar **kebab-case** (palabras separadas por guiones)
- Nombres descriptivos que coincidan con el tema de la presentación
- Ejemplos:
  - `limites-continuidad`
  - `calculo-diferencial`
  - `algebra-lineal`
  - `estructuras-datos`

### Para Archivos de Imágenes:
- Usar nombres secuenciales: `Diapositiva1.PNG`, `Diapositiva2.PNG`, etc.
- O nombres descriptivos: `concepto-limite.PNG`, `grafica-derivada.PNG`
- Mantener consistencia en la extensión (`.PNG`, `.jpg`, etc.)

---

## 🔗 Implementación en CSS de Quarto

Las presentaciones de Quarto utilizan archivos CSS para referenciar imágenes de fondo. Esta es una forma más fácil y visual de trabajar con las rutas adecuadas.

### Ubicación del Archivo CSS:

```
frontend/
└── public/
    └── documents/
        └── [nombre-materia]/
            └── [nombre-modulo]/
                └── [nombre-presentacion]/
                    ├── index.html
                    └── styles.css
```

### Ejemplo de Ruta CSS:

```
frontend/public/documents/matematicas-avanzadas/calculo-diferencial/limites-continuidad/styles.css
```

---

## 💻 Ejemplo de Implementación en CSS

Dentro del archivo `styles.css` de la presentación, se definen clases CSS que referencian las imágenes usando rutas relativas:

```css
/* Definición de estilos y rutas de las presentaciones */
.bg-slide-1 {
  background-image: url("../../../../images/limites-continuidad/Diapositiva1.PNG");
  background-size: 80%;
  background-position: center center;
  background-repeat: no-repeat;
}

.bg-slide-4 {
  background-image: url("../../../../images/limites-continuidad/Diapositiva4.PNG");
  background-size: 80%;
  background-position: center center;
  background-repeat: no-repeat;
}

.bg-slide-5 {
  background-image: url("../../../../images/limites-continuidad/Diapositiva5.PNG");
  background-size: 80%;
  background-position: center center;
  background-repeat: no-repeat;
}

.bg-slide-7 {
  background-image: url("../../../../images/limites-continuidad/Diapositiva7.PNG");
  background-size: 80%;
  background-position: center center;
  background-repeat: no-repeat;
}
```

---

## 🛣️ Entendiendo las Rutas Relativas

Desde la ubicación del CSS hasta las imágenes, necesitas "subir" 4 niveles:

```
styles.css ubicado en:
frontend/public/documents/matematicas-avanzadas/calculo-diferencial/limites-continuidad/styles.css
                ↑               ↑                      ↑                  ↑              ↑
              public      documents          matematicas-avanzadas  calculo-diferencial  limites-continuidad

Para llegar a:
frontend/public/images/limites-continuidad/Diapositiva1.PNG
```

Por eso usamos: `../../../../images/limites-continuidad/Diapositiva1.PNG`

### Desglose de la Ruta:

| Parte | Significado |
|-------|-------------|
| `../` | Sube al nivel `calculo-diferencial` |
| `../../` | Sube al nivel `matematicas-avanzadas` |
| `../../../` | Sube al nivel `documents` |
| `../../../../` | Sube al nivel `public` |
| `images/` | Entra a la carpeta `images` |
| `limites-continuidad/` | Entra a la carpeta de la presentación |
| `Diapositiva1.PNG` | Nombre del archivo |

---

## ✨ Ventajas de Usar CSS para Imágenes de Fondo

### 1. **Separación de Responsabilidades**
- El HTML se mantiene limpio y enfocado en la estructura
- Los estilos y recursos visuales están en CSS
- Fácil de mantener y actualizar

### 2. **Flexibilidad Visual**
```css
.bg-slide-1 {
  background-image: url("ruta/imagen.PNG");
  background-size: 80%;           /* Control del tamaño */
  background-position: center;     /* Posicionamiento */
  background-repeat: no-repeat;    /* Sin repetición */
}
```

### 3. **Reutilización**
- Una clase CSS puede usarse en múltiples elementos
- Fácil cambiar una imagen editando solo el CSS

### 4. **Trabajo Gráfico Más Intuitivo**
- Los diseñadores pueden trabajar directamente en el CSS
- No necesitan modificar el HTML generado por Quarto
- Cambios visuales sin tocar la estructura del contenido

---

## 📝 Pasos para Agregar Nuevas Imágenes

### 1. Crear la Carpeta de Imágenes

```bash
# En PowerShell
mkdir frontend\public\images\nueva-presentacion
```

### 2. Agregar las Imágenes

Copia tus imágenes a la nueva carpeta:
```
frontend/public/images/nueva-presentacion/
├── Diapositiva1.PNG
├── Diapositiva2.PNG
└── Diapositiva3.PNG
```

### 3. Crear/Editar el Archivo CSS

Crea o edita el archivo `styles.css` de tu presentación:

```
frontend/public/documents/[materia]/[modulo]/[presentacion]/styles.css
```

### 4. Agregar las Clases CSS

```css
.bg-slide-1 {
  background-image: url("../../../../images/nueva-presentacion/Diapositiva1.PNG");
  background-size: 80%;
  background-position: center center;
  background-repeat: no-repeat;
}

.bg-slide-2 {
  background-image: url("../../../../images/nueva-presentacion/Diapositiva2.PNG");
  background-size: 80%;
  background-position: center center;
  background-repeat: no-repeat;
}
```

### 5. Usar las Clases en tu Archivo Quarto

En tu archivo `.qmd`, inserta la clase CSS de esta forma para que la imagen se muestre como fondo:

```markdown
## {.bg-slide-1}

---
```

Esto aplicará la clase CSS y mostrará la imagen como fondo de la diapositiva.

---

## 🔍 Verificación de Rutas

Si tus imágenes no se cargan, verifica:

1. **Rutas correctas**: Cuenta bien los `../` según la profundidad de tu CSS
2. **Nombres exactos**: CSS es case-sensitive (`Diapositiva1.PNG` ≠ `diapositiva1.png`)
3. **Extensiones correctas**: Verifica `.PNG` vs `.png` vs `.jpg`
4. **Archivos existentes**: Confirma que las imágenes están en la carpeta correcta

---

## 🚀 Mejores Prácticas

1. **Optimiza las imágenes**: Usa herramientas para reducir el tamaño sin perder calidad
2. **Usa nombres descriptivos**: Facilita identificar el contenido sin abrir la imagen
3. **Mantén la consistencia**: Usa siempre el mismo patrón de nombres
4. **Documenta cambios**: Si actualizas imágenes, documenta los cambios
5. **Verifica en local**: Prueba que las rutas funcionen antes de hacer commit

---

Esta estructura proporciona una forma organizada, escalable y visualmente intuitiva de gestionar las imágenes de tus presentaciones Quarto.