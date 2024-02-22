---
layout: ~/layouts/MainLayout.astro
title: Instalación
---

Hay diferentes formas de instalar Astro en un nuevo proyecto.

## Pre-requisitos

- **Node.js** - `v14.15.0`, `v16.0.0`, o mayor.
- **Editor de texto** - Te recomendamos [VS Code](https://code.visualstudio.com/) con nuestra [extensión oficial de Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode).
- **Terminal** - Principalmente, puedes ingresar a Astro por medio de línea de comando del terminal.

Con el propósito de realizar una demostración, usaremos [`npm`](https://www.npmjs.com/) en los siguientes ejemplos, pero también puedes usar [`yarn`](https://yarnpkg.com/) o [`pnpm`](https://pnpm.io/), si prefieres un empaquetador alternativo.

## Crear un Proyecto en Astro

`npm create astro@latest` es la forma más fácil de instalar Astro en un proyecto nuevo. Ejecuta este comando en tu terminal para iniciar nuestro asistente de instalación `create-astro` para ayudarte a configurar un nuevo proyecto.

```shell
# With npm
npm create astro@latest

# yarn
yarn create astro

# pnpm
pnpm create astro@latest
```

El asistente de instalación [`create-astro`](https://github.com/withastro/astro/tree/main/packages/create-astro), te permite escoger de una lista de plantillas de inicio; por otro lado, puedes importar tus propios proyectos de Astro directamente desde GitHub.

```bash
# Nota: Reemplaza "my-astro-project" con el nombre de tu proyecto.

# npm 6.x
npm create astro@latest my-astro-project --template starter
# npm 7+ (el doble guión extra es necesario)
npm create astro@latest my-astro-project -- --template starter
# yarn
yarn create astro my-astro-project --template starter
# pnpm
pnpm create astro my-astro-project -- --template starter
# Usando una plantilla de un tercero
npm create astro@latest my-astro-project -- --template [GITHUB_USER]/[REPO_NAME]
# Usando una plantilla de un tercero, dentro de un repositorio
npm create astro@latest my-astro-project -- --template [GITHUB_USER]/[REPO_NAME]/path/to/template
```

Después de que `create-astro` cree la estructura básica de tu proyecto, recuerda instalar las dependencias del proyecto usando npm o el manejador de paquetes que prefieras. En este ejemplo, usaremos npm:

```bash
npm install
```

Ahora puedes [Iniciar](#start-astro) tu proyecto de Astro. Una vez, que hayas completado tu proyecto, puedes [Compilar](#build-astro) tu proyecto. Astro va a empaquetar tu aplicación y después generará los archivos estáticos, que estarán listos para ser [Desplegados](/es/guides/deploy) en tu proveedor de hosting favorito.

## Manual de Instalación

También puedes configurar Astro sin ayuda del asistente `create-astro`, a continuación, hay algunos pasos adicionales que son necesarios para que Astro funcione.

### Crear un proyecto

```bash
# Crea un nuevo directorio y navega a el
mkdir my-astro-project
cd my-astro-project
```

Crea un directorio vacío con el nombre de tu proyecto, y entonces navega a él:

### Crear `package.json`

```bash
# Este comando creará un simple package.json en el directorio actual
npm init --yes
```

Astro está diseñado para trabajar con todo el ecosistema de paquetes npm. Este es gestionado por un manifiesto del proyecto en la raíz de tu proyecto llamado `package.json`. Si no estás familiarizado con el archivo `package.json`, te recomendamos que leas un poco sobre él en la [documentación de npm](https://docs.npmjs.com/creating-a-package-json-file).

### Instalar Astro

Siguiendo las instrucciones anteriores, deberías tener un directorio con un único archivo `package.json`. Ahora puedes configurar Astro dentro de tu proyecto.

```bash
npm install astro
```

Ahora, puedes reemplazar la sección de "scripts" del archivo `package.json` que `npm init` creó, por lo siguiente:

```diff
  "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1"
+    "dev": "astro dev",
+    "build": "astro build",
+    "preview": "astro preview"
  },
}
```

El comando [`dev`](#start-astro) inicia el servidor de desarrollo de Astro en `http://localhost:4321`. Una vez que tu proyecto esté listo, el comando [`build`](#build-astro) genera tu proyecto en el directorio `dist/`. [Lee más sobre cómo desplegar Astro en la guía de despliegue](/es/guides/deploy).

### Crear tu primera página

Abre astro en tu editor de texto favorito, y crea un nuevo archivo en tu proyecto:

1. Crea un archivo nuevo en `src/pages/index.astro`
2. Copia-y-pega el siguiente código (incluyendo `---` )

```astro
---
// El bloque de código escrito entre (---) de JS/TS
// Funcionará sólo en el lado del servidor!
console.log('Mírame en la Terminal')
---

<html>
  <body>
    <h1>¡Hola Mundo!</h1>
  </body>
</html>

<style lang='css||scss'>
  body{
    h1{
      color:orange;
    }
  }
</style>

<script>
 // El código escrito en JS se ejecuta sólo en el navegador
 console.log('Mírame en las Herramientas de Desarrollo')
</script>
```

Arriba hay un ejemplo de la sintaxis del componente de Astro, que comprende HTML y JSX.

Puedes crear más páginas en el directorio `src/pages` y Astro utilizará los archivos creados para generar nuevas páginas de tu sitio web. Por ejemplo, al crear el archivo `about.astro` en `src/pages/about.astro` (reusando el fragmento de código anterior), Astro generará una página HTML en la dirección URL: `http://localhost/about`.

## [Iniciar Astro](#start-astro)

```bash
npm run dev
```

Ahora Astro estará corriendo tu aplicación en `http://localhost:4321`. Al abrir esta URL en tu navegador, deberías ver el “¡Hola, Mundo!” de Astro.

Si necesitas compartir tu progreso de desarrollo en la red local o revisar la aplicación desde un teléfono, sólo agrega la siguiente opción en `astro.config.mjs`:

```js
devOptions: {
  hostname: '0.0.0.0';
}
```

## [Compilar Astro](#build-astro)

```bash
npm run build
```

Con este comando Astro generará tu sitio web y lo guardará directamente en el directorio `dist/`. Tu aplicación está ahora lista en el directorio `dist/`.

## Próximos pasos

¡Felicitaciones! ¡Ahora estás listo para comenzar a desarrollar!

Te recomendamos que te familiarices con la forma en que Astro funciona. Lo puedes hacer explorando nuestra documentación, te sugerimos que consideres las siguientes guías:

📚 Aprende más sobre la estructura de proyectos de Astro, en nuestra [guía de estructura de proyecto](/es/core-concepts/project-structure).

📚 Aprende más sobre la sintaxis de los componentes de Astro, en nuestra [guía de componentes de Astro](/es/core-concepts/astro-components).

📚 Aprende más sobre la rutas basada en archivos de Astro, en nuestra [guía de rutas](/es/core-concepts/astro-pages).
