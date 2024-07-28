---
title: 'Tipos de datos'
technology: 'JavaScript'
description: 'Una guía completa sobre los tipos de datos fundamentales en JavaScript'
pubDate: 'Jul 20 2024'
heroImage: '/JavaScript.jpg'
---
JavaScript es un lenguaje de programación dinámico y flexible, conocido por su versatilidad en el desarrollo web. Una de las características fundamentales que todo desarrollador debe dominar son los tipos de datos. En este artículo, exploraremos en detalle los diferentes tipos de datos en JavaScript y cómo trabajar con ellos.

## Tipos de Datos Primitivos
JavaScript tiene seis tipos de datos primitivos:

### 1. Number
El tipo `Number` representa tanto números enteros como de punto flotante.
```javascript
let entero = 42;
let decimal = 3.14;
```
JavaScript también incluye valores especiales como `Infinity`, `-Infinity`, y `NaN` (Not a Number).

### 2. String
Las cadenas de texto se representan con el tipo `String.` Pueden estar encerradas en comillas simples, dobles o backticks.
```javascript
let nombre = 'Alice';
let saludo = "Hola, mundo!";
let plantilla = `Bienvenido, ${nombre}`;
```

### 3. Boolean
El tipo `Boolean` tiene solo dos valores posibles: `true` o `false`.
```javascript
let estaLloviendo = true;
let haceSol = false;
```

### 4. Undefined
`undefined` representa una variable que ha sido declarada pero no inicializada.

```javascript
let variableSinDefinir;
console.log(variableSinDefinir); // Imprime: undefined
```
### 5. Null
`null` es un valor especial que representa "nada" o "vacío" de manera intencional.

```javascript
let valorNulo = null;
```

### 6. Symbol (ES6)
Introducido en ES6, `Symbol` crea identificadores únicos.

```javascript
const simbolo = Symbol('descripcion');}
```

## Tipo de Dato Objeto
Además de los tipos primitivos, JavaScript tiene un tipo de dato complejo: Object.

### Object
Los objetos son colecciones de pares clave-valor y pueden contener propiedades y métodos.

```javascript
let persona = {
  nombre: "Bob",
  edad: 30,
  saludar: function() {
    console.log("Hola!");
  }
};
```
Arrays, funciones, y expresiones regulares son tipos especiales de objetos en JavaScript.
```javascript
let numeros = [1, 2, 3]; // Array
let funcion = function() {}; // Función
let regex = /abc/; // Expresión regular
```

## Verificación de Tipos
Para verificar el tipo de una variable, puedes usar el operador `typeof`:

```javascript
console.log(typeof 42); // "number"
console.log(typeof "hola"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (esto es considerado un error en JavaScript)
console.log(typeof {}); // "object"
```

## Conversión de Tipos
JavaScript permite la conversión entre diferentes tipos de datos:
```javascript
let num = Number("42"); // Convierte string a number
let str = String(42); // Convierte number a string
let bool = Boolean(1); // Convierte a boolean (true para valores "truthy", false para "falsy")
```

### Conclusión
Comprender los tipos de datos en JavaScript es fundamental para escribir código robusto y eficiente. La naturaleza dinámica de JavaScript ofrece gran flexibilidad, pero también requiere que los desarrolladores sean conscientes de cómo se comportan los diferentes tipos de datos en diversas operaciones.

Dominar los tipos de datos te permitirá:

- Evitar errores comunes de tipo
- Optimizar el rendimiento de tu código
- Escribir funciones más predecibles y fáciles de depurar
- Aprovechar al máximo las características del lenguaje

**Fuentes**: <a href="https://lenguajejs.com/javascript/tipos/que-son/" target="_blank">Lenguaje JavaScript</a>