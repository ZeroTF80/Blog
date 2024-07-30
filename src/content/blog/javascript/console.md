---
title: 'Console'
technology: 'JavaScript'
description: 'Console in JavaScript'
pubDate: 'Jul 20 2024'
heroImage: '/JavaScript.jpg'
---
<< [JavaScript](/blog/javascript/) | [Console](/blog/javascript/console) >>

## El método console.log()
La consola de JavaScript es una herramienta invaluable para los desarrolladores, y el método console.log() es quizás el más utilizado y conocido de todos sus métodos. Este sencillo pero poderoso comando nos permite imprimir mensajes en la consola del navegador, lo que lo convierte en una herramienta esencial para depurar código y entender el flujo de ejecución de nuestros programas.

### ¿Qué es console.log()?
`console.log()` es un método que permite mostrar mensajes en la consola del navegador. Puede aceptar uno o más argumentos de cualquier tipo de dato, incluyendo strings, números, booleanos, arrays y objetos.

### Uso básico
El uso más simple de `console.log()` es imprimir un mensaje de texto:
```javascript
console.log("Hola, mundo!");
```
Este código mostrará "Hola, mundo!" en la consola del navegador. Puedes abrir la consola presionando Ctrl + Shift + I (o Cmd + Option + I en macOS):

### Imprimiendo múltiples valores
Puedes pasar múltiples argumentos a `console.log()`, separándolos por comas:
```javascript
let nombre = "Alice";
let edad = 30;
console.log("Nombre:", nombre, "Edad:", edad);
```
Esto imprimirá: "Nombre: Alice Edad: 30"

### Depuración de variables
`console.log()` es especialmente útil para verificar el valor de las variables durante la ejecución del código:
```javascript
let suma = 5 + 3;
console.log("El resultado de la suma es:", suma);
```

### Encontrando y conociendo errores
`console.log()` es ampliamente utilizado para identificar y comprender errores en el código. Al colocar estratégicamente llamadas a `console.log()` en diferentes partes de tu script, puedes rastrear el flujo de ejecución y los valores de las variables en puntos críticos. Esto te ayuda a localizar dónde exactamente las cosas pueden estar saliendo mal:
```javascript
function dividir(a, b) {
    console.log("Intentando dividir", a, "entre", b);
    if (b === 0) {
        console.log("Error: División por cero");
        return null;
    }
    let resultado = a / b;
    console.log("Resultado de la división:", resultado);
    return resultado;
}

console.log(dividir(10, 2));
console.log(dividir(10, 0));
```
En este ejemplo, los mensajes de `console.log()` nos ayudan a entender qué está pasando en cada paso de la función, incluyendo cuando se produce un error.

#### Mensajes de error por niveles
La consola de JavaScript ofrece una gama de métodos que van más allá del ampliamente utilizado `console.log()`. Estos métodos adicionales permiten una categorización más precisa de los mensajes según su naturaleza e importancia, lo cual es particularmente útil en el contexto de las DevTools de los navegadores modernos.

El método `console.debug()` se emplea para registrar información con un alto nivel de detalle. Su principal aplicación se encuentra en la fase de desarrollo, donde la granularidad de la información es crucial para el análisis del comportamiento del código. Sin embargo, debido a su nivel de detalle, estos mensajes suelen ser demasiado verbosos para entornos de producción.

Para mensajes de carácter informativo general, se utiliza `console.info()`. Este método es ideal para registrar eventos o estados que no representan problemas, pero cuyo seguimiento puede ser valioso. Algunos navegadores resaltan estos mensajes con iconos distintivos, facilitando su identificación visual en la consola.

Cuando se trata de alertar sobre situaciones potencialmente problemáticas, pero que no impiden la ejecución del código, `console.warn()` es la elección adecuada. Los mensajes generados por este método suelen aparecer destacados en amarillo en la mayoría de los navegadores, lo que los hace inmediatamente reconocibles entre otros tipos de salidas de consola.

Para errores críticos o situaciones que impiden el correcto funcionamiento del programa, se emplea `console.error()`. Estos mensajes son típicamente resaltados en rojo, proporcionando una indicación visual clara de problemas que requieren atención inmediata.

La utilización estratégica de estos diferentes métodos de consola conlleva múltiples ventajas técnicas. En primer lugar, facilita una organización más estructurada de la información de depuración, permitiendo una rápida distinción entre mensajes de diferente naturaleza. Además, las capacidades de filtrado de las DevTools modernas pueden aprovechar esta categorización para permitir a los desarrolladores centrarse en tipos específicos de mensajes según las necesidades del momento.

Desde una perspectiva de ingeniería de software, el uso de estos métodos diferenciados promueve mejores prácticas de logging. Permite una gradación más precisa de la severidad de los eventos registrados, lo cual es crucial en sistemas complejos donde la distinción entre una advertencia y un error puede tener implicaciones significativas en la respuesta del sistema o en las acciones de los desarrolladores.

En el contexto del desarrollo colaborativo, esta práctica mejora la comunicación entre miembros del equipo. Un desarrollador puede transmitir de manera más efectiva la naturaleza de un mensaje simplemente eligiendo el método de consola apropiado, lo que facilita la comprensión y la respuesta adecuada por parte de otros miembros del equipo.

Además, en entornos de producción con sistemas de logging avanzados, estos diferentes niveles de mensajes pueden integrarse con herramientas de monitoreo y alerta, permitiendo una respuesta más rápida y precisa a diferentes tipos de eventos o problemas.

En conclusión, el uso juicioso de los diversos métodos de consola en JavaScript no solo mejora la eficacia del proceso de depuración, sino que también contribuye a una arquitectura de logging más robusta y informativa. Esta práctica se alinea con los principios de desarrollo de software de alta calidad, facilitando el mantenimiento, la colaboración y la resolución de problemas en proyectos de cualquier escala.

### Mostrar una traza de error

El método console.trace() es una herramienta avanzada de depuración que proporciona una visión detallada de la pila de llamadas en el momento de su invocación. Este método es particularmente útil para el análisis de flujo de ejecución y la identificación de patrones de llamadas inesperados o problemáticos en aplicaciones JavaScript complejas.

Cuando se invoca console.trace(), genera una salida que incluye no solo el mensaje especificado, sino también una representación estructurada de la pila de llamadas actual. Esta representación incluye información crucial como los nombres de los archivos, los números de línea y, cuando es posible, los nombres de las funciones involucradas en la secuencia de llamadas que llevaron al punto de ejecución actual.

La sintaxis básica de console.trace() es similar a la de console.log():
```javascript
console.trace("Mensaje opcional");
```
Sin embargo, la salida generada es significativamente más informativa. Por ejemplo:
```
► Mensaje opcional
  - DataManager.js:36
  - modules.js:94
  - index.js:1
```
Esta salida proporciona una traza inversa de la pila de llamadas, comenzando desde el punto de invocación de console.trace() y retrocediendo a través de las llamadas de función previas. Cada entrada en la traza incluye:

1. Nombre del archivo: Identifica el archivo JavaScript donde ocurrió cada llamada.
2. Número de línea: Indica la línea exacta dentro del archivo donde se realizó la llamada.
3. Nombre de la función (cuando está disponible): Muestra el nombre de la función en la que ocurrió la llamada.

La utilidad de console.trace() se manifiesta en varios escenarios de desarrollo:

1. Depuración de callbacks y promesas: En arquitecturas asíncronas complejas, console.trace() puede revelar la secuencia exacta de operaciones que llevaron a un estado particular, lo cual es especialmente valioso cuando se trabaja con callbacks anidados o cadenas de promesas.

2. Análisis de rendimiento: Al identificar rutas de ejecución inesperadamente largas o frecuentes, console.trace() puede señalar áreas potenciales para optimización.

3. Detección de recursión excesiva: En funciones recursivas, console.trace() puede ayudar a visualizar la profundidad de la recursión y detectar casos de recursión infinita o excesiva.

4. Depuración de bibliotecas y frameworks: Cuando se trabaja con código de terceros, console.trace() puede proporcionar insights sobre cómo y cuándo se invocan funciones específicas dentro del flujo de la aplicación.

5. Auditoría de seguridad: En el contexto de la seguridad de aplicaciones web, console.trace() puede ayudar a rastrear el origen de llamadas potencialmente maliciosas o no autorizadas a funciones sensibles.

Es importante notar que el uso de console.trace() puede tener un impacto en el rendimiento, especialmente si se invoca frecuentemente en bucles o funciones de alta frecuencia. Por lo tanto, es una práctica recomendada eliminar o comentar las llamadas a console.trace() en código de producción, o implementar un mecanismo para desactivarlas condicionalmente en entornos no de desarrollo.

Además, la efectividad de console.trace() puede variar según el entorno de ejecución. En navegadores modernos y entornos Node.js, generalmente proporciona información detallada y útil. Sin embargo, en entornos más restrictivos o en versiones antiguas de JavaScript, la cantidad de información disponible puede ser limitada

### Pintando la Consola: El Arte Oculto de console.log()
El uso de estilos CSS en console.log() es una característica que, aunque no es estándar y puede variar entre navegadores, es ampliamente soportada en los navegadores modernos, especialmente en Chrome y Firefox.

Aquí hay algunos puntos adicionales y ejemplos sobre cómo usar esta función:

1. Sintaxis básica:
La sintaxis básica es usar %c antes del texto que quieres estilizar, seguido por una cadena de estilos CSS como segundo argumento:
```javascript
console.log('%cTexto estilizado', 'color: blue; font-size: 20px;');
```
2. Múltiples estilos:
Puedes aplicar diferentes estilos a diferentes partes del texto:
```javascript
console.log('%cTexto rojo %cTexto verde', 'color: red;', 'color: green;');
```
3. Combinación con otros especificadores de formato:
Puedes combinar %c con otros especificadores como %s (string), %d (número), etc.:
```javascript
console.log('%cNúmero: %d', 'color: blue;', 42);
```
4. Estilos más avanzados:
Puedes usar propiedades CSS más complejas:
```javascript
console.log('%cTexto con sombra', 'color: red; font-size: 20px; text-shadow: 2px 2px 5px black;');
```
5. Uso práctico:
Aunque principalmente es una curiosidad, puede ser útil para:
- Destacar mensajes de error o advertencia.
- Crear separadores visualmente atractivos en los logs.
- Mejorar la legibilidad de los datos en la consola.
6. Ejemplo de uso práctico:
```javascript
const logError = (message) => {
  console.log('%cError: %s', 'color: red; font-weight: bold;', message);
};

const logWarning = (message) => {
  console.log('%cWarning: %s', 'color: orange; font-weight: bold;', message);
};

const logSuccess = (message) => {
  console.log('%cSuccess: %s', 'color: green; font-weight: bold;', message);
};

logError('Algo salió mal');
logWarning('Esto podría ser un problema');
logSuccess('Operación completada');
```
7. Limitaciones:
- No todos los estilos CSS funcionarán en la consola.
- El soporte puede variar entre navegadores.
- No es adecuado para logs de producción, ya que añade overhead innecesario.

Aunque este truco es principalmente una curiosidad, puede ser útil durante el desarrollo para hacer que ciertos mensajes destaquen o para crear una jerarquía visual en los logs de la consola. Sin embargo, es importante usarlo con moderación y principalmente en entornos de desarrollo.

### El Arte de Mantener una Consola Impecable
Imagina que estás en medio de una intensa sesión de depuración. Tu consola de JavaScript está repleta de mensajes, advertencias y errores. El desorden visual amenaza con abrumar tus sentidos y dificultar tu concentración. ¿Qué hacer? No temas, porque existe una solución elegante y rápida para este dilema del desarrollador.

Entra en escena el poderoso dúo: la combinación de teclas Ctrl + L (o Cmd + K en Mac) y su aliado, el método `console.clear()`. Estos héroes de la limpieza digital están listos para barrer con todo el desorden de tu consola en un abrir y cerrar de ojos.

Con un simple gesto de tus dedos, Ctrl + L convoca una ráfaga de pixels que barre tu consola, dejándola tan prístina como el día en que abriste tu navegador por primera vez. Es como tener un botón de "reinicio" para tu espacio de trabajo digital.

Pero espera, hay más. Para aquellos que prefieren el enfoque programático, `console.clear()` está a tu disposición. Este método mágico realiza la misma hazaña de limpieza con solo una línea de código. Es como tener un mayordomo digital a tu servicio, listo para despejar tu espacio de trabajo con un simple comando.

Y para los aventureros que desean ir más allá, el ratón esconde secretos adicionales. Con unos cuantos clics, puedes no solo limpiar la consola sino también borrar el historial de autocompletado. Es como tener una máquina del tiempo que te permite empezar de cero, sin rastros de tus exploraciones pasadas.

Así que la próxima vez que te encuentres nadando en un mar de logs, recuerda: la claridad está a solo un atajo de teclado o un método de distancia. Mantén tu consola limpia, tu mente clara, y tu código impecable. Después de todo, un espacio de trabajo ordenado es el primer paso hacia un código brillante.

### Agrupación de Mensajes en la Consola
La consola de JavaScript ofrece una serie de métodos para organizar y estructurar los mensajes de una manera más clara y manejable. Estos métodos de agrupación permiten crear una jerarquía visual en los logs, facilitando la lectura y comprensión de la información mostrada.

#### Métodos de Agrupación
console.group()

1. Inicia un grupo expandible de mensajes.
- El texto pasado como parámetro se usa como título del grupo.
2. console.groupCollapsed()
- Similar a console.group(), pero el grupo se crea colapsado por defecto.
3. console.groupEnd()
-  Cierra el grupo de mensajes más reciente.

### Ejemplo Práctico
Veamos cómo se utilizan estos métodos en la práctica:

```javascript
console.group("Información del Navegador");
console.log("User Agent: ", navigator.userAgent);
console.log("Idioma: ", navigator.language);
console.groupEnd();
```
En este ejemplo, verás en la consola:

► Información del Navegador

Al expandir este grupo, se revelarán los dos `console.log()` con la información del User Agent y el idioma.

### Anidación de Grupos
Es posible anidar varios grupos uno dentro de otro, creando una estructura jerárquica más compleja:

```javascript
console.group("Datos del Usuario");
console.log("Nombre: Juan Pérez");
console.groupCollapsed("Detalles");
console.log("Edad: 30");
console.log("Email: juan@example.com");
console.groupEnd();
console.groupEnd();
```
Ventajas de la Agrupación
1. Organización: Ayuda a estructurar la información de manera lógica.
2. Legibilidad: Mejora la lectura de los logs, especialmente en aplicaciones complejas.
3. Depuración: Facilita el proceso de depuración al categorizar los mensajes.

La agrupación de mensajes en la consola es una herramienta poderosa para los desarrolladores, permitiendo una mejor organización y visualización de la información durante el desarrollo y la depuración de aplicaciones web.

### Visualización Avanzada de Datos en la Consola
#### El Método console.table()
El método `console.table()` es una herramienta poderosa para visualizar datos estructurados en la consola de JavaScript. Este método es particularmente útil cuando se trabaja con arrays de objetos o datos tabulares.

Ejemplo de Uso:
```javascript
const users = [
  { name: "Manz", role: "streamer", status: "happy" },
  { name: "BlurSoul_", role: "mod", status: "happy" },
  { name: "felixicaza", role: "mod", status: "happy" },
  { name: "pheralb", role: "mod", status: "porosad" }
];

console.table(users);
```
Al ejecutar este código, verás una tabla formateada en la consola, con columnas para cada propiedad de los objetos y filas para cada elemento del array. Esto proporciona una vista clara y organizada de los datos, especialmente útil para conjuntos de datos más grandes o complejos.

#### Ventajas de console.table():
1. Mejora la legibilidad de datos estructurados.
2. Facilita la comparación entre diferentes entradas de datos.
3. Ideal para visualizar arrays de objetos o matrices.

#### Alternativa: Objetos Compactos en console.log()
Si prefieres no utilizar console.table(), existe otra técnica interesante para mostrar información de manera compacta y legible utilizando console.log().

**Ejemplo:**
```javascript
const name = "Alice";
const role = "developer";
const happy = true;

console.log({ name, role, happy });
```
En este caso, estamos creando un objeto JavaScript al vuelo dentro del console.log(). Las propiedades del objeto son los nombres de las variables, y los valores son los contenidos de estas variables.

**Ventajas de este Método:**
Proporciona una vista compacta y estructurada de múltiples variables.
Muestra tanto los nombres de las variables como sus valores.
Útil para depuración rápida de múltiples variables relacionadas.

#### Conclusión
Tanto console.table() como la técnica de objetos compactos en console.log() ofrecen formas eficientes de visualizar datos en la consola. La elección entre uno u otro dependerá del tipo y cantidad de datos que necesites mostrar, así como de tus preferencias personales en cuanto a la presentación de la información durante el proceso de desarrollo y depuración.

### El Método console.assert() en JavaScript
#### Introducción a console.assert()
El método `console.assert()` es una herramienta útil en JavaScript para realizar aserciones durante el desarrollo y la depuración de código. Este método funciona como un `console.log()` condicional, que se activa solo cuando una condición específica no se cumple.

#### Funcionamiento
`console.assert()` toma dos argumentos principales:

1. Una expresión booleana (condición)
2. Un mensaje (opcional) que se mostrará si la condición es falsa
#### Sintaxis
```javascript
console.assert(condición, mensaje);
```
#### Ejemplos de Uso
**Ejemplo 1**: Condición Verdadera
```javascript
console.assert(5 < 10, "5 es menor que 10");
// No ocurre nada, ya que la condición es verdadera
```
En este caso, no se muestra ningún mensaje en la consola porque la condición (5 < 10) es verdadera.

#### Ejemplo 2: Condición Falsa
```javascript
console.assert(5 < 0, "5 es menor que 0");
// Muestra un mensaje de error: "Assertion failed: 5 es menor que 0"
```
Aquí, se muestra un mensaje de error en la consola porque la condición (5 < 0) es falsa.

#### Características Importantes
1. No Detiene la Ejecución: console.assert() no interrumpe la ejecución del programa, incluso si la aserción falla.
2. Sutil: Es una forma sutil de realizar comprobaciones durante el desarrollo.
3. Útil para Depuración: Ideal para verificar condiciones esperadas en puntos críticos del código.
4. Mensaje Personalizado: Permite incluir un mensaje descriptivo que se mostrará si la aserción falla.

#### Casos de Uso

- Verificar que ciertas condiciones se cumplen en puntos específicos del código.
- Comprobar el estado de variables o resultados de funciones.
- Realizar pruebas simples durante el desarrollo.

#### Conclusión
`console.assert()` es una herramienta valiosa para los desarrolladores de JavaScript, especialmente durante las fases de desarrollo y depuración. Permite realizar comprobaciones sutiles pero efectivas, ayudando a identificar rápidamente cuando ciertas condiciones esperadas no se cumplen, sin interrumpir el flujo de ejecución del programa.

### El Método console.dir() en JavaScript
#### ¿Qué es console.dir()?
`console.dir()` es un método en JavaScript que permite mostrar una representación interactiva de las propiedades de un objeto JavaScript en la consola del navegador. A diferencia de `console.log()`, que muestra una representación del elemento HTML, `console.dir()` se enfoca en las propiedades del objeto JavaScript asociado.

#### Diferencias entre console.log() y console.dir()
##### Uso de console.log()
Cuando utilizamos `console.log()` para mostrar elementos HTML, obtenemos una representación del contenido HTML:

```javascript
console.log(document.body);
// Muestra: ► <body class="main-page">···</body>
```
Este método es útil cuando queremos ver la estructura HTML del elemento.

#### Uso de console.dir()
Por otro lado, `console.dir()` nos muestra las propiedades del objeto JavaScript asociado al elemento HTML:
```javascript
console.dir(document.body);
// Muestra:
// ► body.main-page
//   aLink: ""
//   accessKey: ""
//   accessibleNode: AccessibleNode { ... }
//   anchorElement: null
//   ...
```
#### Cuándo usar console.dir()
`console.dir()` es particularmente útil en las siguientes situaciones:

Cuando necesitamos examinar las propiedades y métodos de un objeto JavaScript.
Para explorar la estructura interna de elementos del DOM como objetos JavaScript.
Cuando queremos ver todas las propiedades disponibles de un objeto, incluyendo las heredadas.
Ejemplo Práctico
Supongamos que tenemos un botón en nuestra página HTML:

```html
<button id="miBoton">Haz clic</button>
```
Podemos comparar la salida de `console.log()` y `console.dir()`:

```javascript
const boton = document.getElementById('miBoton');

console.log(boton);
// Muestra: <button id="miBoton">Haz clic</button>

console.dir(boton);
// Muestra un objeto interactivo con todas las propiedades del botón
// como elemento del DOM, incluyendo métodos y propiedades heredadas.
```
El uso de `console.dir()` nos permite explorar en profundidad las características del objeto JavaScript asociado al elemento HTML, lo que puede ser muy útil para depuración y comprensión de la estructura interna de los elementos del DOM.

### Crear Benchmarks Rápidos en JavaScript
Los navegadores modernos ofrecen una serie de métodos para realizar pruebas de rendimiento y conteo, que son útiles para optimizar y depurar código. Estos métodos se dividen en tres categorías principales:

1. **Funciones de Contador**
**console.count(nombre)**
Incrementa un contador con el nombre especificado.

```javascript
for (let i = 0; i < 3; i++) {
  console.count('Iteración');
}
// Salida:
// Iteración: 1
// Iteración: 2
// Iteración: 3
```
**console.countReset(nombre)**
Reinicia a cero el contador con el nombre especificado.
```javascript
console.count('Prueba');  // Prueba: 1
console.count('Prueba');  // Prueba: 2
console.countReset('Prueba');
console.count('Prueba');  // Prueba: 1
```
2. **Benchmark de Tiempo**
**console.time(nombre)**
Inicia un temporizador con el nombre especificado.

**console.timeLog(nombre)**
Registra el tiempo transcurrido desde el inicio del temporizador.

**console.timeEnd(nombre)**
Detiene el temporizador y muestra el tiempo total transcurrido.

```javascript
console.time('MiPrueba');
// Código a medir
for (let i = 0; i < 1000000; i++) {
  // Operación
}
console.timeLog('MiPrueba');  // MiPrueba: 5.23ms
// Más código...
console.timeEnd('MiPrueba');  // MiPrueba: 10.85ms
```
3. **Benchmark de Rendimiento**
Estas funciones trabajan con la pestaña Performance de las DevTools del navegador:

**console.profile()**
Inicia un perfil de rendimiento.

**console.timeStamp(nombre)**
Añade una marca de tiempo en el perfil de rendimiento.

**console.profileEnd()**
Finaliza el perfil de rendimiento.
```javascript
console.profile('MiPerfil');
console.timeStamp('Inicio de operación');
// Código a perfilar
console.timeStamp('Fin de operación');
console.profileEnd('MiPerfil');
```
Estas herramientas son valiosas para analizar y optimizar el rendimiento de tu código JavaScript, permitiéndote identificar cuellos de botella y áreas de mejora en tus aplicaciones.

### Contadores y Herramientas de Rendimiento en JavaScript
#### Contadores
El método `console.countReset()` es compatible de forma segura desde 2020.

Ejemplo de uso de contadores:
```javascript
for (let i = 0; i < 5; i++) {
  console.count("test-loop");
}
console.countReset("test-loop");
```
Ventaja: Usar métodos de `console` permite eliminar fácilmente todos los `*console.*` del código en producción usando herramientas como el plugin `@rollup/plugin-strip` de Rollup.

#### Test de Velocidad
Los métodos relacionados con `console.time()` son útiles para medir el tiempo de ejecución de operaciones:

```javascript
console.time("test1");
for (let i = 0; i < 10; i++) {
  /* Operación costosa */
  console.timeLog("test1", i);
}
console.timeEnd("test1");
```
- `console.time("nombre"):` Inicia el test.
- `console.timeLog("nombre"):` Punto de control intermedio.
- `console.timeEnd("nombre"):` Finaliza el test y muestra el tiempo total.

### Test de Rendimiento
Para análisis más profundos usando la pestaña Performance de las DevTools:

- `console.profile():` Inicia un perfil de rendimiento.
- `console.profileEnd():` Finaliza el perfil de rendimiento.
- `console.timeStamp("nombre"):` Establece puntos de control en el test de rendimiento.

### Depuración
Puedes usar la palabra clave debugger en cualquier parte del código para pausar la ejecución y abrir las DevTools en ese punto, facilitando la depuración.

```javascript
function miFunction() {
  // Código...
  debugger; // La ejecución se detendrá aquí
  // Más código...
}
```
Estas herramientas son invaluables para optimizar el rendimiento y depurar código JavaScript de manera eficiente. Te permiten identificar cuellos de botella, medir tiempos de ejecución precisos y analizar el comportamiento de tu código en detalle.

## Conclusión
El método `console.log()` es una herramienta simple pero poderosa en el arsenal de cualquier desarrollador JavaScript. Dominar su uso puede hacer que el proceso de depuración sea mucho más eficiente y ayudarte a entender mejor cómo se está ejecutando tu código, especialmente cuando se trata de identificar y resolver errores.

**Fuentes**: <a href="https://lenguajejs.com/javascript/introduccion/consola-de-javascript/" target="_blank">Lenguaje JavaScript</a>