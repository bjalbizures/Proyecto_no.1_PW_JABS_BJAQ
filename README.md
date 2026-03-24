# Proyecto_no.1_PW_JABS_BJAQ
# AeroPaq Web

AeroPaq Web es una aplicación web desarrollada para una empresa de paquetería. El sistema combina una parte informativa y una parte funcional. La parte informativa presenta los servicios, la cobertura, el proceso de envío, las preguntas frecuentes y la información institucional de la empresa. La parte funcional incluye un formulario de contacto conectado a Google Sheets y un cotizador dinámico de envíos.

## Tecnologías y versiones

Este proyecto fue desarrollado con las siguientes tecnologías:

* React
* React Router DOM
* Vite
* JavaScript ES6
* CSS
* Google Apps Script
* Google Sheets

Nota: las versiones exactas pueden consultarse en el archivo `package.json`.

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar las variables de entorno en un archivo `.env` en la raíz del proyecto:

```env
VITE_GOOGLE_SCRIPT_URL=...
VITE_FACTOR_VOLUMETRICO=5000
```

4. Ejecutar el proyecto en entorno local:

```bash
npm run dev
```

## Decisiones técnicas relevantes

### Estructura modular del proyecto

El proyecto fue organizado de forma modular para mantener una estructura clara, reutilizar código y facilitar la mantenibilidad. La estructura principal se divide en tres carpetas:

* `Components`: contiene los componentes reutilizables del sistema, como `Navbar`, `Footer`, `Hero`, secciones expandibles y otros bloques de interfaz.
* `Pages`: contiene las vistas principales de la aplicación, como `Home`, `Contacto`, `Cotizador`, `FAQ` y `About`.
* `Styles`: contiene los archivos CSS organizados por página o componente.

Esta organización permite separar responsabilidades y hace que cada archivo cumpla una función específica dentro de la aplicación.

### Uso de componentes reutilizables

Una de las decisiones más importantes fue la creación de componentes reutilizables para evitar duplicación de código y mantener coherencia visual. Entre los más relevantes se encuentran:

* `ExpandableInfoSection`
* `ExpandableDetailsSection`
* `BenefitItem`
* `Navbar`
* `Footer`
* `Hero`

Esto permitió construir una interfaz más ordenada, consistente y fácil de mantener.

### Organización de la página principal

La página principal (`Home`) fue diseñada para delegar sus secciones a componentes específicos en lugar de concentrar toda la lógica en un solo archivo. De esta forma, la vista principal renderiza componentes como:

* `Hero`
* `ServicesSection`
* `CoverageSection`
* `ProcessSection`

Esta decisión mejora la legibilidad del código y favorece la reutilización de componentes.

### Rutas centralizadas

Para la navegación se utilizaron constantes de rutas (`APP_ROUTES`) en componentes como `Navbar` y `Footer`, en lugar de escribir las rutas manualmente. Esto reduce errores y mejora la mantenibilidad del proyecto.

### Navegación con React Router DOM

La navegación entre páginas se implementó con `react-router-dom`, permitiendo una experiencia fluida sin recargar toda la aplicación. Las vistas principales incluyen:

* Home
* Contacto
* Cotizador
* FAQ
* About

### Integración del formulario con Google Sheets

En lugar de construir un backend tradicional dentro del proyecto, se optó por integrar el formulario de contacto con Google Apps Script y Google Sheets. El flujo funciona así:

1. El usuario completa el formulario en el frontend.
2. Se validan los datos ingresados.
3. Se envía una petición `POST` a una Web App de Google Apps Script.
4. El script procesa la información y la registra en Google Sheets.
5. El sistema devuelve una respuesta al frontend para mostrar si el envío fue exitoso o no.

Esta decisión permitió resolver el almacenamiento de datos de forma sencilla, funcional y adecuada para el alcance del proyecto.

### Uso de variables de entorno

El proyecto utiliza variables de entorno para valores configurables, como la URL del script de Google y el factor volumétrico del cotizador. Esto evita dejar valores fijos dentro del código y facilita cambios futuros sin modificar la lógica principal.

### Cotizador dinámico

El cotizador fue una de las funcionalidades más importantes del sistema. Permite:

* agregar paquetes
* eliminar paquetes
* seleccionar tamaño de caja
* ingresar peso
* agregar dimensiones
* calcular total
* mostrar desglose

Esta funcionalidad requirió manejo de estado, validaciones y lógica de cálculo para ofrecer una experiencia útil al usuario.

### Archivo global de estilos

Se utilizó un archivo global de estilos como punto central para definir estilos base, colores, espaciados y variables visuales. Esto permitió mantener una identidad visual consistente en toda la aplicación.

## Despliegue

El proyecto fue desplegado en Vercel. Esta plataforma permitió publicar la aplicación de forma rápida, automatizar despliegues desde el repositorio y contar con una versión accesible en línea para pruebas y presentación.
