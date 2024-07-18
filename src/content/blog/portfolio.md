---
title: 'Portfolio'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 13 2024'
heroImage: '/portfolio.png'
---

Hola, soy un joven desarrollador de 18 años de Argentina. Empecé a estudiar programación de software oficialmente el 01/05/2024 con la ambición de convertirme en un profesional competente en el campo de la tecnología. Como muchos desarrolladores juniors, me enfrento al desafío de cómo presentar de manera efectiva mis proyectos y destacar en el mercado laboral. En este blog, quiero compartir mi experiencia y aprendizajes al crear mi portfolio, una herramienta crucial para cualquier aspirante a programador.

Antes que nada, quiero decir que a principios de este año estuve investigando varias cosas antes de sumergirme en el mundo del software. Siempre me llamó la atención, pero no disponía de una computadora para escribir código, así que no me hacía ilusiones en aprender lenguajes o herramientas. De hecho, ni siquiera sabía dónde empezar a escribir un código.

Sin embargo, el año pasado entregaron unas computadoras del gobierno que me abrieron las puertas de una oportunidad en este mundo, y pienso aprovecharlas para meterme de lleno en algo que me encantó desde el principio. Con el poco tiempo y todas las posibilidades que ofrece, veo la programación como algo realmente hermoso.

Decidí crear un portfolio porque me encontraba con dos grandes desafíos: no sabía cómo exponer mis proyectos de manera efectiva y tampoco tenía claro cómo "venderme" a posibles empleadores. En varios videos de la comunidad de programación en YouTube, escuché repetidamente que para alguien con mis características, la mejor opción era crear un portfolio para llamar la atención y destacar. Así que me propuse hacerlo, con la esperanza de mejorar mi presencia online y aumentar mis oportunidades laborales.

Ahora, permítanme contarles cómo creé mi primer portfolio...

## El Inicio de Mi Viaje: Investigación y Aprendizaje

Mi viaje para crear un portfolio comenzó mucho antes de escribir una sola línea de código. Consciente de la importancia de este proyecto, decidí sumergirme en una investigación exhaustiva. Mi primera parada fue YouTube, donde me dediqué a ver una amplia variedad de videos sobre portfolios, incluyendo tutoriales, consejos de diseño, y numerosas críticas de portfolios de diversos creadores de contenido.

Durante esta fase de investigación, los videos de MiduDev se convirtieron en un recurso particularmente valioso. Sus críticas detalladas de portfolios, junto con los consejos de profesionales de diseño que a menudo invitaba, me proporcionaron una perspectiva profunda y práctica. A través de su contenido, no solo pude observar las tendencias actuales en diseño de portfolios, sino también identificar errores comunes a evitar. La contribución de midudev a la comunidad de programación es verdaderamente notable, especialmente para quienes, como yo, estamos dando nuestros primeros pasos en este campo.

### A través de estos videos, fui absorbiendo información crucial:
- Qué elementos están de moda en los portfolios actuales
- Errores frecuentes que cometen los desarrolladores junior
- Consejos de profesionales sobre diseño y estructura
- Elementos que los reclutadores y empleadores buscan en un portfolio

## Del Concepto al Boceto

Una vez que sentí que tenía una comprensión sólida de lo que constituye un buen portfolio, decidí pasar a la fase de diseño. Para esto, recurrí a tldraw, una herramienta de dibujo similar a Paint, pero con características que la hacen ideal para bosquejar ideas de diseño web.

En **tldraw**, creé un boceto inicial de mi portfolio. Este ejercicio fue crucial, ya que me permitió visualizar la estructura y el flujo de mi sitio antes de comenzar a programar. Aquí les muestro el resultado:

![Boceto de portfolio](/portfolio/boceto01.png)
![Boceto de portfolio](/portfolio/boceto02.png)
![Boceto de portfolio](/portfolio/boceto03.png)

Este boceto se convirtió en mi guía, proporcionándome una dirección clara para cuando finalmente me sentara a codificar. Representaba no solo la estructura de mi futuro portfolio, sino también la culminación de toda la investigación y aprendizaje que había realizado hasta ese momento.

Con este plan en mano, me sentía listo para enfrentar el siguiente desafío: transformar este boceto en un portfolio real y funcional.

## Manos a la Obra: Configurando el Proyecto

Con mi plan de diseño listo, era hora de pasar a la acción. Decidí utilizar Vite como mi herramienta de construcción debido a su rapidez y facilidad de uso. Así que abrí mi terminal y comencé con los siguientes pasos:

- Inicié el proyecto con Vite: Opté por una configuración sin frameworks, utilizando JavaScript vanilla para tener control total sobre mi código.
```bash
npm create vite@latest
```
- Luego, cambié a la carpeta del proyecto:
```bash
cd portfolio
```
- Instale las dependencias: Elegí usar pnpm por su eficiencia en el manejo de paquetes.
```bash
pnpm install
```
- Abrí el proyecto en mi editor de código:
```bash
code .
```
- Inicie el proyecto:
```bash
npm run dev
```
Una vez dentro del editor, procedí a limpiar el proyecto de los archivos y código innecesarios que Vite genera por defecto:
- Eliminé archivos como counter.js, javascript.svg, y vite.svg.
- En main.js, conservé solo la importación del archivo de estilos.
- Simplifiqué el archivo de estilos, eliminando la mayoría de las reglas predeterminadas y cambie el color de fondo.
- Ajusté el index.html, cambiando el título, eliminando referencias a archivos que ya no existían y agregando la típica estructura de `header`, `main` y `footer`.
- Coloqué carpetas llamadas `styles` e `imgs` dentro de la carpeta `public`.
Esta limpieza me permitió partir de una base más limpia y personalizada, sin distracciones ni código innecesario.
Este momento marcó el verdadero inicio de la fase de desarrollo. Con mi investigación, mi boceto, y ahora mi proyecto inicializado y limpio, estaba listo para comenzar a dar vida a mi visión, línea de código a línea de código.

## Construyendo la Estructura: La Barra de Navegación

La implementación del portfolio comenzó con la barra de navegación. Inicialmente, se planeó una barra pequeña en la parte superior, pero el concepto evolucionó durante el desarrollo.

Tras varias pruebas, se optó por una barra de navegación más grande. Esta decisión formó parte de un cambio más amplio en el enfoque: el diseño pasó de ser super minimalista a requerir más espacio para mostrar todo el contenido cómodamente.

El proceso comenzó creando el contenedor de la barra de navegación y dandole vida con CSS:

```html
<header class="navbar">
    <nav>
    </nav>
</header>
```
```css
.navbar {
    position: fixed; /* Esto permite que siempre se vea en pantalla */
    top: 0; /* Lo ubico para que esté en la parte superior máxima */
    left: 0; /* Lo ubico para que esté en la parte izquierda máxima */
    width: 100%; /* Le doy un máximo de anchura del viewport para que ocupe toda la pantalla */
    background-color: #1a1a1a; /* Color de fondo para tener un contraste con el contenido main */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Pequeño detalle para más contraste dándole una sombra en la parte inferior */
    z-index: 1000; /* Para que se muestre por encima de todo, ya que el fixed hará que pase por muchas secciones y artículos */
}
```

Agregando los elementos de la barra de navegación:

```html
<header class="navbar">
    <nav>
        <ul class="navbar-menu">
            <li class="navbar-item"><a href="#">Sobre mí</a></li> <!-- Agregamos la clase 'navbar-item' para manipular los elementos -->
            <li class="navbar-item"><a href="#">Blog</a></li>
            <li class="navbar-item"><a href="#contacto">Contacto</a></li>
            <li class="navbar-item"><a href="#">Lenguaje</a></li>
            <li class="navbar-item"><a href="#">M.claro</a></li>
        </ul>
    </nav>
</header>
```
```css
.navbar-menu {
    display: flex; /* Layout unidimensional */
    list-style-type: none; /*Le saca la decoración de item*/
}
        
.navbar-item {
    margin-left: 30px; /* Espacio entre elementos*/
}
```

### Añadiendo Vida a la Barra de Navegación con Efectos Hover

Después de tener la estructura básica de la barra de navegación, me enfoqué en mejorar su aspecto visual e interactividad. Empecé por ajustar el estilo de los enlaces, eligiendo un tamaño de fuente de 16px y un peso de 500 para que fueran legibles y modernos. El color blanco (#fff) me pareció adecuado para contrastar con el fondo oscuro.

Luego, pensé en cómo hacer que la interacción fuera más interesante. Decidí añadir algunos efectos sutiles cuando el usuario pasara el cursor sobre los enlaces. No fue nada extravagante, solo un cambio suave de color y una pequeña línea que aparece debajo del texto.

Para el efecto de hover, programé una transición de color del blanco original a un tono ligeramente más claro (#f0f0f0). Luego, usando el pseudo-elemento ::after, creé una línea de 2px que se revela gradualmente bajo cada enlace al pasar el cursor.

Ajustar los tiempos de las animaciones llevó algo de prueba y error. Quería que fueran notables pero no distractivas. Al final, opté por una duración de 0.2 segundos tanto para el cambio de color como para la aparición de la línea. (más tarde hablaremos de la duración)

El resultado fue una barra de navegación más dinámica y atractiva. Estos pequeños cambios, aunque sutiles, mejoraron significativamente la experiencia de usuario sin complicar demasiado el diseño.

```html
<header class="navbar">
    <nav>
        <ul class="navbar-menu">
            <li class="navbar-item"><a href="#" class="navbar-link">Sobre mí</a></li> <!-- Agregamos la clase 'navbar-link' para manipular el hover y darle pequeños detalles -->
            <li class="navbar-item"><a href="#" class="navbar-link">Blog</a></li>
            <li class="navbar-item"><a href="#contacto" class="navbar-link">Contacto</a></li>
            <li class="navbar-item"><a href="#" class="navbar-link">Lenguaje</a></li>
            <li class="navbar-item"><a href="#" class="navbar-link">>M.claro</a></li>
        </ul>
    </nav>
</header>
```
```css
/* Estilos para los enlaces de la barra de navegación */
.navbar-link {
    color: #fff; /* Color del texto: blanco */
    font-weight: 500; /* Grosor de la fuente: semi-negrita */
    padding: 10px 0; /* Relleno vertical de 10px, sin relleno horizontal */
    position: relative; /* Posicionamiento relativo para el pseudo-elemento ::after */
    transition: color 0.2s ease; /* Transición suave del color al hacer hover */
}

/* Estilos para el texto del enlace al hacer hover o cuando está activo */
.navbar-link:hover,
.navbar-link.active {
    color: #e7e3e3; /* Cambia ligeramente el color del texto a un gris claro */
}

/* Pseudo-elemento para crear la línea de subrayado */
.navbar-link::after {
    content: ''; /* Contenido vacío necesario para que se muestre el pseudo-elemento */
    position: absolute; /* Posicionamiento absoluto respecto al elemento padre */
    bottom: 0; /* Alineado en la parte inferior del enlace */
    left: 0; /* Alineado a la izquierda del enlace */
    width: 100%; /* Ancho completo del enlace */
    height: 2px; /* Altura de la línea de subrayado */
    background-color: #fff; /* Color de la línea: blanco */
    transition: transform 0.2s ease; /* Transición suave para la animación de regreso */
    transform: scaleX(0); /* Inicialmente, la línea tiene escala 0 en el eje X (invisible) */
}

/* Estilos para la línea de subrayado al hacer hover o cuando el enlace está activo */
.navbar-link:hover::after,
.navbar-link.active::after {
    transform: scaleX(1); /* Escala el tamaño completo de la línea */
    transition: transform 0.2s ease; /* Transición suave al aparecer la línea */
}
```

### Selector de Idiomas

Después de haber refinado la estética y la interactividad básica de nuestra barra de navegación, era hora de abordar algunas funcionalidades clave que aún faltaban. Entre ellas, el cambio de idioma y el selector de modo oscuro/claro. Decidí comenzar con el selector de idioma, ya que la accesibilidad lingüística es crucial para un sitio web profesional. En el desarrollo web, cada detalle cuenta y contribuye a la experiencia general del usuario.

Mi visión era crear un selector de idioma intuitivo y fácil de usar. Quería que fuera discreto cuando no se necesitara, pero fácilmente accesible cuando el usuario lo requiriera. Así que opté por un diseño que se revelaría al pasar el mouse por encima.

Comencé con el HTML, creando una estructura básica pero funcional para el selector de idiomas. Mi objetivo era establecer una base sólida que pudiera manejar fácilmente los estilos y la interactividad que agregaría más adelante. Mientras codificaba, me concentré en la experiencia del usuario, asegurándome de que el cambio entre idiomas fuera intuitivo y accesible.

```html
<div class="language-selector">
    <div class="language-item" data-lang="en">English</div>
    <div class="language-item" data-lang="es">Español</div>
    <div class="language-item" data-lang="fr">Français</div>
    <div class="language-item" data-lang="de">Deutsch</div>
</div>
```

Cada elemento del HTML tenía un propósito específico. El atributo data-lang fue una decisión consciente para facilitar la futura implementación del cambio de idioma.

Con la estructura HTML establecida, el siguiente paso fue aplicar estilos CSS al selector de idiomas. El objetivo era crear un componente funcional que se integrara adecuadamente con la barra de navegación existente.

Comencé definiendo el estilo para el contenedor principal del selector de idiomas:
        
```css
.language-selector {
    position: relative; /*Relativo a su contenedor*/
}
```

Esto estableció la base para el posicionamiento del menú desplegable. A continuación, me enfoqué en el estilo del menú desplegable:

```css
.language-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #1a1a1a;
    padding: 0;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    min-width: 120px;
}
```

Configuré el menú para que estuviera oculto por defecto y se posicionara correctamente debajo del selector. Añadí un fondo oscuro, bordes redondeados y una sombra para mejorar la visibilidad.

Para mostrar el menú al pasar el mouse sobre el selector, utilicé:

```css
.language-selector:hover .language-dropdown {
    display: block;
}
```

Luego, apliqué estilos a los elementos individuales del menú:

```css
.language-dropdown li a {
    display: block;
    padding: 8px 20px;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    transition: background-color 0.2s ease;
}
            
.navbar-item.language-selector .language-dropdown li {
    list-style-type: none;
}
            
.navbar-item.language-selector .language-dropdown li a {
    text-decoration: none;
    display: block;
    padding: 5px 10px;
}
            
.language-dropdown li a:hover {
    background-color: #333;
}
```

Con estos estilos en su lugar, probé el selector de idiomas en el navegador. Al pasar el cursor sobre el elemento, el menú desplegable aparecía suavemente, mostrando las opciones de idioma de manera clara. Cada opción respondía al movimiento del cursor, cambiando sutilmente de color para indicar que podía ser seleccionada.

Observé cómo el componente se integraba con el resto de la barra de navegación. El contraste entre el fondo oscuro del menú y el texto claro facilitaba la lectura, mientras que los bordes redondeados y la sombra sutil le daban un toque de profundidad, haciéndolo destacar sin desentonar con el diseño general.

### Traducción

Con los estilos del selector de idiomas en su lugar, era hora de abordar la funcionalidad multilingüe de mi blog. Decidí utilizar archivos JSON para almacenar las traducciones, lo que me permitiría una gestión más eficiente y escalable de los diferentes idiomas.

Creé una nueva carpeta llamada "translations" en la estructura de mi proyecto. Dentro de esta, añadí archivos JSON para cada idioma que quería soportar: fr.json para francés, de.json para alemán, es.json para español y en.json para inglés.

Cada archivo JSON contenía pares clave-valor para los diferentes elementos de texto en mi sitio. Por ejemplo, el archivo de.json para alemán se veía así:

```json
{
    "about": "About me",
    "blog": "Blog",
    "contact": "Contact",
    "language_name": "English"
  }
```

Con los archivos JSON de traducciones listos y la estructura del selector de idiomas en su lugar, el siguiente paso era preparar el HTML para la funcionalidad multilingüe. Esta etapa requería atención al detalle, ya que cada elemento traducible necesitaría una identificación específica.

Revisé el código HTML de mi sitio, empezando por la barra de navegación. Añadí el atributo data-lang a los elementos que quería traducir. Este atributo serviría como enlace entre el HTML y los archivos JSON de traducciones, permitiendo que el script de JavaScript pudiera localizar y cambiar el contenido según el idioma seleccionado.

Trabajé en cada elemento del encabezado, que contenía la barra de navegación principal. Cada enlace de la navegación recibió su atributo data-lang, correspondiente a las claves en mis archivos JSON. Por ejemplo, el enlace "Sobre mí" quedó así:

```html
<li class="navbar-item"><a href="#" class="navbar-link" data-lang="about">Sobre mí</a></li>
```

Hice lo mismo para "Blog" y "Contacto", asegurándome de que cada uno tuviera su atributo data-lang.

Por último, incluí un elemento para el cambio de modo claro/oscuro, también preparado para la funcionalidad multilingüe:

```html
<li class="navbar-item"><a href="#" class="navbar-link" id="mode-toggle"></a></li>
```

Al terminar estas modificaciones en el HTML, había establecido la base para la internacionalización de mi blog. Cada elemento estaba listo para recibir su traducción correspondiente, pendiente de la implementación del JavaScript.

Esta etapa de preparación era importante. La correcta estructura del HTML sería clave para el funcionamiento de la funcionalidad multilingüe. Cada atributo data-lang conectaría el contenido visible con las traducciones de los archivos JSON.

Con el HTML listo, el siguiente paso era implementar el JavaScript para activar el selector de idiomas y hacer mi blog multilingüe.

### Funcionalidad

El ocaso se ponia mientras comence el archivo JavaScript que daría vida a nuestro selector de idiomas. Este script sería el puente invisible entre culturas, permitiendo a los visitantes navegar por nuestro contenido en su lengua materna con solo un clic.

language.js:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    let currentLanguage = 'es'; // Default language
    const languageSelector = document.querySelector('.language-selector');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageDisplay = languageSelector.querySelector('.navbar-link');

    languageSelector.addEventListener('click', (e) => {
        e.preventDefault();
        languageDropdown.classList.toggle('show');
    });

    languageDropdown.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            changeLanguage(lang);
            languageDropdown.classList.remove('show');
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageSelector.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });

    function changeLanguage(lang) {
        if (lang !== currentLanguage) {
            console.log('Cambiando idioma a:', lang);
            loadTranslations(lang);
            currentLanguage = lang;
        }
    }

    function loadTranslations(lang) {
        console.log(`Attempting to load: translations/${lang}.json`);
        fetch(`/src/translations/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                console.log('Translations loaded:', data);
                applyTranslations(data);
                updateLanguageDisplay(data);
            })
            .catch(error => {
                console.error('Error loading translations:', error);
                console.error('Error details:', error.message);
            });
    }

    function applyTranslations(translations) {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
    }

    function updateLanguageDisplay(translations) {
        languageDisplay.textContent = translations['language_name'] || currentLanguage.toUpperCase();
    }

    // Load initial translations
    loadTranslations(currentLanguage);
});
```

El código comienza con un event listener para 'DOMContentLoaded', asegurando que el script se ejecute solo cuando el DOM esté completamente cargado.

Estas primeras líneas eran como los cimientos de una casa; sólidos y fundamentales. Establecían el escenario para todo lo que vendría después. El 'es' para español, definiendo el punto de partida por defecto al inicializar la pagina.

Se declaran variables importantes:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    let currentLanguage = 'es'; // El español, nuestra lengua de partida
    const languageSelector = document.querySelector('.language-selector');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageDisplay = languageSelector.querySelector('.navbar-link');
```

currentLanguage: Inicializada con 'es' como idioma predeterminado.
languageSelector: Selecciona el elemento del selector de idiomas.
languageDropdown: Selecciona el menú desplegable de idiomas.
languageDisplay: Selecciona el elemento que muestra el idioma actual.

Se añade un event listener al languageSelector:

Previene el comportamiento predeterminado del enlace.
Alterna la clase 'show' en el menú desplegable, mostrándolo u ocultándolo.
Se añade un event listener al languageDropdown:

Verifica si el elemento clickeado es un enlace ('A').
Si es así, previene el comportamiento predeterminado.
Obtiene el idioma seleccionado del atributo 'data-lang'.
Llama a la función changeLanguage con el idioma seleccionado.
Oculta el menú desplegable.
Se añade un event listener al documento para cerrar el menú desplegable cuando se hace clic fuera de él:

Verifica si el clic fue fuera del languageSelector.
Si es así, remueve la clase 'show' del menú desplegable.
La función changeLanguage:

Verifica si el idioma seleccionado es diferente al actual.
Si es diferente, registra el cambio en la consola.
Llama a loadTranslations con el nuevo idioma.
Actualiza currentLanguage.

## Modo oscuro/claro

La implementación del modo oscuro/claro en mi sitio web resultó ser un desafío mucho más complejo de lo que inicialmente anticipé. Este viaje de desarrollo no solo mejoró la funcionalidad de mi sitio, sino que también amplió significativamente mi comprensión sobre la personalización de temas en el diseño web moderno.

Al principio, mi enfoque era bastante simple. Pensaba utilizar la propiedad color-scheme de CSS, creyendo que sería suficiente para lograr un cambio efectivo entre los modos oscuro y claro. Sin embargo, rápidamente me di cuenta de que esta solución era demasiado limitada para lo que realmente quería lograr. No ofrecía el nivel de control y personalización que buscaba para mi sitio.

Fue entonces cuando tuve una epifanía: para crear un sistema de temas verdaderamente flexible y cambiable, necesitaba ir más allá de las soluciones predeterminadas. Necesitaba un enfoque que me permitiera personalizar cada aspecto del diseño, tanto para el modo oscuro como para el claro.

Con esta nueva perspectiva, comencé a trabajar en una solución más robusta y personalizable. El corazón de este nuevo sistema se basó en la definición de variables CSS personalizadas en el elemento :root. Para el modo oscuro predeterminado, definí un conjunto de variables que controlaban diversos aspectos del diseño:

```css
:root {
  --background-color: #111;
  --text-color: rgba(255, 255, 255, 0.87);
  --link-color: #646cff;
  --link-hover-color: #535bf2;
  --navbar-background: #1a1a1a;
  --navbar-active: #fff;
  --navbar-hover: #d1d1d1;
  --navbar-language-selector: #1a1a1a;
}
```

Cada variable representaba un aspecto específico del diseño: el color de fondo, el color del texto, los colores de los enlaces (tanto en estado normal como al pasar el mouse), y varios elementos de la barra de navegación.

Para el modo claro, creé un conjunto similar de variables, pero esta vez las agrupé bajo una clase específica light-mode:

```css
body.light-mode {
  --background-color: #f1f1f1;
  --text-color: #213547;
  --link-color: #00ff22;
  --link-hover-color: #535bf2;
  --navbar-background: #ebe8e8;
  --navbar-active: #000;
  --navbar-hover: #000;
  --navbar-language-selector: #d4d4d4;
}
```

Este enfoque me brindó una flexibilidad sin precedentes para controlar con precisión la apariencia de cada elemento en ambos modos, oscuro y claro. El sistema me permitió personalizar colores fácilmente, mantener coherencia visual, experimentar con esquemas de color rápidamente y implementar cambios de tema dinámicos con JavaScript, todo mediante el uso de variables CSS y la simple adición o eliminación de una clase en el elemento body.

La implementación de este sistema no estuvo exenta de desafíos. Tuve que revisar cuidadosamente cada componente de mi sitio para asegurarme de que utilizara correctamente las nuevas variables CSS. También tuve que considerar cómo manejar diversos aspectos del diseño y la funcionalidad para garantizar una experiencia de usuario coherente y agradable en ambos modos. A pesar de estos retos, el resultado final fue un sistema de temas robusto y flexible que mejoró significativamente la usabilidad de mi sitio web.

Después de mucho trabajo y experimentación, finalmente implementé todos los cambios necesarios en mi CSS para crear un sistema de temas flexible. Estos fueron todos los cambios que realicé:

```css
body {
  color: var(--text-color);
  background-color: var(--background-color);
  transition: background-color 0.2s ease, color 0.2s ease;
}

a {
  color: var(--link-color);
  transition: color 0.2s ease;
}

a:hover {
  color: var(--link-hover-color);
}

.navbar {
  background-color: var(--navbar-background);
  transition: background-color 0.2s ease;
}

.navbar-link {
  color: var(--text-color);
    transition: color 0.1s ease;
}

.navbar-link:hover,
.navbar-link.active {
  color: var(--navbar-hover);
}

.navbar-link::after {
  background-color: var(--navbar-active);
  transition: background-color 0.2s ease;
}

.language-dropdown {
  background-color: var(--navbar-language-selector);
}

.language-dropdown li a {
  color: var(--navbar-active);
  transition: background-color 0.2s ease;
}
```

Al ver todos estos cambios juntos, me di cuenta de lo mucho que había logrado. Cada línea de código representaba una decisión cuidadosamente considerada para mejorar la experiencia del usuario y la flexibilidad del diseño.

La transición suave entre los modos claro y oscuro, controlada por las propiedades de transición en el body y los enlaces, aseguraba que el cambio de tema no fuera brusco o molesto para los usuarios. La navbar, con sus enlaces interactivos y el selector de idiomas, ahora se adaptaba perfectamente a ambos modos, manteniendo la coherencia visual y la usabilidad.

Uno de los aspectos más satisfactorios fue ver cómo las variables CSS simplificaban enormemente el proceso de gestión de colores. Con solo cambiar el valor de una variable, podía ajustar el color de múltiples elementos en todo el sitio, lo que hacía que las modificaciones y el mantenimiento fueran mucho más eficientes.

Sin embargo, el proceso no estuvo exento de desafíos. Tuve que asegurarme de que cada combinación de colores proporcionara suficiente contraste para mantener la legibilidad, especialmente en elementos como los enlaces y el texto sobre fondos de colores. Además, tuve que considerar cuidadosamente cómo se verían ciertos elementos, como imágenes o íconos, en ambos modos.

A pesar de estos desafíos, el resultado final fue extremadamente gratificante. Ahora tenía un sitio web que no solo era visualmente atractivo, sino también accesible y fácil de usar en diferentes condiciones de iluminación. El sistema de temas que había creado era robusto y flexible, permitiéndome hacer ajustes rápidos y experimentar con diferentes esquemas de color sin tener que reescribir grandes cantidades de CSS.

Mirando hacia el futuro, me entusiasmaba la idea de seguir refinando y expandiendo este sistema. Tal vez podría añadir más temas o incluso permitir a los usuarios personalizar sus propios esquemas de color. Las posibilidades parecían infinitas, y estaba ansioso por explorarlas todas.

Sin embargo, aún faltaba explicar algo crucial para completar mi sistema de cambio de tema. la implementación de la lógica en JavaScript para hacer funcional todo el mecanismo. Para ello, creé un archivo llamado theme-switcher.js, que importé en mi main.js junto con otros estilos importantes:

```javascript
import './style.css'
import './public/styles/navbar/navbar.css';
import './public/styles/navbar/navbar-link.css';
import './public/styles/navbar/language-selector.css';
import './src/theme-switcher.js'
```

El corazón de la funcionalidad residía en el código de theme-switcher.js. Comencé asegurándome de que el código se ejecutara solo cuando el DOM estuviera completamente cargado:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // ... resto del código
});
```

Dentro de este evento, seleccioné los elementos clave: el botón de cambio de modo y el body del documento:

```javascript
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
```

Luego, definí una función setMode que se encargaba de cambiar entre los modos claro y oscuro:

```javascript
function setMode(mode) {
  if (mode === 'light') {
    body.classList.add('light-mode');
    modeToggle.textContent = 'M.Oscuro';
  } else {
    body.classList.remove('light-mode');
    modeToggle.textContent = 'M.Claro';
  }
  localStorage.setItem('preferredMode', mode);
}
```

Esta función no solo cambiaba las clases y el texto del botón, sino que también guardaba la preferencia del usuario en el localStorage para futuras visitas.

Para asegurarme de que la preferencia del usuario se mantuviera entre sesiones, añadí un código que comprobaba si existía una preferencia guardada:

```javascript
const savedMode = localStorage.getItem('preferredMode');
if (savedMode) {
  setMode(savedMode);
} else {
  setMode('dark');
}
```

Si no había preferencia guardada, establecía el modo oscuro como predeterminado.

Finalmente, agregué un event listener al botón de cambio de modo:

```javascript
modeToggle.addEventListener('click', (e) => {
  e.preventDefault();
  const newMode = body.classList.contains('light-mode') ? 'dark' : 'light';
  setMode(newMode);
});
```

Este código detectaba los clics en el botón y cambiaba al modo opuesto al actual.

Todo este mecanismo funcionaba gracias a un simple pero crucial elemento en mi HTML:

```html
<li class="navbar-item"><a href="#" class="navbar-link" id="mode-toggle">M.Claro</a>
```

Con este código JavaScript, logré dar vida a mi sistema de cambio de tema, creando una experiencia de usuario dinámica y personalizable. Cada clic en el botón "Cambiar modo" activaba una serie de cambios que transformaban la apariencia de mi sitio web, adaptándose a las preferencias del usuario y recordándolas para futuras visitas.

