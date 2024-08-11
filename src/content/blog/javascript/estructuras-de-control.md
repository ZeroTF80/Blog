---
title: 'Estructuras de control'
technology: 'JavaScript'
description: 'Una guía completa sobre los tipos de datos fundamentales en JavaScript'
pubDate: 'Aug 09 2024'
heroImage: '/JavaScript.jpg'
---
# Estructuras de control en JavaScript: Dominando if-else y switch

## Índice

* 1. Introducción
* 2. Estructura de control if-else
   * 2.1. Sintaxis básica del if-else
   * 2.2. if-else anidados
   * 2.3. Operador ternario
   * 2.4. Truthy y Falsy en JavaScript
   * 2.5. Operadores lógicos en condiciones
* 3. Estructura de control switch
   * 3.1. Sintaxis básica del switch
   * 3.2. Casos múltiples
   * 3.3. El caso default
   * 3.4. Switch con expresiones
   * 3.5. Limitaciones del switch
* 4. Comparación entre if-else y switch
   * 4.1. Escenarios de uso
   * 4.2. Rendimiento
   * 4.3. Legibilidad y mantenibilidad
* 5. Estructuras de control avanzadas
   * 5.1. Operador de coalescencia nula (??)
   * 5.2. Encadenamiento opcional (?.)
* 6. Mejores prácticas
   * 6.1. Claridad sobre brevedad
   * 6.2. Evitar efectos secundarios en las condiciones
   * 6.3. Uso de constantes para mejorar la legibilidad
   * 6.4. Simplificación de condiciones complejas
* 7. Patrones de diseño relacionados
   * 7.1. Patrón Estrategia
   * 7.2. Patrón Estado
   * 7.3. Objeto de configuración
* 8. Depuración de estructuras de control
   * 8.1. Uso de console.log para depuración
   * 8.2. Herramientas de depuración del navegador
   * 8.3. Errores comunes y cómo evitarlos
* 9. Rendimiento y optimización
   * 9.1. Evaluación en cortocircuito
   * 9.2. Optimización de switch vs objeto literal
   * 9.3. Medición del rendimiento
* 10. Conclusión

## 1. Introducción

Las estructuras de control son el esqueleto de cualquier programa en JavaScript. Permiten que nuestro código tome decisiones, repita acciones y, en general, controle el flujo de ejecución. Entre estas estructuras, `if-else` y `switch` destacan por su versatilidad y frecuencia de uso. Este blog profundizará en estas dos estructuras, explorando sus matices, casos de uso y mejores prácticas.

## 2. Estructura de control if-else

### 2.1. Sintaxis básica del if-else

La estructura `if-else` es fundamental en la programación. Permite ejecutar diferentes bloques de código basados en condiciones booleanas.

```javascript
if (condición) {
  // Código a ejecutar si la condición es verdadera
} else {
  // Código a ejecutar si la condición es falsa
}
```

Por ejemplo:

```javascript
let temperatura = 22;

if (temperatura > 30) {
  console.log("Hace calor");
} else {
  console.log("La temperatura es agradable");
}
```

### 2.2. if-else anidados

Podemos anidar múltiples declaraciones `if-else` para manejar múltiples condiciones:

```javascript
let hora = 14;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
```

Sin embargo, es importante no abusar de los anidamientos excesivos, ya que pueden hacer que el código sea difícil de leer y mantener.

### 2.3. Operador ternario

El operador ternario ofrece una sintaxis concisa para escribir declaraciones `if-else` simples:

```javascript
let resultado = (condición) ? valorSiVerdadero : valorSiFalso;
```

Por ejemplo:

```javascript
let edad = 20;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);
```

### 2.4. Truthy y Falsy en JavaScript

En JavaScript, los valores se evalúan como "truthy" o "falsy" en contextos booleanos. Esto puede ser útil en las condiciones de `if-else`:

```javascript
let nombre = "";
if (nombre) {
  console.log("El nombre está definido");
} else {
  console.log("El nombre está vacío o no definido");
}
```

Valores falsy en JavaScript:
- `false`
- `0`
- `""` (cadena vacía)
- `null`
- `undefined`
- `NaN`

Todos los demás valores son considerados truthy.

### 2.5. Operadores lógicos en condiciones

Los operadores lógicos `&&` (AND), `||` (OR) y `!` (NOT) son útiles para crear condiciones más complejas:

```javascript
let esDiaLaboral = true;
let tieneVacaciones = false;

if (esDiaLaboral && !tieneVacaciones) {
  console.log("A trabajar");
} else {
  console.log("A descansar");
}
```

## 3. Estructura de control switch

### 3.1. Sintaxis básica del switch

La estructura `switch` es útil cuando necesitamos comparar una variable con múltiples valores posibles:

```javascript
switch (expresión) {
  case valor1:
    // Código a ejecutar si expresión === valor1
    break;
  case valor2:
    // Código a ejecutar si expresión === valor2
    break;
  // ...
  default:
    // Código a ejecutar si ningún caso coincide
}
```

### 3.2. Casos múltiples

Podemos agrupar varios casos si queremos que ejecuten el mismo código:

```javascript
let diaSemana = 3;
let tipodia;

switch (diaSemana) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    tipodia = "Día laboral";
    break;
  case 6:
  case 7:
    tipodia = "Fin de semana";
    break;
  default:
    tipodia = "Día inválido";
}

console.log(tipodia);
```

### 3.3. El caso default

El caso `default` se ejecuta cuando ninguno de los casos anteriores coincide. Es una buena práctica incluirlo para manejar casos inesperados:

```javascript
let fruta = 'Manzana';
let mensaje;

switch (fruta) {
  case 'Naranja':
    mensaje = 'Las naranjas cuestan $0.59 el kilo.';
    break;
  case 'Manzana':
    mensaje = 'Las manzanas cuestan $0.32 el kilo.';
    break;
  case 'Plátano':
    mensaje = 'Los plátanos cuestan $0.48 el kilo.';
    break;
  default:
    mensaje = 'Lo siento, no tenemos ' + fruta + '.';
}

console.log(mensaje);
```

### 3.4. Switch con expresiones

A partir de ECMAScript 2015 (ES6), `switch` puede usar expresiones en los casos:

```javascript
let edad = 22;

switch (true) {
  case (edad < 18):
    console.log("Eres menor de edad");
    break;
  case (edad >= 18 && edad < 65):
    console.log("Eres un adulto");
    break;
  default:
    console.log("Eres un adulto mayor");
}
```

### 3.5. Limitaciones del switch

Es importante notar que `switch` usa comparación estricta (`===`). Esto significa que el tipo de dato también debe coincidir:

```javascript
let x = '1';
switch (x) {
  case 1:
    console.log("Uno");
    break;
  case '1':
    console.log("Cadena uno");
    break;
  default:
    console.log("Ninguno");
}
// Imprime: "Cadena uno"
```

## 4. Comparación entre if-else y switch

### 4.1. Escenarios de uso

- `if-else` es más flexible y puede manejar condiciones complejas.
- `switch` es ideal cuando se compara una sola variable contra valores conocidos.

### 4.2. Rendimiento

En general, `switch` puede ser más eficiente para muchos casos, especialmente en implementaciones optimizadas de JavaScript.

### 4.3. Legibilidad y mantenibilidad

`switch` puede ser más legible cuando se compara una variable contra muchos valores posibles. `if-else` es más claro para condiciones lógicas complejas.

## 5. Estructuras de control avanzadas

### 5.1. Operador de coalescencia nula (??)

Introducido en ECMAScript 2020, este operador es útil para proporcionar un valor predeterminado cuando una variable es `null` o `undefined`:

```javascript
let usuario = null;
let nombreUsuario = usuario ?? "Invitado";
console.log(nombreUsuario); // Imprime: "Invitado"
```

### 5.2. Encadenamiento opcional (?.)

También introducido en ECMAScript 2020, permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida:

```javascript
let usuario = {
  nombre: "Juan",
  direccion: {
    calle: "Calle Principal"
  }
};

let calle = usuario?.direccion?.calle;
console.log(calle); // Imprime: "Calle Principal"

let codigoPostal = usuario?.direccion?.codigoPostal;
console.log(codigoPostal); // Imprime: undefined
```

## 6. Mejores prácticas

### 6.1. Claridad sobre brevedad

Aunque el código conciso puede ser elegante, la claridad debe ser la prioridad. Por ejemplo, evita anidar múltiples operadores ternarios:

```javascript
// Evita esto
let mensaje = edad < 18 ? "Menor" : edad < 65 ? "Adulto" : "Adulto mayor";

// Prefiere esto
let mensaje;
if (edad < 18) {
  mensaje = "Menor";
} else if (edad < 65) {
  mensaje = "Adulto";
} else {
  mensaje = "Adulto mayor";
}
```

### 6.2. Evitar efectos secundarios en las condiciones

Las condiciones deben ser expresiones puras sin efectos secundarios:

```javascript
// Evita esto
if (array.pop() === 3) {
  // ...
}

// Prefiere esto
let ultimoElemento = array.pop();
if (ultimoElemento === 3) {
  // ...
}
```

### 6.3. Uso de constantes para mejorar la legibilidad

Utiliza constantes con nombres descriptivos para valores que se usan en condiciones:

```javascript
const EDAD_MINIMA = 18;
const EDAD_JUBILACION = 65;

if (edad >= EDAD_MINIMA && edad < EDAD_JUBILACION) {
  console.log("En edad laboral");
}
```

### 6.4. Simplificación de condiciones complejas

Si tienes condiciones muy complejas, considera extraerlas a funciones separadas:

```javascript
function esEdadLaboral(edad) {
  return edad >= EDAD_MINIMA && edad < EDAD_JUBILACION;
}

if (esEdadLaboral(usuario.edad)) {
  console.log("En edad laboral");
}
```

## 7. Patrones de diseño relacionados

### 7.1. Patrón Estrategia

Este patrón puede ser una alternativa a largas cadenas de if-else:

```javascript
const estrategias = {
  A: () => { console.log("Estrategia A"); },
  B: () => { console.log("Estrategia B"); },
  C: () => { console.log("Estrategia C"); }
};

function ejecutarEstrategia(tipo) {
  return estrategias[tipo]();
}

ejecutarEstrategia('B'); // Imprime: "Estrategia B"
```

### 7.2. Patrón Estado

Similar al patrón Estrategia, pero enfocado en cambiar el comportamiento de un objeto cuando su estado interno cambia:

```javascript
class TrafficLight {
  constructor() {
    this.states = {
      green: { next: 'yellow', action: () => console.log('Go!') },
      yellow: { next: 'red', action: () => console.log('Slow down!') },
      red: { next: 'green', action: () => console.log('Stop!') }
    };
    this.currentState = this.states.red;
  }

  change() {
    this.currentState.action();
    this.currentState = this.states[this.currentState.next];
  }
}

const light = new TrafficLight();
light.change(); // Imprime: "Stop!"
light.change(); // Imprime: "Go!"
```

### 7.3. Objeto de configuración

En lugar de múltiples parámetros con valores por defecto, usa un objeto de configuración:

```javascript
function crearUsuario({ nombre = 'Anónimo', edad = 0, esAdmin = false } = {}) {
  return { nombre, edad, esAdmin };
}

let usuario1 = crearUsuario({ nombre: 'Ana', edad: 30 });
let usuario2 = crearUsuario({ esAdmin: true });
```

## 8. Depuración de estructuras de control

### 8.1. Uso de console.log para depuración

Insertar `console.log` en puntos clave puede ayudar a entender el flujo de tu código:

```javascript
if (condicion1) {
  console.log('Condición 1 es verdadera');
  // más código...
} else if (condicion2) {
  console.log('Condición 2 es verdadera');
  // más código...
} else {
  console.log('Ninguna condición es verdadera');
  // más código...
}
```

### 8.2. Herramientas de depuración del navegador

Aprende a usar los puntos de interrupción (breakpoints) en las herramientas de desarrollo de tu navegador. Puedes pausar la ejecución y examinar variables en tiempo real.

### 8.3. Errores comunes y cómo evitarlos

- Comparación de igualdad: Usa `===` para comparación estricta en lugar de `==` para evitar conversiones de tipo inesperadas.
- Confundir asignación con comparación: Asegúrate de usar `==` o `===` para comparar, no `=` (que es para asignación).
- Condiciones siempre verdaderas o falsas: Revisa tus condiciones para asegurarte de que puedan cambiar.
- Uso incorrecto de paréntesis en condiciones complejas: Usa paréntesis para clarificar el orden de evaluación en condiciones complejas.

Ejemplo de errores comunes y sus correcciones:

```javascript
// Incorrecto
if (x = 5) { ... }  // Asignación en lugar de comparación

// Correcto
if (x === 5) { ... }

// Incorrecto
if (someFunction()) {  // Si someFunction() devuelve un objeto vacío, esto será siempre verdadero
  ...
}

// Correcto
if (someFunction() !== null) {
  ...
}

// Incorrecto (puede llevar a resultados inesperados)
if (a == 1 && b == 2 || c == 3) { ... }

// Correcto (clarifica el orden de evaluación)
if ((a === 1 && b === 2) || c === 3) { ... }
```

## 9. Rendimiento y optimización

### 9.1. Evaluación en cortocircuito

JavaScript utiliza la evaluación en cortocircuito para los operadores lógicos `&&` y `||`. Esto significa que si el resultado de la expresión se puede determinar por el primer operando, el segundo no se evalúa.

```javascript
// El segundo operando solo se evalúa si el primero es verdadero
(condicion1 && condicion2)

// El segundo operando solo se evalúa si el primero es falso
(condicion1 || condicion2)
```

Puedes usar esto para optimizar tu código:

```javascript
function saludar(nombre) {
  nombre && console.log(`Hola, ${nombre}!`);
}

saludar("Ana");  // Imprime: Hola, Ana!
saludar();       // No imprime nada
```

### 9.2. Optimización de switch vs objeto literal

Para muchos casos, usar un objeto literal puede ser más eficiente que un switch:

```javascript
// Usando switch
function getDiaSemana(numero) {
  switch(numero) {
    case 1: return "Lunes";
    case 2: return "Martes";
    case 3: return "Miércoles";
    case 4: return "Jueves";
    case 5: return "Viernes";
    case 6: return "Sábado";
    case 7: return "Domingo";
    default: return "Número inválido";
  }
}

// Usando objeto literal
const diasSemana = {
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
  7: "Domingo"
};

function getDiaSemana(numero) {
  return diasSemana[numero] || "Número inválido";
}
```

El enfoque del objeto literal puede ser más rápido, especialmente para un gran número de casos.

### 9.3. Medición del rendimiento

Para medir el rendimiento de diferentes enfoques, puedes usar `console.time()` y `console.timeEnd()`:

```javascript
console.time('switch');
for(let i = 0; i < 1000000; i++) {
  getDiaSemanaSwich(Math.floor(Math.random() * 7) + 1);
}
console.timeEnd('switch');

console.time('objeto');
for(let i = 0; i < 1000000; i++) {
  getDiaSemanaObjeto(Math.floor(Math.random() * 7) + 1);
}
console.timeEnd('objeto');
```

Recuerda que la optimización prematura es la raíz de todos los males. Asegúrate de que tu código sea correcto y legible antes de preocuparte por optimizaciones de rendimiento.

## 10. Conclusión

Las estructuras de control `if-else` y `switch` son fundamentales en JavaScript y en la programación en general. Dominando estas estructuras, junto con las técnicas y patrones avanzados que hemos discutido, podrás escribir código más eficiente, legible y mantenible.

Recuerda que la elección entre `if-else` y `switch` (o incluso enfoques alternativos como objetos literales o el patrón estrategia) dependerá del contexto específico de tu problema. No existe una solución única que sea la mejor para todos los casos.

A medida que continúes desarrollando tus habilidades en JavaScript, te encontrarás utilizando estas estructuras de control de maneras cada vez más sofisticadas. La práctica constante y la revisión de código (tanto tuyo como de otros) te ayudarán a desarrollar un instinto para elegir la estructura más apropiada en cada situación.

Finalmente, mantente actualizado con las nuevas características de JavaScript. Como hemos visto con el operador de coalescencia nula (??) y el encadenamiento opcional (?.), el lenguaje continúa evolucionando y ofreciendo nuevas herramientas para hacer nuestro código más expresivo y robusto.

¡Feliz codificación!