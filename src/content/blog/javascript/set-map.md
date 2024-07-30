---
title: 'Set y Map en JavaScript'
technology: 'JavaScript'
description: 'Una guía completa sobre Set y Map en JavaScript: creación, uso y métodos importantes.'
pubDate: 'Jul 23 2024'
heroImage: '/javascript.jpg'
---
Set y Map son estructuras de datos introducidas en ECMAScript 2015 (ES6) que ofrecen nuevas formas de manejar colecciones de datos en JavaScript.

## Set
Un Set es una colección de valores únicos, donde cada valor puede ocurrir solo una vez.

### Creación de un Set
```javascript
let miSet = new Set();

// O con valores iniciales
let numerosUnicos = new Set([1, 2, 3, 4, 4, 5]); // Set(5) {1, 2, 3, 4, 5}
```

### Métodos principales de Set

- `add(valor)`: Añade un nuevo elemento al Set.
- `delete(valor)`: Elimina un elemento específico.
- `has(valor)`: Comprueba si un valor existe en el Set.
- `clear()`: Elimina todos los elementos del Set.
- `size`: Propiedad que devuelve el número de elementos.
```javascript
miSet.add(1);
miSet.add(2);
miSet.add(2); // Ignorado, ya existe

console.log(miSet.has(1)); // true
console.log(miSet.size); // 2

miSet.delete(1);
```

### Iteración sobre un Set
```javascript
miSet.forEach(valor => console.log(valor));

// O usando for...of
for (let valor of miSet) {
    console.log(valor);
}
```
### Map
Un Map es una colección de pares clave-valor donde las claves pueden ser de cualquier tipo.

Creación de un Map
```javascript
let miMap = new Map();

// O con pares clave-valor iniciales
let frutas = new Map([
    ['manzana', 500],
    ['banana', 300],
    ['naranja', 200]
]);
```

### Métodos principales de Map
- `set(clave, valor)`: Añade o actualiza un elemento.
- `get(clave)`: Obtiene el valor asociado a una clave.
- `delete(clave)`: Elimina un elemento por su clave.
- `has(clave)`: Comprueba si existe una clave.
- `clear()`: Elimina todos los elementos.
- `size`: Propiedad que devuelve el número de elementos.
```javascript
miMap.set('nombre', 'Juan');
miMap.set('edad', 30);

console.log(miMap.get('nombre')); // 'Juan'
console.log(miMap.has('edad')); // true
console.log(miMap.size); // 2

miMap.delete('edad');
```

Iteración sobre un Map
```javascript
miMap.forEach((valor, clave) => {
    console.log(`${clave}: ${valor}`);
});

// O usando for...of
for (let [clave, valor] of miMap) {
    console.log(`${clave}: ${valor}`);
}
```

## Diferencias clave entre Object y Map
1. Un Object tiene un prototipo, por lo que hay claves por defecto en el mapa. Esto no ocurre con Map.
2. Las claves de un Object son Strings y Symbols, mientras que en Map pueden ser de cualquier tipo.
3. Puedes obtener el tamaño de un Map fácilmente con la propiedad size.

### Casos de uso
- Use Set cuando necesite almacenar valores únicos de cualquier tipo.
- Use Map cuando necesite mapear claves a valores y mantener el orden de inserción.
- Prefiera Map sobre Object cuando las claves sean desconocidas

## Conversiones entre Array, Set y Map
### De Array a Set y viceversa
```javascript
// De Array a Set
let array = [1, 2, 3, 3, 4, 5];
let set = new Set(array);
console.log(set); // Set(5) {1, 2, 3, 4, 5}

// De Set a Array
let arrayDeNuevo = [...set];
console.log(arrayDeNuevo); // [1, 2, 3, 4, 5]
```

### De Object a Map y viceversa
```
// De Object a Map
let obj = { nombre: "Ana", edad: 30 };
let map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"nombre" => "Ana", "edad" => 30}

// De Map a Object
let objDeNuevo = Object.fromEntries(map);
console.log(objDeNuevo); // {nombre: "Ana", edad: 30}
```
## WeakSet y WeakMap
JavaScript también proporciona WeakSet y WeakMap, que son versiones "débiles" de Set y Map.

### WeakSet
- Solo puede contener objetos.
- Las referencias a los objetos en el set son débiles, lo que significa que si no hay otras referencias al objeto, puede ser recolectado por el garbage collector.
- No es iterable y no tiene un método `size()`.
```javascript
let weakSet = new WeakSet();
let obj = {};

weakSet.add(obj);
console.log(weakSet.has(obj)); // true

obj = null; // Ahora el objeto puede ser recolectado por el garbage collector
```

### WeakMap
- Las claves deben ser objetos.
- Las referencias a las claves son débiles.
- No es iterable y no tiene un método size().
```javascript
let weakMap = new WeakMap();
let key = {};

weakMap.set(key, "valor");
console.log(weakMap.get(key)); // "valor"

key = null; // Ahora la entrada puede ser recolectada por el garbage collector
```

## Casos de uso avanzados
### Eliminación de duplicados con Set
```javascript
let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]
```

### Uso de Map para caché
```javascript
let cache = new Map();

function expensiveOperation(arg) {
    if (cache.has(arg)) {
        console.log("Usando caché");
        return cache.get(arg);
    }
    
    console.log("Calculando...");
    let result = /* operación costosa */;
    cache.set(arg, result);
    return result;
}
```

### Implementación de un grafo con Map
```javascript
let graph = new Map();

// Añadir nodos y aristas
graph.set('A', ['B', 'C']);
graph.set('B', ['A', 'D']);
graph.set('C', ['A', 'D']);
graph.set('D', ['B', 'C']);

// Función para obtener vecinos
function getNeighbors(node) {
    return graph.get(node) || [];
}

console.log(getNeighbors('A')); // ['B', 'C']
```


### Rendimiento
En general, las operaciones en Set y Map tienen un rendimiento de O(1) para inserción, eliminación y búsqueda, lo que las hace muy eficientes para grandes conjuntos de datos.

### Conclusión
Set y Map son estructuras de datos poderosas en JavaScript que ofrecen nuevas formas de manejar colecciones. Set es ideal para almacenar valores únicos, mientras que Map es perfecto para asociaciones clave-valor donde las claves pueden ser de cualquier tipo. Estas son las ventajas clave:

1. Flexibilidad: A diferencia de los objetos regulares, Map permite usar cualquier tipo de dato como clave, incluyendo objetos y funciones.

2. Rendimiento: Tanto Set como Map ofrecen un rendimiento de O(1) para operaciones comunes como inserción, eliminación y búsqueda.

3. Integridad de datos: Set garantiza automáticamente la unicidad de los elementos, lo que es útil en muchos escenarios.

4. Iteración: Ambos proporcionan métodos de iteración consistentes y fáciles de usar.

5. Funcionalidad adicional: Ofrecen métodos útiles como has(), delete(), y clear() que simplifican las operaciones comunes.

6. Versiones "débiles": WeakSet y WeakMap proporcionan opciones para casos de uso específicos donde se necesita un manejo especial de la memoria.

Al dominar estas estructuras de datos, los desarrolladores pueden escribir código más limpio, más eficiente y más expresivo. Set y Map son particularmente útiles en escenarios como:

- Eliminación de duplicados
- Implementación de caché
- Manejo de relaciones complejas entre datos
- Optimización de búsquedas en grandes conjuntos de datos

A medida que las aplicaciones web se vuelven más complejas y manejan mayores volúmenes de datos, el uso efectivo de Set y Map se vuelve cada vez más importante. Por lo tanto, es crucial para los desarrolladores modernos de JavaScript comprender y utilizar estas potentes herramientas en su arsenal de programación.

