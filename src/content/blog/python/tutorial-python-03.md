---
title: 'El tutorial de Python #3: Listas y Métodos de Estructuras de Datos'
technology: 'Python'
description: 'Aprende Python desde cero con nuestra guía. Domina las listas y sus métodos esenciales para programar con confianza.'
pubDate: 'aug 3 2024'
heroImage: '/Python.jpg'
---
## Índice
- [Introducción a las Estructuras de Datos en Python](#introducción)
- [Listas](#listas)
   - [Métodos Principales](#métodos-principales-de-listas)
   - [Ejemplos Prácticos](#ejemplos-prácticos)
   - [Uso como Estructuras Especializadas](#uso-como-estructuras-especializadas)
     - [Pilas y Colas](#listas-como-pilas-y-colas)
- [Comprensiones de Listas](#comprensiones-de-listas)
   - [Sintaxis y Ejemplos](#sintaxis-y-ejemplos)
   - [Comprensiones Anidadas](#comprensiones-anidadas)
   - [Consideraciones de Rendimiento](#consideraciones-de-rendimiento)
- [La instrucción **del**](#la-instrucción-del)
- [Tuplas](#tuplas)
   - [Creación y Desempaquetado](#creación-y-desempaquetado)
- [Conjuntos](#conjuntos)
   - [Creación y Operaciones](#creación-y-operaciones-conjuntos)
   - [Comprensión de Conjuntos](#comprensión-de-conjuntos)
- [Diccionarios](#diccionarios)
   - [Creación, Uso y Construcción](#creación-uso-y-construcción)
- [Técnicas de Iteración](#técnicas-de-iteración)
   - [Sobre Diferentes Estructuras](#sobre-diferentes-estructuras)
   - [Modificación Segura durante Iteración](#modificación-segura-durante-iteración)
- [Condiciones en Python](#condiciones-en-python)
   - [Operadores de Comparación y Booleanos](#operadores-de-comparación-y-booleanos)
   - [Encadenamiento y Evaluación de Cortocircuito](#encadenamiento-y-evaluación-de-cortocircuito)
- [El Operador Walrus (:=)](#el-operador-walrus)
- [Comparaciones de Secuencias y Otros Tipos](#comparaciones-de-secuencias-y-otros-tipos)
    - [Comparación Lexicográfica](#comparación-lexicográfica)
    - [Entre Diferentes Tipos](#entre-diferentes-tipos)
- [Conclusión: Dominando las Estructuras de Datos en Python](#conclusión-dominando-las-estructuras-de-datos-en-python)

Las listas en Python son una de las estructuras de datos más versátiles y ampliamente utilizadas. En este artículo, exploraremos en detalle los métodos que hacen de las listas una herramienta tan poderosa, y veremos cómo se pueden utilizar en diferentes escenarios.

## Listas

### Métodos Principales de las Listas
Las listas en Python vienen equipadas con una variedad de métodos útiles. Veamos los más importantes:
- **append(x)**: Agrega un elemento al final de la lista.

- **extend(iterable)**: Añade todos los elementos de un iterable al final de la lista.

- **insert(i, x)**: Inserta un elemento en una posición específica.

- **remove(x)**: Elimina el primer elemento con el valor especificado.

- **pop([i])**: Elimina y retorna el elemento en la posición dada (o el último si no se especifica).

- **clear()**: Elimina todos los elementos de la lista.

- **index(x[, start[, end]])**: Retorna el índice del primer elemento con el valor especificado.

- **count(x)**: Cuenta cuántas veces aparece un elemento en la lista.

- **sort()**: Ordena la lista in situ.

- **reverse()**: Invierte el orden de los elementos in situ.

- **copy()**: Crea una copia superficial de la lista.

### Ejemplos Prácticos
Veamos algunos ejemplos para ilustrar cómo se usan estos métodos:
```python
# Creamos una lista de frutas
frutas = ['naranja', 'manzana', 'pera', 'plátano', 'kiwi', 'manzana', 'plátano']

# Contamos cuántas manzanas hay
print(frutas.count('manzana'))  # Salida: 2

# Encontramos el índice del primer 'plátano'
print(frutas.index('plátano'))  # Salida: 3

# Invertimos el orden de la lista
frutas.reverse()
print(frutas)  # Salida: ['plátano', 'manzana', 'kiwi', 'plátano', 'pera', 'manzana', 'naranja']

# Agregamos una nueva fruta
frutas.append('uva')
print(frutas)  # Salida: [..., 'naranja', 'uva']

# Ordenamos la lista
frutas.sort()
print(frutas)  # Salida: ['kiwi', 'manzana', 'manzana', 'naranja', 'pera', 'plátano', 'plátano', 'uva']

# Eliminamos y retornamos el último elemento
ultima_fruta = frutas.pop()
print(ultima_fruta)  # Salida: 'uva'
print(frutas)  # La lista ya no contiene 'uva'
```

### Uso como Estructuras Especializadas
Las listas en Python son tan versátiles que pueden ser utilizadas para implementar otras estructuras de datos más especializadas:

#### Listas como Pilas y Colas
Una pila sigue el principio de "último en entrar, primero en salir" (LIFO). Podemos implementar una pila fácilmente con una lista:
```python
pila = [3, 4, 5]
pila.append(6)  # Añadimos un elemento a la pila
pila.append(7)
print(pila)  # Salida: [3, 4, 5, 6, 7]

elemento = pila.pop()  # Removemos el último elemento
print(elemento)  # Salida: 7
print(pila)  # Salida: [3, 4, 5, 6]
```

Aunque las listas pueden usarse como colas (principio "primero en entrar, primero en salir" o FIFO), no son eficientes para este propósito. Para una implementación más eficiente de colas, se recomienda usar `collections.deque`:
```python
from collections import deque

cola = deque(["Eric", "John", "Michael"])
cola.append("Terry")  # Terry llega
cola.append("Graham")  # Graham llega

primer_cliente = cola.popleft()  # El primero en llegar ahora se va
print(primer_cliente)  # Salida: 'Eric'

print(cola)  # Salida: deque(['John', 'Michael', 'Terry', 'Graham'])
```

## Comprensiones de Listas
Las comprensiones de listas son una característica poderosa y elegante de Python que nos permite crear nuevas listas de manera concisa. Son especialmente útiles cuando queremos aplicar una operación a cada elemento de una secuencia o crear una subsecuencia de elementos que cumplen ciertas condiciones.

### Sintaxis y Ejemplos
La sintaxis básica de una comprensión de lista es:
```python
[expresion for elemento in iterable if condicion]
```
Donde:
- `expresion` es la operación que se aplica a cada elemento.
- `elemento` es la variable que representa cada item del iterable.
- `iterable` es la secuencia sobre la que estamos iterando.
- `if condicion` es opcional y se usa para filtrar elementos.

1. Crear una lista de cuadrados:
```python
cuadrados = [x**2 for x in range(10)]
print(cuadrados)  # Salida: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```
2. Filtrar números pares de una lista:
```python
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
pares = [x for x in numeros if x % 2 == 0]
print(pares)  # Salida: [2, 4, 6, 8, 10]
```
3. Aplicar una función a cada elemento:
```python
frutas = ['  banana', '  mora  ', 'fresa  ']
frutas_limpias = [fruta.strip() for fruta in frutas]
print(frutas_limpias)  # Salida: ['banana', 'mora', 'fresa']
```
4. Crear una lista de tuplas:
```python
coordenadas = [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
print(coordenadas)  # Salida: [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
```

### Comprensiones Anidadas
Las comprensiones de listas pueden ser anidadas, lo que nos permite trabajar con estructuras de datos más complejas como matrices.

Ejemplo: Transponer una matriz
```python
matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]

transpuesta = [[fila[i] for fila in matriz] for i in range(4)]
print(transpuesta)
# Salida: [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
```
Este ejemplo crea una nueva matriz donde las filas de la matriz original se convierten en columnas.

### Consideraciones de Rendimiento
Aunque las comprensiones de listas son elegantes y concisas, es importante usarlas con moderación. Para operaciones muy complejas o cuando se trabaja con grandes conjuntos de datos, un bucle tradicional puede ser más legible y eficiente.

Además, para tareas más complejas, Python ofrece la función `zip()` que puede ser muy útil:
```python
transpuesta = list(zip(*matriz))
print(transpuesta)
# Salida: [(1, 5, 9), (2, 6, 10), (3, 7, 11), (4, 8, 12)]
```
Las comprensiones de listas son una herramienta poderosa en el arsenal de cualquier programador de Python. Permiten escribir código más limpio y expresivo, especialmente cuando se trata de transformar o filtrar datos. Sin embargo, como con cualquier herramienta poderosa, es importante usarlas juiciosamente para mantener la legibilidad y eficiencia del código.

## La instrucción `del`
La instrucción `del` en Python es una herramienta versátil que se puede utilizar para eliminar elementos de listas o incluso variables completas. Veamos cómo funciona:

Eliminar elementos de una lista
```python
a = [-1, 1, 66.25, 333, 333, 1234.5]
del a[0]  # Elimina el primer elemento
print(a)  # Salida: [1, 66.25, 333, 333, 1234.5]

del a[2:4]  # Elimina los elementos del índice 2 al 3
print(a)  # Salida: [1, 66.25, 1234.5]

del a[:]  # Elimina todos los elementos de la lista
print(a)  # Salida: []
```
Eliminar variables
```python
x = 10
del x
# print(x)  # Esto daría un error, ya que 'x' ya no existe
```
La instrucción `del` es útil cuando queremos eliminar elementos específicos de una lista o cuando queremos liberar memoria eliminando variables que ya no necesitamos.

## Tuplas
Las tuplas son otro tipo de secuencia en Python, similar a las listas, pero con una diferencia crucial: son inmutables. Esto significa que una vez creada una tupla, no podemos cambiar sus elementos.

### Creación y desempaquetado
```python
t = 12345, 54321, 'hello!'
print(t)  # Salida: (12345, 54321, 'hello!')

# Tuplas anidadas
u = t, (1, 2, 3, 4, 5)
print(u)  # Salida: ((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))

# Tupla de un solo elemento
singleton = 'hello',
print(singleton)  # Salida: ('hello',)
```
Desempaquetado de tuplas
Una característica útil de las tuplas es que pueden ser desempaquetadas en variables individuales:
```python
x, y, z = t
print(x)  # Salida: 12345
print(y)  # Salida: 54321
print(z)  # Salida: 'hello!'
```
Las tuplas son útiles cuando queremos asegurarnos de que una colección de elementos no cambie, como por ejemplo, las coordenadas de un punto en el espacio.

## Conjuntos
Los conjuntos en Python son colecciones no ordenadas de elementos únicos. Son útiles para eliminar duplicados y realizar operaciones matemáticas de conjuntos.

### Creación y Operaciones
```python
# Usando llaves
frutas = {'manzana', 'naranja', 'manzana', 'pera', 'naranja', 'banana'}
print(frutas)  # Salida: {'naranja', 'manzana', 'pera', 'banana'}

# Usando la función set()
a = set('abracadabra')
print(a)  # Salida: {'a', 'r', 'b', 'c', 'd'}
```
Operaciones con conjuntos
```python
a = set('abracadabra')
b = set('alacazam')

print(a - b)  # Diferencia: letras en a pero no en b
print(a | b)  # Unión: letras en a o b o ambos
print(a & b)  # Intersección: letras en ambos a y b
print(a ^ b)  # Diferencia simétrica: letras en a o b pero no en ambos
```

### Comprensión de conjuntos
Al igual que con las listas, podemos usar comprensiones para crear conjuntos de manera concisa:
```python
a = {x for x in 'abracadabra' if x not in 'abc'}
print(a)  # Salida: {'r', 'd'}
```
Los conjuntos son extremadamente útiles cuando necesitamos asegurarnos de que una colección no tenga elementos duplicados o cuando necesitamos realizar operaciones matemáticas de conjuntos de manera eficiente.

Estas estructuras de datos (listas, tuplas y conjuntos) son fundamentales en Python y cada una tiene sus propios usos y ventajas. Comprender cuándo usar cada una es clave para escribir código Python eficiente y elegante.

## Diccionarios
Los diccionarios son una estructura de datos extremadamente útil en Python. A diferencia de las secuencias, que se indexan por un rango numérico, los diccionarios se indexan con claves, que pueden ser cualquier tipo inmutable.

### Creación, Uso y Construcción
```python
# Creación de un diccionario
tel = {'jack': 4098, 'sape': 4139}

# Añadir un nuevo par clave-valor
tel['guido'] = 4127

print(tel)  # Salida: {'jack': 4098, 'sape': 4139, 'guido': 4127}

# Acceder a un valor
print(tel['jack'])  # Salida: 4098

# Eliminar un par clave-valor
del tel['sape']

# Añadir otro par clave-valor
tel['irv'] = 4127

print(tel)  # Salida: {'jack': 4098, 'guido': 4127, 'irv': 4127}

# Obtener una lista de claves
print(list(tel))  # Salida: ['jack', 'guido', 'irv']

# Obtener una lista ordenada de claves
print(sorted(tel))  # Salida: ['guido', 'irv', 'jack']

# Comprobar si una clave existe
print('guido' in tel)  # Salida: True
print('jack' not in tel)  # Salida: False
```

### Construcción
Existen varias formas de construir diccionarios:
```python
# Usando el constructor dict()
dict1 = dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])

# Usando comprensión de diccionarios
dict2 = {x: x**2 for x in (2, 4, 6)}

# Usando argumentos de palabra clave cuando las claves son strings
dict3 = dict(sape=4139, guido=4127, jack=4098)

print(dict1)  # Salida: {'sape': 4139, 'guido': 4127, 'jack': 4098}
print(dict2)  # Salida: {2: 4, 4: 16, 6: 36}
print(dict3)  # Salida: {'sape': 4139, 'guido': 4127, 'jack': 4098}
```

## Técnicas de Iteración
Python ofrece varias técnicas poderosas para iterar sobre estructuras de datos.

### Sobre Diferentes Estructuras
```python
knights = {'gallahad': 'the pure', 'robin': 'the brave'}
for k, v in knights.items():
    print(k, v)

# Salida:
# gallahad the pure
# robin the brave
```

Enumeración de secuencias
```python
for i, v in enumerate(['tic', 'tac', 'toe']):
    print(i, v)

# Salida:
# 0 tic
# 1 tac
# 2 toe
```

Iteración sobre múltiples secuencias
```python
questions = ['name', 'quest', 'favorite color']
answers = ['lancelot', 'the holy grail', 'blue']
for q, a in zip(questions, answers):
    print(f'What is your {q}?  It is {a}.')

# Salida:
# What is your name?  It is lancelot.
# What is your quest?  It is the holy grail.
# What is your favorite color?  It is blue.
```

Iteración en orden inverso
Python permite iterar sobre secuencias en orden inverso utilizando la función `reversed()`:
```python
for i in reversed(range(1, 10, 2)):
    print(i)

# Salida:
# 9
# 7
# 5
# 3
# 1
```

Iteración sobre una secuencia ordenada
Para iterar sobre una secuencia en orden, podemos usar la función `sorted()`:
```python
basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
for fruit in sorted(set(basket)):
    print(fruit)

# Salida:
# apple
# banana
# orange
# pear
```
Nótese el uso de `set()` para eliminar duplicados antes de ordenar.

### Modificación Segura durante Iteración
A veces necesitamos modificar una lista mientras la estamos recorriendo. Una forma segura de hacerlo es crear una nueva lista:
```python
import math

raw_data = [56.2, float('NaN'), 51.7, 55.3, 52.5, float('NaN'), 47.8]
filtered_data = [value for value in raw_data if not math.isnan(value)]

print(filtered_data)  # Salida: [56.2, 51.7, 55.3, 52.5, 47.8]
```

## Condiciones en Python
Las condiciones en Python son  muy flexibles y pueden incluir varios tipos de operadores y expresiones.

### Operadores de Comparación y Booleanos
Además de los operadores de comparación estándar (`<`, `>`, `==`, `!=`, `<=`, `>=`), Python ofrece:

- `in` y `not in`: para verificar pertenencia
- `is` y `is not`: para comparar identidad de objetos

```python
a = [1, 2, 3]
b = [1, 2, 3]

print(2 in a)       # Salida: True
print(4 not in a)   # Salida: True
print(a is b)       # Salida: False (son objetos diferentes)
print(a == b)       # Salida: True (tienen el mismo contenido)
```

### Encadenamiento y Evaluación de Cortocircuito
Las comparaciones pueden encadenarse de manera intuitiva:
```python
a = 5
print(1 < a < 10)  # Salida: True
```
Operadores booleanos
Python utiliza las palabras clave `and`, `or`, y `not` para operaciones booleanas:
```python
x = 5
y = 10
z = 15

print(x < y and y < z)  # Salida: True
print(x < y or y > z)   # Salida: True
print(not x > y)        # Salida: True
```

Evaluación de cortocircuito
Python utiliza evaluación de cortocircuito para `and` y `or`:
```python
# 'or' retorna el primer valor verdadero
print("" or "Second" or "Third")  # Salida: Second

# 'and' retorna el primer valor falso o el último valor si todos son verdaderos
print(0 and 1)  # Salida: 0
print(1 and 2 and 3)  # Salida: 3
```

## El Operador Walrus (:=)
Introducido en Python 3.8, el operador walrus permite asignar valores dentro de expresiones:
```python
if (n := len([1, 2, 3])) > 2:
    print(f"La lista tiene {n} elementos")
# Salida: La lista tiene 3 elementos
```
Estas técnicas de iteración y manejo de condiciones son fundamentales para escribir código Python eficiente y elegante. Dominarlas te permitirá trabajar de manera más efectiva con las estructuras de datos que hemos discutido anteriormente en este artículo.

El Operador Walrus (:=)
En Python, a diferencia de C, las asignaciones dentro de expresiones deben realizarse explícitamente con el operador walrus `:=`. Esta característica, introducida en Python 3.8, ayuda a evitar errores comunes que se encuentran en C, como escribir accidentalmente `=` en una expresión cuando se pretendía usar `==`.

## Comparaciones de Secuencias y Otros Tipos

Ejemplo de uso del operador walrus:
```python
# Sin operador walrus
n = len(a)
if n > 10:
    print(f"La lista tiene {n} elementos")

# Con operador walrus
if (n := len(a)) > 10:
    print(f"La lista tiene {n} elementos")
```
Las secuencias en Python pueden compararse con otros objetos del mismo tipo de secuencia. La comparación utiliza un orden lexicográfico, lo que significa:
1. Se comparan los dos primeros elementos.

2. Si son diferentes, esto determina el resultado de la comparación.

3. Si son iguales, se comparan los siguientes dos elementos.

4. Este proceso continúa hasta llegar al final de alguna de las secuencias.

### Comparación Lexicográfica
- Si dos elementos a comparar son ambos secuencias del mismo tipo, la comparación lexicográfica es recursiva.

- Si todos los elementos de dos secuencias resultan iguales, se considera que las secuencias son iguales.

- Si una secuencia es la parte inicial de la otra, la secuencia más corta se considera menor.

Para cadenas de caracteres, el orden lexicográfico utiliza el punto de código Unicode para ordenar caracteres individuales.

Ejemplos de Comparaciones
```python
print((1, 2, 3)              < (1, 2, 4))           # True
print([1, 2, 3]              < [1, 2, 4])           # True
print('ABC' < 'C' < 'Pascal' < 'Python')            # True
print((1, 2, 3, 4)           < (1, 2, 4))           # True
print((1, 2)                 < (1, 2, -1))          # True
print((1, 2, 3)             == (1.0, 2.0, 3.0))     # True
print((1, 2, ('aa', 'ab'))   < (1, 2, ('abc', 'a'), 4))  # True
```

### Entre Diferentes Tipos
Es legal comparar objetos de diferentes tipos con `<` o `>` siempre y cuando los objetos tengan los métodos de comparación apropiados. Por ejemplo:
- Los tipos de números mezclados se comparan de acuerdo a su valor numérico (0 es igual a 0.0).

- Si los objetos no tienen métodos de comparación compatibles, en lugar de proporcionar un ordenamiento arbitrario, el intérprete lanzará una excepción `TypeError`.
```python
print(0 == 0.0)  # True
print(1 < 1.5)   # True

# Esto lanzará un TypeError
# print("2" < 1)
```

## Conclusión: Dominando las Estructuras de Datos en Python
El viaje a través de las estructuras de datos en Python que hemos emprendido en este tutorial revela la riqueza y flexibilidad que este lenguaje ofrece a los programadores. Desde las versátiles listas hasta los eficientes diccionarios, Python proporciona un conjunto de herramientas poderosas que, cuando se dominan, pueden elevar significativamente la calidad y eficiencia de nuestro código.

Las listas, con su naturaleza mutable y sus múltiples métodos, se erigen como la columna vertebral de muchas operaciones en Python. Su capacidad para crecer, encogerse y transformarse las convierte en el lienzo perfecto para la manipulación de datos dinámicos. La elegancia de las comprensiones de listas nos permite condensar operaciones complejas en expresiones concisas y legibles, demostrando la filosofía de Python de favorecer la claridad y la expresividad.

Mientras tanto, las tuplas nos recuerdan la importancia de la inmutabilidad en ciertos contextos, ofreciendo una garantía de integridad de datos que puede ser crucial en aplicaciones donde la consistencia es primordial. Los conjuntos, por su parte, brillan en escenarios donde la unicidad y las operaciones matemáticas de conjuntos son esenciales, permitiéndonos manipular datos con una eficiencia que sería difícil de lograr con otras estructuras.

Los diccionarios emergen como una joya en la corona de Python, ofreciendo una simbiosis perfecta entre flexibilidad y rendimiento. Su capacidad para asociar claves con valores de manera eficiente los convierte en la elección ideal para una amplia gama de aplicaciones, desde el cacheo de datos hasta la representación de estructuras complejas.

Las técnicas de iteración y las sutilezas de las comparaciones en Python que hemos explorado no son meros detalles técnicos, sino herramientas que, cuando se aplican con destreza, pueden transformar código verboso en expresiones elegantes y eficientes. El operador walrus (:=), por ejemplo, ilustra cómo Python continúa evolucionando para ofrecer a los programadores formas más potentes y concisas de expresar sus intenciones.

Dominar estas estructuras de datos y sus operaciones asociadas no es simplemente una cuestión de conocimiento técnico; es un paso crucial hacia la fluidez en Python. Con esta fluidez viene la capacidad de escribir código que no solo funciona, sino que es eficiente, mantenible y elegante. Cada estructura que hemos discutido tiene su lugar en el ecosistema de Python, y saber cuándo y cómo utilizar cada una es lo que distingue a un programador competente de un verdadero artesano del código.

A medida que continúes tu viaje en el mundo de Python, te animamos a ver estas estructuras de datos no solo como herramientas, sino como piezas fundamentales de un lenguaje expresivo. Experimenta con ellas, combínalas de formas creativas, y sobre todo, úsalas para resolver problemas reales. Recuerda que la verdadera maestría viene con la práctica y la aplicación.

Con el conocimiento que has adquirido en este tutorial, estás bien equipado para enfrentar desafíos de programación más complejos. Las estructuras de datos que hemos explorado son los cimientos sobre los cuales se construyen algoritmos sofisticados y aplicaciones robustas. Tu comprensión de estas estructuras te permitirá no solo leer y entender código Python avanzado, sino también diseñar soluciones elegantes a problemas complejos.

A medida que avanzas en tu aprendizaje, mantén siempre presente el Zen de Python: la simplicidad es mejor que la complejidad, pero la complejidad explícita es mejor que la complejidad implícita. Las estructuras de datos que has aprendido te ayudarán a navegar este equilibrio, permitiéndote escribir código que es tanto poderoso como comprensible.

El dominio de las estructuras de datos en Python no es el final de tu viaje, sino el comienzo de infinitas posibilidades. Con estas herramientas a tu disposición, estás listo para crear, innovar y dejar tu huella en el mundo de la programación. ¡Adelante, y que tus códigos sean siempre claros, eficientes y pythónicos!