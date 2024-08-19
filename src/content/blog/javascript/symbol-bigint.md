---
title: 'Symbol y BigInt en JavaScript'
technology: 'JavaScript'
description: 'Explora cómo utilizar Symbol para crear identificadores únicos y BigInt para manejar números enteros extremadamente grandes en JavaScript.'
pubDate: 'Aug 19 2024'
heroImage: '/JavaScript.jpg'
---
## Índice
- [Introducción a Symbol](#introducción-a-symbol)
- [Creación de un Symbol](#creación-de-un-symbol)
- [Uso de Symbol en propiedades de objetos](#uso-de-symbol-en-propiedades-de-objetos)
- [Introducción a BigInt](#introducción-a-bigint)
- [Creación de un BigInt](#creación-de-un-bigint)
- [Operaciones con BigInt](#operaciones-con-bigint)
- [Conclusión](#conclusión)

## Introducción a Symbol
En JavaScript, un `Symbol` es un tipo de dato primitivo que fue introducido en ECMAScript 2015 (ES6). Los `Symbols` son únicos e inmutables, lo que los hace útiles para identificar propiedades de objetos sin riesgo de colisión con otras propiedades.

## Creación de un Symbol

Para crear un `Symbol`, se utiliza la función `Symbol()`. Cada llamada a `Symbol()` genera un valor único de tipo `Symbol`.

```javascript
const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1 === symbol2); // false
```
También se puede crear un Symbol con una descripción opcional, que es útil principalmente para propósitos de depuración.

```javascript
const symbolWithDesc = Symbol("mySymbol");
console.log(symbolWithDesc.description); // "mySymbol"
```

## Uso de Symbol en propiedades de objetos
Los Symbols se pueden usar como claves para propiedades de objetos, permitiendo definir propiedades que no colisionarán con otras propiedades del objeto.

```javascript
const mySymbol = Symbol("uniqueKey");
const myObject = {
    [mySymbol]: "Value associated with mySymbol"
};

console.log(myObject[mySymbol]); // "Value associated with mySymbol"
```
A diferencia de las propiedades definidas con cadenas, las propiedades definidas con Symbols no se enumeran en un bucle for...in ni en métodos como Object.keys(), lo que puede ser útil para definir propiedades "ocultas".

## Introducción a BigInt
El tipo `BigInt` fue introducido en ECMAScript 2020 (ES11) y permite representar enteros más grandes que el límite que el tipo Number puede manejar en JavaScript, que es 2^53 - 1 para números positivos y -(2^53 - 1) para números negativos.

## Creación de un BigInt
Un BigInt se puede crear añadiendo la letra n al final de un número entero, o utilizando la función BigInt().

```javascript
const bigInt1 = 1234567890123456789012345678901234567890n;
const bigInt2 = BigInt("1234567890123456789012345678901234567890");

console.log(bigInt1 === bigInt2); // true
```

## Operaciones con BigInt
Los BigInt soportan las mismas operaciones que los números normales (+, -, *, /, etc.), con la excepción de que no se pueden mezclar BigInt y Number en operaciones aritméticas.

```javascript
const bigIntSum = 100000000000000000000000000000n + 100000000000000000000000000000n;
console.log(bigIntSum); // 200000000000000000000000000000n

const bigIntDivide = 10n / 3n;
console.log(bigIntDivide); // 3n (Los BigInt siempre redondean hacia cero)
```

## Conclusión
`Symbol` y `BigInt` son características poderosas de JavaScript que permiten a los desarrolladores manejar identificadores únicos y números enteros extremadamente grandes, respectivamente. El uso adecuado de estas herramientas puede llevar a un código más robusto y menos propenso a errores en aplicaciones complejas.