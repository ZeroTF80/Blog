---
title: 'Numbers en JavaScript: Más allá de los enteros'
technology: 'JavaScript'
description: 'Una exploración detallada del tipo de dato Number en JavaScript'
pubDate: 'Jul 21 2024'
heroImage: '/JavaScript.jpg'
---
En JavaScript, el tipo de dato Number abarca tanto enteros como números de punto flotante. Vamos a sumergirnos en las características y peculiaridades de los números en JavaScript.

## Representación de Números
JavaScript utiliza el estándar IEEE 754 para representar todos los números como valores de punto flotante de 64 bits. Esto significa que:
```javascript
console.log(3 === 3.0); // true
```

## Operaciones Básicas
JavaScript soporta las operaciones aritméticas estándar:
```javascript
let suma = 5 + 3;      // 8
let resta = 10 - 4;    // 6
let multiplicacion = 2 * 3;  // 6
let division = 15 / 3; // 5
let modulo = 17 % 5;   // 2
```

## Números Especiales
JavaScript tiene algunos valores numéricos especiales:
```javascript
console.log(Infinity);  // Infinito
console.log(-Infinity); // Infinito negativo
console.log(NaN);       // Not a Number
```

## Métodos y Propiedades Útiles
El objeto Number proporciona varios métodos útiles:
```javascript
let num = 123.456;

console.log(num.toFixed(2));      // "123.46"
console.log(num.toPrecision(4));  // "123.5"
console.log(Number.isInteger(num)); // false
```

### Conversión de Tipos
Puedes convertir strings a números de varias formas:
```javascript
let str = "42";
console.log(Number(str));     // 42
console.log(parseInt(str));   // 42
console.log(parseFloat("3.14")); // 3.14
```

### Precisión y Límites
Debido a cómo JavaScript representa los números, hay que tener cuidado con la precisión en cálculos con decimales:
```javascript
console.log(0.1 + 0.2);        // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```
Para manejar cálculos precisos con decimales, considera usar bibliotecas como decimal.js.

## BigInt
Para números enteros mayores que 2^53 - 1, JavaScript proporciona el tipo BigInt:
```javascript
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"
Math Object
```
JavaScript proporciona el objeto Math para operaciones matemáticas más avanzadas:
```javascript
console.log(Math.PI);        // 3.141592653589793
console.log(Math.sqrt(16));  // 4
console.log(Math.random());  // Número aleatorio entre 0 y 1
```

## Conclusión
Los números en JavaScript son versátiles y poderosos, pero también tienen sus peculiaridades. Entender cómo JavaScript maneja los números es crucial para evitar errores sutiles en cálculos y comparaciones. Desde operaciones básicas hasta el manejo de grandes números con BigInt, JavaScript ofrece una amplia gama de herramientas para trabajar con datos numéricos.

Recuerda siempre considerar la precisión en tus cálculos, especialmente cuando trabajas con números decimales, y no dudes en utilizar bibliotecas especializadas para cálculos financieros o científicos que requieran alta precisión.