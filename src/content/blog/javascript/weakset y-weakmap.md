---
title: 'WeakSet y WeakMap en JavaScript: Estructuras de Datos Débiles'
technology: 'JavaScript'
description: 'Una exploración detallada del tipo de dato Number en JavaScript'
pubDate: 'Aug 18 2024'
heroImage: '/JavaScript.jpg'
---
## Índice
- [Introducción](#introducción)
- [WeakSet](#weakset)
  - [Características de WeakSet](#características-de-weakset)
  - [Creación y Uso de WeakSet](#creación-y-uso-de-weakset)
  - [Métodos de WeakSet](#métodos-de-weakset)
  - [Casos de Uso de WeakSet](#casos-de-uso-de-weakset)
- [WeakMap](#weakmap)
  - [Características de WeakMap](#características-de-weakmap)
  - [Creación y Uso de WeakMap](#creación-y-uso-de-weakmap)
  - [Métodos de WeakMap](#métodos-de-weakmap)
  - [Casos de Uso de WeakMap](#casos-de-uso-de-weakmap)
- [Comparación entre WeakSet/WeakMap y Set/Map](#comparación-entre-weaksetweakmap-y-setmap)
- [Ejemplos Prácticos](#ejemplos-prácticos)
- [Consideraciones de Rendimiento](#consideraciones-de-rendimiento)
- [Conclusión](#conclusión)

## Introducción

WeakSet y WeakMap son estructuras de datos introducidas en ECMAScript 2015 (ES6) que complementan a Set y Map, respectivamente. La principal diferencia es que WeakSet y WeakMap mantienen referencias "débiles" a sus elementos, lo que tiene implicaciones importantes en cuanto a la gestión de memoria y el ciclo de vida de los objetos.

## WeakSet

### Características de WeakSet
- Solo puede contener objetos (no valores primitivos).

- Las referencias a los objetos en un WeakSet son débiles, lo que significa que no previenen la recolección de basura si no hay otras referencias al objeto.

- No es iterable y no tiene un método `size()`.

- No se puede borrar todo el contenido de una vez (no tiene método `clear()`).

### Creación y Uso de WeakSet
```javascript
let weakSet = new WeakSet();

let obj1 = {};
let obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // false
```

### Métodos de WeakSet
- `add(value)`: Añade un nuevo objeto al WeakSet.

- `delete(value)`: Elimina un objeto específico del WeakSet.

- `has(value)`: Comprueba si un objeto está en el WeakSet.

### Casos de Uso de WeakSet
1. Marcar objetos sin modificarlos:
```javascript
let visitedSet = new WeakSet();

function visitObject(obj) {
    if (visitedSet.has(obj)) {
        console.log('Objeto ya visitado');
    } else {
        visitedSet.add(obj);
        console.log('Visitando objeto por primera vez');
    }
}

let obj = {};
visitObject(obj); // Visitando objeto por primera vez
visitObject(obj); // Objeto ya visitado
```

2. Prevenir duplicados en una colección de objetos:
```javascript
let uniqueObjects = new WeakSet();

function addUniqueObject(collection, obj) {
    if (!uniqueObjects.has(obj)) {
        uniqueObjects.add(obj);
        collection.push(obj);
    }
}

let collection = [];
let obj1 = {id: 1};
let obj2 = {id: 2};

addUniqueObject(collection, obj1);
addUniqueObject(collection, obj2);
addUniqueObject(collection, obj1); // No se añade, ya existe

console.log(collection.length); // 2
```

## WeakMap

### Características de WeakMap
- Las claves deben ser objetos (no valores primitivos).

- Las referencias a las claves en un WeakMap son débiles.

- No es iterable y no tiene métodos `size()` o `clear()`.

- Los valores pueden ser de cualquier tipo.

### Creación y Uso de WeakMap
```javascript
let weakMap = new WeakMap();

let key1 = {};
let key2 = {};

weakMap.set(key1, 'valor1');
weakMap.set(key2, 'valor2');

console.log(weakMap.get(key1)); // 'valor1'
console.log(weakMap.has(key2)); // true

weakMap.delete(key1);
console.log(weakMap.has(key1)); // false
```

### Métodos de WeakMap
- `set(key, value)`: Establece un par clave-valor en el WeakMap.

- `get(key)`: Obtiene el valor asociado a una clave.

- `delete(key)`: Elimina un par clave-valor específico.

- `has(key)`: Comprueba si una clave existe en el WeakMap.

### Casos de Uso de WeakMap
1. Almacenamiento de datos privados:
```javascript
let privateData = new WeakMap();

class User {
    constructor(name, age) {
        privateData.set(this, { name, age });
    }

    getName() {
        return privateData.get(this).name;
    }

    getAge() {
        return privateData.get(this).age;
    }
}

let user = new User('Alice', 30);
console.log(user.getName()); // 'Alice'
console.log(user.getAge());  // 30
```

2. Caché de objetos con limpieza automática:
```javascript
let cache = new WeakMap();

function processObject(obj) {
    if (cache.has(obj)) {
        return cache.get(obj);
    } else {
        let result = /* cálculo costoso */;
        cache.set(obj, result);
        return result;
    }
}

let obj1 = {/* ... */};
processObject(obj1); // Calcula y cachea el resultado
processObject(obj1); // Usa el resultado cacheado

// Si obj1 se vuelve inalcanzable, será eliminado del caché automáticamente
```

## Comparación entre WeakSet/WeakMap y Set/Map
1. Gestión de memoria:
   - WeakSet/WeakMap permiten que los objetos sean recolectados por el garbage collector si no hay otras referencias.
   - Set/Map mantienen referencias fuertes, previniendo la recolección de basura.

2. Iterabilidad:
   - WeakSet/WeakMap no son iterables.
   - Set/Map son iterables y tienen métodos como `forEach()`.

3. Métodos disponibles:
   - WeakSet/WeakMap tienen menos métodos (no tienen `clear()`, `size()`, etc.).
   - Set/Map tienen más métodos y propiedades.

4. Tipos de claves/valores:
   - WeakSet solo acepta objetos como valores.
   - WeakMap solo acepta objetos como claves.
   - Set/Map aceptan cualquier tipo de valor como clave o valor.

## Ejemplos Prácticos
1. Sistema de caché con limpieza automática:
```javascript
let cache = new WeakMap();

function getCachedData(key, fetchData) {
    if (cache.has(key)) {
        return cache.get(key);
    }
    
    let data = fetchData();
    cache.set(key, data);
    return data;
}

let user = { id: 1 };
let userData = getCachedData(user, () => fetchUserDataFromServer(user.id));

// Cuando 'user' ya no es referenciado, los datos se limpiarán automáticamente del caché
```

2. Sistema de eventos con limpieza automática de listeners:
```javascript
let listenerMap = new WeakMap();

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = new Set();
        }
        this.events[event].add(listener);
        
        if (!listenerMap.has(listener)) {
            listenerMap.set(listener, new Set());
        }
        listenerMap.get(listener).add(this);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            for (let listener of this.events[event]) {
                listener.call(this, ...args);
            }
        }
    }

    removeListener(event, listener) {
        if (this.events[event]) {
            this.events[event].delete(listener);
        }
        if (listenerMap.has(listener)) {
            listenerMap.get(listener).delete(this);
        }
    }
}

let emitter = new EventEmitter();
let listener = () => console.log('Evento recibido');

emitter.on('myEvent', listener);
emitter.emit('myEvent');

// Si 'listener' se vuelve inalcanzable, se limpiará automáticamente de listenerMap
```

## Consideraciones de Rendimiento
- WeakSet y WeakMap son útiles para prevenir fugas de memoria en ciertas situaciones.

- No son adecuados para casos donde necesites iterar sobre los elementos o conocer el tamaño de la colección.

- El rendimiento de las operaciones básicas (add, delete, has) es similar a Set y Map.

- La recolección de basura de elementos débilmente referenciados no es inmediata y depende del motor de JavaScript.

## Conclusión
WeakSet y WeakMap son estructuras de datos especializadas en JavaScript que ofrecen una forma única de manejar colecciones de objetos con referencias débiles. Son particularmente útiles en escenarios donde se necesita asociar datos a objetos sin prevenir su recolección de basura, como en sistemas de caché, gestión de eventos, o almacenamiento de datos privados.

Aunque tienen limitaciones en comparación con Set y Map, WeakSet y WeakMap proporcionan soluciones elegantes a problemas específicos de gestión de memoria y ciclo de vida de objetos. Comprender cuándo y cómo usar estas estructuras puede llevar a un código más eficiente y a una mejor gestión de recursos en aplicaciones JavaScript complejas.