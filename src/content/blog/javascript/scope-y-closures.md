---
title: 'Scope y Closures en JavaScript'
technology: 'JavaScript'
description: 'Explora scope y closures en JavaScript: conceptos clave para código eficiente y avanzado. Aprende sobre diferentes tipos de scope y cómo los closures potencian tus funciones. Mejora tu habilidad para escribir JavaScript más limpio y efectivo.'
pubDate: 'Aug 17 2024'
heroImage: '/JavaScript.png'
---
## Índice
- [Introducción](#introducción)
- [Scope en JavaScript](#scope-en-javascript)
   [Scope Global](#scope-global)
  - [Scope Local](#scope-local)
  - [Scope de Bloque](#scope-de-bloque)
- [Closures en JavaScript](#closures-en-javascript)
  - [¿Qué es un Closure?](#qué-es-un-closure)
  - [Usos Prácticos de Closures](#usos-prácticos-de-closures)
- [Conclusión](#conclusión)

## Introducción
En el mundo de JavaScript, entender los conceptos de scope y closures es fundamental para escribir código eficiente y evitar errores comunes. En este artículo, exploraremos estos conceptos en profundidad y veremos cómo se aplican en situaciones prácticas.

## Scope en JavaScript
El scope en JavaScript se refiere al contexto actual de ejecución. Determina la accesibilidad de variables y funciones en diferentes partes del código.

### Scope Global
Las variables declaradas fuera de cualquier función tienen scope global y pueden ser accedidas desde cualquier parte del código.

Ejemplo:

```javascript
let globalVar = "Soy global";

function mostrarGlobal() {
    console.log(globalVar); // Puede acceder a globalVar
}

mostrarGlobal(); // Imprime: Soy global
```

### Scope Local
Las variables declaradas dentro de una función tienen scope local y solo son accesibles dentro de esa función.

Ejemplo:

```javascript
function funcionLocal() {
    let localVar = "Soy local";
    console.log(localVar); // Puede acceder a localVar
}

funcionLocal(); // Imprime: Soy local
console.log(localVar); // Error: localVar is not defined
```

### Scope de Bloque
Introducido en ES6, las variables declaradas con `let` y `const` tienen scope de bloque, lo que significa que solo son accesibles dentro del bloque en el que se declaran.

Ejemplo:
```javascript
if (true) {
    let bloqueVar = "Soy de bloque";
    console.log(bloqueVar); // Imprime: Soy de bloque
}

console.log(bloqueVar); // Error: bloqueVar is not defined
```

## Closures en JavaScript

### ¿Qué es un Closure?
Un closure es una función que tiene acceso a variables en su scope exterior, incluso después de que la función externa haya retornado.

Ejemplo:
```javascript
function crearContador() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
```

En este ejemplo, `contador` es un closure que "recuerda" el valor de `count`, incluso después de que `crearContador` haya terminado de ejecutarse.

### Usos Prácticos de Closures

1. Encapsulación y privacidad de datos:
```javascript
function crearBanco() {
    let saldo = 0;
    return {
        depositar: function(cantidad) {
            saldo += cantidad;
            return saldo;
        },
        retirar: function(cantidad) {
            if (cantidad <= saldo) {
                saldo -= cantidad;
                return saldo;
            } else {
                return "Fondos insuficientes";
            }
        },
        consultarSaldo: function() {
            return saldo;
        }
    }
}

const miCuenta = crearBanco();
console.log(miCuenta.depositar(100)); // 100
console.log(miCuenta.retirar(30)); // 70
console.log(miCuenta.consultarSaldo()); // 70
```

2. Creación de funciones de fábrica:
```javascript
function crearSaludo(saludo) {
    return function(nombre) {
        return `${saludo}, ${nombre}!`;
    }
}

const saludarFormal = crearSaludo("Buenas tardes");
const saludarInformal = crearSaludo("Hola");

console.log(saludarFormal("María")); // Buenas tardes, María!
console.log(saludarInformal("Juan")); // Hola, Juan!
```

## Conclusión
Comprender el scope y los closures en JavaScript es esencial para escribir código más limpio, eficiente y seguro. El scope nos ayuda a organizar nuestras variables y funciones, mientras que los closures nos permiten crear funciones más poderosas y flexibles, con acceso a datos privados. Dominar estos conceptos te ayudará a ser un mejor desarrollador de JavaScript y a resolver problemas de manera más efectiva.