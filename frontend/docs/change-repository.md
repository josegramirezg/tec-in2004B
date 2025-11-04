# Guía para Cambiar el Repositorio del Proyecto

Esta guía te ayudará a migrar tu proyecto Next.js a un nuevo repositorio de GitHub y configurar correctamente todas las variables de entorno y archivos necesarios para el despliegue en GitHub Pages.

## 📋 Requisitos Previos

- Git instalado en tu sistema Windows
- Una cuenta de GitHub
- Acceso al proyecto actual (tec-in2004B)
- PowerShell o Git Bash

---

## 🎯 Paso 1: Crear el Nuevo Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Completa la información:
   - **Repository name**: Por ejemplo, `tec-in2003B` (o el nombre que prefieras)
   - **Description**: (Opcional) Descripción del proyecto
   - **Visibility**: Public (para GitHub Pages gratis)
   - ⚠️ **NO marques**: "Add a README file", "Add .gitignore", o "Choose a license"
5. Haz clic en **"Create repository"**
6. **Guarda la URL del repositorio**, será algo como:
   ```
   https://github.com/tu-usuario/tec-in2003B.git
   ```

---

## 🔧 Paso 2: Actualizar las Variables de Entorno

El nombre del repositorio afecta la ruta base de tu aplicación en GitHub Pages. Necesitas actualizar esto en el archivo de workflow.

### 2.1 Editar el archivo de GitHub Actions

Abre el archivo `.github\workflows\deploy.yml` y actualiza las siguientes líneas:

**Antes:**
```yaml
      - name: Instalar y Construir
        env:
          NEXT_PUBLIC_BASE_PATH: /tec-in2004B
          NEXT_PUBLIC_WEBSITE_NAME: tec-in2004B
        run: npm ci && npm run build
        working-directory: ./frontend
```

**Después** (reemplaza `tec-in2004B` con tu nuevo nombre de repositorio):
```yaml
      - name: Instalar y Construir
        env:
          NEXT_PUBLIC_BASE_PATH: /tec-in2003B
          NEXT_PUBLIC_WEBSITE_NAME: tec-in2003B
        run: npm ci && npm run build
        working-directory: ./frontend
```

### 2.2 Archivo `.env.local` (Opcional para desarrollo local)

Si quieres probar tu aplicación localmente con la misma configuración, crea un archivo `.env.local` en la carpeta `frontend/`:

```env
NEXT_PUBLIC_BASE_PATH=/tec-in2003B
NEXT_PUBLIC_WEBSITE_NAME=tec-in2003B
```

---

## 🔄 Paso 3: Cambiar el Repositorio Remoto

Abre PowerShell en la carpeta raíz de tu proyecto (`C:\Users\Rusbe\Desktop\tec-in2004B`) y ejecuta los siguientes comandos:

### 3.1 Ver el repositorio remoto actual

```powershell
git remote -v
```

Deberías ver algo como:
```
origin  https://github.com/josegramirezg/tec-in2004B.git (fetch)
origin  https://github.com/josegramirezg/tec-in2004B.git (push)
```

### 3.2 Eliminar el repositorio remoto actual

```powershell
git remote remove origin
```

### 3.3 Agregar el nuevo repositorio remoto

Reemplaza `tu-usuario` y `tec-in2003B` con tus datos:

```powershell
git remote add origin https://github.com/tu-usuario/tec-in2003B.git
```

> **💡 Tip**: Puedes encontrar esta URL en tu repositorio de GitHub:
> 1. Ve a tu repositorio en GitHub
> 2. Haz clic en el botón verde **"Code"**
> 3. Copia la URL HTTPS que aparece

### 3.4 Verificar el cambio

```powershell
git remote -v
```

Ahora deberías ver tu nuevo repositorio:
```
origin  https://github.com/tu-usuario/tec-in2003B.git (fetch)
origin  https://github.com/tu-usuario/tec-in2003B.git (push)
```

---

## 📤 Paso 4: Subir el Código al Nuevo Repositorio

### 4.1 Verificar el estado de Git

```powershell
git status
```

### 4.2 Si hay cambios sin commit, añádelos

```powershell
git add .
git commit -m "Actualizar configuración para nuevo repositorio"
```

### 4.3 Subir el código al nuevo repositorio

```powershell
git push -u origin main
```

Si te pide autenticación:
- **Usuario**: Tu nombre de usuario de GitHub
- **Contraseña**: Un [Personal Access Token](https://github.com/settings/tokens) (NO tu contraseña de GitHub)

---

## ⚙️ Paso 5: Configurar GitHub Pages

1. Ve a tu nuevo repositorio en GitHub
2. Haz clic en **"Settings"** (Configuración)
3. En el menú lateral, busca **"Pages"**
4. En la sección **"Build and deployment"**:
   - **Source**: Selecciona "GitHub Actions"
5. Guarda los cambios

---

## 🚀 Paso 6: Verificar el Despliegue

### 6.1 Monitorear el workflow

1. Ve a la pestaña **"Actions"** en tu repositorio
2. Deberías ver un workflow ejecutándose llamado "Deploy Next.js a GitHub Pages (Oficial)"
3. Espera a que termine (tiene una marca verde ✅ cuando está listo)

### 6.2 Acceder a tu sitio

Tu sitio estará disponible en:
```
https://tu-usuario.github.io/tec-in2003B/
```

Reemplaza `tu-usuario` y `tec-in2003B` con tus datos reales.

---

## 🔍 Verificación Completa

Usa este checklist para asegurarte de que todo está configurado correctamente:

- [ ] El nuevo repositorio está creado en GitHub
- [ ] Las variables de entorno en `.github/workflows/deploy.yml` están actualizadas
- [ ] El repositorio remoto local apunta al nuevo repositorio (`git remote -v`)
- [ ] El código se ha subido exitosamente (`git push`)
- [ ] GitHub Pages está configurado con "GitHub Actions" como fuente
- [ ] El workflow de GitHub Actions se ejecutó correctamente (sin errores)
- [ ] El sitio es accesible en `https://tu-usuario.github.io/nuevo-repo-nombre/`

---

## ❌ Solución de Problemas Comunes

### Error: "fatal: refusing to merge unrelated histories"

Si el nuevo repositorio ya tenía contenido, usa:
```powershell
git pull origin main --allow-unrelated-histories
```
Luego:
```powershell
git push -u origin main
```

### Error: "Permission denied"

Asegúrate de usar un Personal Access Token en lugar de tu contraseña de GitHub:
1. Ve a [GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)](https://github.com/settings/tokens)
2. Genera un nuevo token con permisos de `repo`
3. Usa ese token como contraseña cuando Git te lo solicite

### El sitio muestra error 404

Verifica que:
1. Las variables `NEXT_PUBLIC_BASE_PATH` coincidan con el nombre del repositorio
2. GitHub Pages esté habilitado en la configuración del repositorio
3. El workflow se haya ejecutado completamente sin errores

### Los assets no se cargan (imágenes, CSS, etc.)

Revisa que el `basePath` en `frontend/next.config.ts` esté correctamente configurado y coincida con el nombre del repositorio:
```typescript
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
```

---

## 📝 Resumen de Archivos a Modificar

Cuando cambies el nombre del repositorio, asegúrate de actualizar:

1. **`.github/workflows/deploy.yml`**:
   - `NEXT_PUBLIC_BASE_PATH: /nuevo-nombre-repo`
   - `NEXT_PUBLIC_WEBSITE_NAME: nuevo-nombre-repo`

2. **`frontend/.env.local`** (opcional, para desarrollo local):
   - `NEXT_PUBLIC_BASE_PATH=/nuevo-nombre-repo`
   - `NEXT_PUBLIC_WEBSITE_NAME=nuevo-nombre-repo`

**¡Listo!** Tu proyecto ahora está migrado a un nuevo repositorio y desplegado en GitHub Pages. 🎉