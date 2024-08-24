---
title: 'Polimorfismo en JavaScript: Una Breve Introducción'
technology: 'JavaScript'
description: 'Una exploración detallada de la recursividad en JavaScript, incluyendo su definición, ejemplos prácticos y consideraciones de uso'
pubDate: 'Aug 24 2024'
heroImage: '/JavaScript.jpg'
---

## Índice
1. [¿Qué es el polimorfismo?](#que-es-el-polimorfismo)
2. [Tipos de polimorfismo en JavaScript](#tipos-de-polimorfismo)
3. [Ejemplos prácticos](#ejemplos-practicos)
4. [Conclusión](#conclusion)

## ¿Qué es el polimorfismo?
El polimorfismo es un concepto fundamental en la programación orientada a objetos que permite a objetos de diferentes tipos responder al mismo método o propiedad. En JavaScript, esto se traduce en la capacidad de un objeto para tomar muchas formas y comportarse de manera flexible.

## Tipos de polimorfismo
En JavaScript, podemos identificar principalmente dos tipos de polimorfismo:

1. **Polimorfismo de subtipos**: Se logra a través de la herencia y permite que objetos de diferentes clases sean tratados como instancias de una clase base común.

2. **Polimorfismo ad-hoc**: Se implementa mediante la sobrecarga de métodos, aunque en JavaScript esto se simula ya que no soporta sobrecarga nativa.

## Ejemplos prácticos
Veamos un ejemplo simple de polimorfismo de subtipos:

```javascript
class Animal {
  speak() {
    return "El animal hace un sonido";
  }
}

class Perro extends Animal {
  speak() {
    return "El perro ladra";
  }
}

class Gato extends Animal {
  speak() {
    return "El gato maulla";
  }
}

const animal = new Animal();
const perro = new Perro();
const gato = new Gato();

console.log(animal.speak()); // "El animal hace un sonido"
console.log(perro.speak());  // "El perro ladra"
console.log(gato.speak());   // "El gato maulla"
```

## Conclusión
El polimorfismo en JavaScript nos permite escribir código más flexible y reutilizable. Aunque JavaScript no es un lenguaje estrictamente orientado a objetos, podemos aprovechar estos conceptos para crear estructuras de código más robustas y mantenibles.