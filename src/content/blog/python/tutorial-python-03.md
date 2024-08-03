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
- [Consignas](#consignas)
- [Secciones tratadas hoy](#secciones-tratadas-hoy)

Las listas en Python son una de las estructuras de datos más versátiles y ampliamente utilizadas. En este artículo, exploraremos en detalle los métodos que hacen de las listas una herramienta tan poderosa, y veremos cómo se pueden utilizar en diferentes escenarios.

## Listas
Las listas en Python son una de las estructuras de datos más versátiles y ampliamente utilizadas. Son secuencias mutables que pueden contener elementos de diferentes tipos, incluyendo otras listas. Las listas se definen utilizando corchetes [] y los elementos se separan por comas.
```python
mi_lista = [1, 2, 3, "python", [4, 5, 6]]
```

### Métodos Principales de las Listas
Las listas en Python vienen equipadas con una variedad de métodos útiles. Veamos los más importantes:
- **append(x)**: Agrega un elemento al final de la lista.
    ```python
    frutas = ['manzana', 'banana']
    frutas.append('naranja')
    print(frutas)  # Salida: ['manzana', 'banana', 'naranja']
    ```

- **extend(iterable)**: Añade todos los elementos de un iterable al final de la lista.
    ```python
    numeros = [1, 2, 3]
    numeros.extend([4, 5])
    print(numeros)  # Salida: [1, 2, 3, 4, 5]
    ```

- **insert(i, x)**: Inserta un elemento en una posición específica.
    ```python
    letras = ['a', 'c', 'd']
    letras.insert(1, 'b')
    print(letras)  # Salida: ['a', 'b', 'c', 'd']
    ```

- **remove(x)**: Elimina el primer elemento con el valor especificado.
    ```python
    colores = ['rojo', 'verde', 'azul', 'verde']
    colores.remove('verde')
    print(colores)  # Salida: ['rojo', 'azul', 'verde']
    ```

- **pop([i])**: Elimina y retorna el elemento en la posición dada (o el último si no se especifica).
    ```python
    stack = [3, 4, 5]
    elemento = stack.pop()
    print(elemento)  # Salida: 5
    print(stack)  # Salida: [3, 4]
    ```

- **clear()**: Elimina todos los elementos de la lista.
    ```python
    mi_lista = [1, 2, 3]
    mi_lista.clear()
    print(mi_lista)  # Salida: []
    ```

- **index(x[, start[, end]])**: Retorna el índice del primer elemento con el valor especificado.
    ```python
    animales = ['gato', 'perro', 'conejo', 'perro']
    indice = animales.index('perro')
    print(indice)  # Salida: 1
    ```

- **count(x)**: Cuenta cuántas veces aparece un elemento en la lista.
    ```python
    numeros = [1, 2, 2, 3, 2, 4]
    conteo = numeros.count(2)
    print(conteo)  # Salida: 3
    ```

- **sort()**: Ordena la lista in situ.
    ```python
    desordenada = [3, 1, 4, 1, 5, 9, 2]
    desordenada.sort()
    print(desordenada)  # Salida: [1, 1, 2, 3, 4, 5, 9]
    ```

- **reverse()**: Invierte el orden de los elementos in situ.
    ```python
    mi_lista = [1, 2, 3, 4]
    mi_lista.reverse()
    print(mi_lista)  # Salida: [4, 3, 2, 1]
    ```

- **copy()**: Crea una copia superficial de la lista.
    ```python
    original = [1, [2, 3], 4]
    copia = original.copy()
    copia[1][0] = 'a'
    print(original)  # Salida: [1, ['a', 3], 4]
    print(copia)     # Salida: [1, ['a', 3], 4]
    ```

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
```python
# Ejemplo: Transponer una matriz

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
```python
Matriz original:       Matriz transpuesta:
┌─────────────┐        ┌───────────┐
│ 1  2  3  4  │        │ 1  5  9   │
│ 5  6  7  8  │   =>   │ 2  6  10  │
│ 9  10 11 12 │        │ 3  7  11  │
└─────────────┘        │ 4  8  12  │
                       └───────────┘
```
```python
Proceso de transposición:

[1, 2, 3, 4]     [1]
[5, 6, 7, 8]  => [5]  => [1, 5, 9]
[9, 10, 11, 12]  [9]

               [2]
               [6]  => [2, 6, 10]
               [10]

               [3]
               [7]  => [3, 7, 11]
               [11]

               [4]
               [8]  => [4, 8, 12]
               [12]
```

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

- Eliminar elementos de una lista
    ```python
    a = [-1, 1, 66.25, 333, 333, 1234.5]
    del a[0]  # Elimina el primer elemento
    print(a)  # Salida: [1, 66.25, 333, 333, 1234.5]

    del a[2:4]  # Elimina los elementos del índice 2 al 3
    print(a)  # Salida: [1, 66.25, 1234.5]

    del a[:]  # Elimina todos los elementos de la lista
    print(a)  # Salida: []
    ```
- Eliminar variables
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

- Construcción
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
- Enumeración de secuencias
```python
for i, v in enumerate(['tic', 'tac', 'toe']):
    print(i, v)

# Salida:
# 0 tic
# 1 tac
# 2 toe
```
- Iteración sobre múltiples secuencias
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
- Iteración en orden inverso
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
- Iteración sobre una secuencia ordenada
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
- Las comparaciones pueden encadenarse de manera intuitiva:
```python
a = 5
print(1 < a < 10)  # Salida: True
```
- Operadores booleanos
Python utiliza las palabras clave `and`, `or`, y `not` para operaciones booleanas:
```python
x = 5
y = 10
z = 15

print(x < y and y < z)  # Salida: True
print(x < y or y > z)   # Salida: True
print(not x > y)        # Salida: True
```
- Evaluación de cortocircuito
Python utiliza evaluación de cortocircuito para `and` y `or`:
```python
# 'or' retorna el primer valor verdadero
print("" or "Second" or "Third")  # Salida: Second

# 'and' retorna el primer valor falso o el último valor si todos son verdaderos
print(0 and 1)  # Salida: 0
print(1 and 2 and 3)  # Salida: 3
```

## El Operador Walrus (:=)
Introducido en Python 3.8, el operador walrus (:=) es una característica poderosa que permite asignar valores dentro de expresiones. Este operador recibe su nombre debido a su parecido con los ojos y colmillos de una morsa cuando se gira 90 grados.

El operador walrus realiza una asignación y devuelve el valor asignado, lo que permite combinar la asignación y la evaluación en una sola expresión. Esto puede llevar a un código más conciso y legible en ciertas situaciones.

Ejemplo de uso del operador walrus:
```python
# Sin operador walrus
n = len([1, 2, 3])
if n > 2:
    print(f"La lista tiene {n} elementos")

# Con operador walrus
if (n := len([1, 2, 3])) > 2:
    print(f"La lista tiene {n} elementos")
# Salida: La lista tiene 3 elementos
```
En este ejemplo, el operador walrus asigna el resultado de len([1, 2, 3]) a la variable n y luego compara n con 2, todo en una sola línea.

Es importante notar que, a diferencia de lenguajes como C, Python requiere el uso explícito del operador walrus para asignaciones dentro de expresiones. Esto ayuda a prevenir errores comunes, como escribir accidentalmente = (asignación) cuando se pretendía usar == (comparación).

Otro ejemplo útil del operador walrus es en bucles while:
```python
# Sin operador walrus
while True:
    chunk = file.read(8192)
    if not chunk:
        break
    process(chunk)

# Con operador walrus
while (chunk := file.read(8192)):
    process(chunk)
```
El operador walrus puede hacer que el código sea más conciso, pero es importante usarlo con moderación para mantener la legibilidad.

## Comparaciones de Secuencias y Otros Tipos
Python permite comparar secuencias y otros tipos de objetos de manera intuitiva. Cuando se comparan secuencias del mismo tipo, Python utiliza un orden lexicográfico:
1. Se comparan los dos primeros elementos.

2. Si son diferentes, esto determina el resultado de la comparación.

3. Si son iguales, se comparan los siguientes dos elementos.

4. Este proceso continúa hasta llegar al final de alguna de las secuencias.
```python
print((1, 2, 3) < (1, 2, 4))           # True
print([1, 2, 3] < [1, 2, 4])           # True
print('ABC' < 'C' < 'Pascal' < 'Python')  # True
print((1, 2, 3, 4) < (1, 2, 4))        # True
print((1, 2) < (1, 2, -1))             # True
```
Es importante tener en cuenta que las comparaciones entre diferentes tipos de objetos son posibles siempre que los objetos tengan métodos de comparación compatibles. Por ejemplo, se pueden comparar números de diferentes tipos (enteros, flotantes) basándose en su valor numérico.
```python
print(0 == 0.0)  # True
print(1 < 1.5)   # True
```
Sin embargo, comparar tipos incompatibles (como una cadena con un número) resultará en un TypeError:
```python
# Esto lanzará un TypeError
# print("2" < 1)
```
### Comparación Lexicográfica
- Si dos elementos a comparar son ambos secuencias del mismo tipo, la comparación lexicográfica es recursiva.

- Si todos los elementos de dos secuencias resultan iguales, se considera que las secuencias son iguales.

- Si una secuencia es la parte inicial de la otra, la secuencia más corta se considera menor.

Para cadenas de caracteres, el orden lexicográfico utiliza el punto de código Unicode para ordenar caracteres individuales.
- Ejemplos de Comparaciones
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

## Consignas
Hemos adquirido conocimientos valiosos y tenemos los recursos necesarios a nuestra disposición. Ahora es el momento de aplicar lo aprendido y comenzar a crear. <a href="https://github.com/AngelB-Dev/El-tutorial-de-Python" target="_blank">Repositorio de GitHub</a>

### Listas(7)
1. Eliminador de duplicados: Escribe una función que elimine todos los elementos duplicados de una lista, manteniendo el orden original de los elementos.
    - Usa un bucle for y el método append() para este ejercicio.
    - Si la lista está vacía, utiliza la sentencia pass para manejar este caso.

2. Separador de pares e impares: Crea un programa que genere una lista de 20 números aleatorios entre 1 y 100, luego divida esta lista en dos: una con números pares y otra con impares.
    - Utiliza la función random.randint() para generar números aleatorios.
    - Usa comprensión de listas para separar los números pares e impares.

3. Capitalizador de palabras: Implementa una función que tome una lista de strings y devuelva una nueva lista donde cada palabra tenga la primera letra en mayúscula.
    - Utiliza el método capitalize() y una comprensión de lista para este ejercicio.
    - Si la lista contiene elementos que no son strings, el programa debe manejar esta situación apropiadamente.

4. Producto de todos excepto self: Crea una función que tome una lista de números y devuelva una nueva lista donde cada elemento es el producto de todos los números en la lista original excepto el número en esa posición.
    - Usa dos bucles for anidados para este ejercicio.
    - Maneja el caso de una lista con ceros apropiadamente.

5. Repartidor de cartas: Implementa una función que simule un juego de cartas: dada una lista de "cartas" (pueden ser números o strings), "reparte" una mano de n cartas (es decir, elimina n elementos aleatorios de la lista y los devuelve).
    - Utiliza el módulo random y el método pop() para este ejercicio.
    - Si n es mayor que el número de cartas disponibles, usa una sentencia raise para lanzar una excepción.

6. Buscador de puntos cercanos: Dada una lista de coordenadas (x, y) representadas como tuplas, encuentra los dos puntos más cercanos entre sí.
    - Usa bucles anidados y la fórmula de distancia euclidiana para este ejercicio.
    - Utiliza la función enumerate() para iterar sobre la lista de coordenadas.

7. Aplanador de listas: Crea una función recursiva que "aplane" una lista anidada. Por ejemplo, convertir [1, [2, 3, [4, 5]], 6] en [1, 2, 3, 4, 5, 6].
    - Utiliza recursión y el operador de concatenación de listas (+) para este ejercicio.
    - Usa `isinstance()` para verificar si un elemento es una lista.

### Comprensiones de Listas(7)
1. Generador de cuadrados perfectos: Crea una comprensión de lista que genere los primeros 20 cuadrados perfectos.
    - Utiliza la función range() y el operador de exponenciación (**) para este ejercicio.
    - Asegúrate de que la lista resultante contenga exactamente 20 elementos.

2. Filtro de palabras por longitud: Dada una lista de palabras, crea una comprensión de lista que filtre solo las palabras que tengan más de 5 letras.
    - Usa la función len() para determinar la longitud de cada palabra.
    - Si la lista original está vacía, la comprensión debe devolver una lista vacía.

3. Transformador de temperaturas: Crea una comprensión de lista que convierta una lista de temperaturas en Celsius a Fahrenheit.
    - Utiliza la fórmula (C * 9/5) + 32 para la conversión.
    - Redondea los resultados a dos decimales usando la función round().

4. Extractor de dígitos: Dada una lista de números enteros, crea una comprensión de lista que extraiga todos los dígitos únicos utilizados en estos números.
    - Utiliza la función str() para convertir los números a strings.
    - Usa un set() dentro de la comprensión para eliminar duplicados.

5. Generador de coordenadas: Crea una comprensión de lista que genere todas las coordenadas (x, y) en una cuadrícula de 5x5.
    - Utiliza comprensiones de lista anidadas para este ejercicio.
    - El resultado debe ser una lista de tuplas (x, y).

6. Filtro de diccionarios: Dada una lista de diccionarios que representan personas con 'nombre' y 'edad', crea una comprensión de lista que filtre solo las personas mayores de 18 años.
    - Usa la clave 'edad' para filtrar los diccionarios.
    - El resultado debe ser una lista de diccionarios.

7. Generador de matriz identidad: Crea una comprensión de lista que genere una matriz identidad de tamaño n x n.
    - Utiliza comprensiones de lista anidadas y el operador ternario para este ejercicio.
    - El parámetro n debe ser proporcionado por el usuario.

### Del(7)
1. Eliminador de elementos pares: Escribe una función que elimine todos los elementos en posiciones pares de una lista (índices 0, 2, 4, etc.).
    - Utiliza un bucle for en reversa y la instrucción del.
    - Asegúrate de manejar correctamente el caso de una lista vacía.

2. Limpiador de diccionario: Crea una función que elimine todas las claves de un diccionario cuyos valores sean None.
    - Usa un bucle for para iterar sobre una copia de las claves del diccionario.
    - Utiliza la instrucción del para eliminar las claves con valores None.

3. Reductor de lista: Implementa una función que reduzca una lista a sus n primeros elementos, eliminando el resto.
    - Utiliza slicing y la instrucción del para este ejercicio.
    - Si n es mayor que la longitud de la lista, la función no debe modificar la lista.

4. Eliminador de variables: Escribe un programa que cree varias variables y luego las elimine una por una, imprimiendo el espacio de nombres local después de cada eliminación.
    - Usa la función locals() para imprimir el espacio de nombres.
    - Maneja las excepciones que puedan surgir al intentar acceder a variables eliminadas.

5. Limpiador de atributos: Crea una clase con varios atributos y un método que elimine todos los atributos de la instancia excepto uno especificado.
    - Utiliza vars() para obtener un diccionario de los atributos de la instancia.
    - Usa un bucle for y la instrucción del para eliminar los atributos.

6. Eliminador de subcadenas: Implementa una función que elimine todas las ocurrencias de una subcadena dada en una cadena principal.
    - Convierte la cadena en una lista de caracteres.
    - Utiliza slicing y la instrucción del para eliminar las subcadenas encontradas.

7. Gestor de memoria: Crea un programa que simule la gestión de memoria, donde puedas "asignar" y "liberar" bloques de memoria.
    - Usa un diccionario para representar la memoria, donde las claves son direcciones y los valores son datos.
    - Implementa funciones para "asignar" (añadir al diccionario) y "liberar" (usar del para eliminar del diccionario) bloques de memoria.

### Tuplas(7)
1. Intercambiador de valores: Escribe una función que tome dos variables y intercambie sus valores utilizando una tupla.
    - Usa la asignación múltiple con una tupla para realizar el intercambio.
    - Asegúrate de que la función funcione con diferentes tipos de datos.

2. Desempaquetador de tuplas: Crea una función que tome una lista de tuplas (nombre, edad, profesión) y devuelva tres listas separadas con los nombres, edades y profesiones.
    - Utiliza desempaquetado de tuplas y comprensión de listas.
    - Maneja el caso en que alguna tupla no tenga exactamente tres elementos.

3. Ordenador de tuplas: Implementa una función que ordene una lista de tuplas basándose en el segundo elemento de cada tupla.
    - Usa la función sorted() con un argumento key personalizado.
    - Si el segundo elemento es el mismo, ordena por el primer elemento.

4. Contador de ocurrencias: Escribe una función que cuente las ocurrencias de cada elemento en una tupla y devuelva un diccionario con los resultados.
    - Utiliza un diccionario para almacenar los conteos.
    - Maneja el caso de tuplas que contengan elementos no hashables.

5. Generador de n-gramas: Crea una función que genere todos los n-gramas posibles de una secuencia dada (puede ser una lista, tupla o cadena).
    - Usa zip() y slicing para generar los n-gramas.
    - Permite que la función acepte un parámetro para especificar el tamaño de los n-gramas.

6. Filtro de tuplas: Implementa una función que filtre una lista de tuplas basándose en una condición dada (por ejemplo, tuplas donde el primer elemento es par).
    - Utiliza filter() o una comprensión de lista para realizar el filtrado.
    - Permite que la función acepte la condición de filtrado como un argumento.

7. Fusionador de tuplas: Escribe una función que tome dos tuplas y devuelva una nueva tupla que sea la fusión de ambas, eliminando duplicados y manteniendo el orden.
    - Usa set() para eliminar duplicados y luego convierte de vuelta a tupla.
    - Asegúrate de que el orden de los elementos en la tupla resultante sea el mismo que en las tuplas originales.

### Conjuntos(7)
1. Eliminador de duplicados: Escribe una función que tome una lista como entrada y devuelva una nueva lista sin elementos duplicados, manteniendo el orden original de aparición.
    - Utiliza un conjunto (set) para eliminar duplicados eficientemente.
    - Convierte el resultado de vuelta a una lista para mantener el orden original.

2. Calculadora de intersección: Crea una función que tome dos listas como entrada y devuelva una nueva lista con los elementos comunes a ambas, sin duplicados.
    - Convierte las listas de entrada en conjuntos.
    - Utiliza el método intersection() para encontrar los elementos comunes.

3. Verificador de subconjuntos: Implementa una función que determine si todos los elementos de una lista están presentes en otra lista, independientemente del orden o la cantidad de repeticiones.
    - Convierte ambas listas en conjuntos.
    - Utiliza el método issubset() para verificar si un conjunto es subconjunto del otro.

4. Generador de potencia conjunto: Escribe una función que genere todos los subconjuntos posibles de un conjunto dado.
    - Utiliza la biblioteca itertools para generar todas las combinaciones posibles.
    - Devuelve el resultado como una lista de conjuntos.

5. Calculadora de diferencia simétrica: Crea una función que tome dos conjuntos como entrada y devuelva un nuevo conjunto con elementos que están en cualquiera de los conjuntos, pero no en ambos.
    - Utiliza el operador ^ (XOR) para conjuntos o el método symmetric_difference().
    - Asegúrate de que la función maneje correctamente conjuntos vacíos.

6. Verificador de disyunción: Implementa una función que determine si dos listas no tienen elementos en común.
    - Convierte las listas en conjuntos.
    - Utiliza el método isdisjoint() para verificar si los conjuntos son disjuntos.

7. Optimizador de búsqueda: Crea una función que tome una lista grande y una lista pequeña, y determine eficientemente si todos los elementos de la lista pequeña están en la lista grande.
    - Convierte la lista grande en un conjunto para búsquedas O(1).
    - Itera sobre la lista pequeña, verificando la pertenencia en el conjunto.

### Diccionarios(7)
1. Contador de palabras: Escribe una función que tome una cadena de texto y devuelva un diccionario donde las claves sean las palabras únicas y los valores sean el número de veces que aparece cada palabra.
    - Usa el método split() para dividir el texto en palabras.
    - Utiliza un diccionario para contar las ocurrencias de cada palabra.

2. Fusionador de diccionarios: Crea una función que tome dos diccionarios y los combine en uno solo. Si hay claves duplicadas, el valor del segundo diccionario debe prevalecer.
    - Usa el método update() o una comprensión de diccionarios para combinar los diccionarios.
    - Asegúrate de no modificar los diccionarios originales.

3. Inversor de diccionario: Implementa una función que tome un diccionario y devuelva un nuevo diccionario donde las claves y valores estén intercambiados.
    - Maneja el caso en que múltiples claves tengan el mismo valor.
    - Usa una comprensión de diccionarios para crear el nuevo diccionario.

4. Buscador de valores máximos: Escribe una función que encuentre la(s) clave(s) con el valor más alto en un diccionario.
    - Utiliza la función max() con un argumento key personalizado.
    - Devuelve una lista de claves en caso de que haya múltiples valores máximos.

5. Aplanador de diccionarios anidados: Crea una función recursiva que "aplane" un diccionario anidado, donde las claves del nuevo diccionario sean las rutas a los valores en el diccionario original.
    - Usa recursión para manejar diccionarios anidados a cualquier profundidad.
    - Las claves del diccionario aplanado deben ser strings que representen la ruta (por ejemplo, "a.b.c").

6. Filtrador de diccionario: Implementa una función que filtre un diccionario basándose en una función de predicado que se aplique a los valores.
    - La función debe aceptar el diccionario y una función de predicado como argumentos.
    - Usa una comprensión de diccionarios para crear el nuevo diccionario filtrado.

7. Ordenador de diccionario por valores: Escribe una función que ordene un diccionario basándose en sus valores y devuelva una lista de tuplas (clave, valor) ordenadas.
    - Utiliza la función sorted() con un argumento key personalizado.
    - Permite que la función acepte un argumento para especificar orden ascendente o descendente.

### Técnicas de Iteración(7)
1. Iterador de diccionario: Escribe una función que tome un diccionario y imprima sus claves y valores en formato "clave: valor" utilizando un bucle for y el método items().
    - Usa desempaquetado de tuplas en el bucle for.
    - Maneja el caso de un diccionario vacío.

2. Enumerador de lista: Crea una función que tome una lista y imprima cada elemento junto con su índice utilizando la función enumerate().
    - El formato de impresión debe ser "Índice: X, Valor: Y".
    - Permite que la función acepte un parámetro opcional para especificar el índice de inicio.

3. Iterador de múltiples listas: Implementa una función que tome dos o más listas de igual longitud y las itere en paralelo utilizando zip(), imprimiendo los elementos correspondientes.
    - Usa *args para permitir un número variable de listas como entrada.
    - Maneja el caso en que las listas tengan longitudes diferentes.

4. Iterador inverso: Escribe una función que itere sobre una secuencia en orden inverso utilizando reversed() y imprima cada elemento.
    - La función debe funcionar con listas, tuplas y cadenas.
    - Incluye un parámetro opcional para especificar cuántos elementos invertir.

5. Iterador de matriz: Crea una función que itere sobre una matriz (lista de listas) e imprima cada elemento junto con sus índices de fila y columna.
    - Utiliza bucles for anidados y enumerate() para este ejercicio.
    - Formatea la salida como "Elemento en (fila, columna): valor".

6. Iterador de archivo: Implementa una función que lea un archivo línea por línea e imprima cada línea precedida por su número de línea.
    - Utiliza enumerate() para obtener el número de línea.
    - Maneja apropiadamente la apertura y cierre del archivo.

7. Iterador personalizado: Crea una clase que implemente un iterador personalizado que genere los primeros n números de la secuencia de Fibonacci.
    - Implementa los métodos iter() y next().
    - Lanza StopIteration cuando se alcance el límite n.

### Condiciones(7)
1. Verificador de rango: Escribe una función que tome un número y verifique si está dentro de un rango específico (por ejemplo, entre 0 y 100, inclusive).
    - Utiliza operadores de comparación encadenados.
    - Devuelve True si está en el rango, False en caso contrario.

2. Clasificador de triángulos: Crea una función que tome las longitudes de tres lados y determine si forman un triángulo equilátero, isósceles o escaleno.
    - Usa múltiples condiciones if-elif-else.
    - Verifica primero si los lados pueden formar un triángulo válido.

3. Evaluador de expresiones lógicas: Implementa una función que tome tres valores booleanos y evalúe una expresión lógica compleja.
    - Usa operadores and, or, y not.
    - Incluye paréntesis para controlar el orden de evaluación.

4. Comparador de secuencias: Escribe una función que compare dos secuencias (listas, tuplas o cadenas) y determine su relación (igual, subconjunto, superconjunto, o ninguna relación).
    - Utiliza operadores de comparación para secuencias.
    - Maneja el caso de tipos de secuencias diferentes.

5. Verificador de año bisiesto: Crea una función que determine si un año dado es bisiesto.
    - Un año es bisiesto si es divisible por 4, excepto aquellos divisibles por 100 que no son divisibles por 400.
    - Usa operadores de comparación y operadores lógicos para construir la condición.

6. Evaluador de contraseñas: Implementa una función que evalúe la fortaleza de una contraseña basándose en múltiples criterios (longitud, presencia de mayúsculas, minúsculas, números y caracteres especiales).
    - Utiliza múltiples condiciones y el operador in para verificar la presencia de tipos de caracteres.
    - Devuelve una calificación (por ejemplo, "débil", "media", "fuerte") basada en cuántos criterios cumple.

7. Calculadora de descuentos: Escribe una función que calcule el descuento aplicable a una compra basándose en múltiples condiciones (monto de la compra, día de la semana, si el cliente es miembro, etc.).
    - Usa una combinación de condiciones anidadas y operadores lógicos.
    - Implementa al menos tres niveles de descuento basados en diferentes combinaciones de condiciones.

### Operador Walrus(7)
1. Buscador de elementos: Escribe una función que busque un elemento en una lista y, si lo encuentra, imprima su posición. Usa el operador walrus en un bucle while.
    - Utiliza el método index() dentro de la condición del while con el operador walrus.
    - Si el elemento no se encuentra, imprime un mensaje apropiado.

2. Validador de entrada: Crea un programa que solicite al usuario que ingrese un número entre 1 y 10, usando el operador walrus en un bucle while para validar la entrada.
    - Usa input() con el operador walrus en la condición del while.
    - Convierte la entrada a int y verifica si está en el rango correcto.

3. Procesador de cadenas: Implementa una función que procese una cadena mientras su longitud sea mayor que cero, utilizando el operador walrus para asignar y verificar la longitud en cada iteración.
    - Usa len() con el operador walrus en la condición del while.
    - En cada iteración, elimina el primer carácter de la cadena y procésalo de alguna manera.

4. Calculadora de estadísticas: Escribe un programa que calcule la media de una serie de números ingresados por el usuario, usando el operador walrus para asignar y verificar cada entrada.
    - Utiliza input() con el operador walrus para obtener números hasta que el usuario ingrese una cadena vacía.
    - Calcula y muestra la media de los números ingresados.

5. Generador de secuencias: Crea una función generadora que produzca una secuencia de números, usando el operador walrus para actualizar y verificar el estado del generador.
    - Usa el operador walrus en la condición de un bucle while dentro del generador.
    - La secuencia debe terminar cuando se alcance cierto valor o condición.

6. Analizador de listas: Implementa una función que analice una lista de elementos, usando el operador walrus para asignar y verificar propiedades de cada elemento en un bucle for.
    - Utiliza el operador walrus para asignar el resultado de una función de comprobación a una variable.
    - Realiza diferentes acciones basadas en el resultado de la comprobación.

7. Lector de archivo eficiente: Escribe una función que lea un archivo línea por línea, procesando solo las líneas que cumplan cierta condición, usando el operador walrus para asignar y verificar cada línea leída.
    - Usa el método readline() con el operador walrus en un bucle while.
    - Procesa las líneas que cumplan con la condición especificada.

### Comparaciones de Secuencias y Otros Tipos(7)
1. Comparador de listas: Escribe una función que compare dos listas y determine si son iguales, independientemente del orden de los elementos.
    - Utiliza la conversión a conjuntos para comparar el contenido.
    - La función debe devolver True si las listas tienen los mismos elementos, False en caso contrario.

2. Ordenador lexicográfico: Implementa una función que ordene una lista de cadenas en orden lexicográfico.
    - Usa la función sorted() con un key personalizado si es necesario.
    - Asegúrate de que la función maneje correctamente mayúsculas y minúsculas.

3. Comparador de tuplas: Crea una función que compare dos tuplas y determine cuál es "mayor" según el orden lexicográfico.
    - La función debe devolver -1 si la primera tupla es menor, 0 si son iguales, y 1 si la primera es mayor.
    - Maneja el caso de tuplas de diferentes longitudes.

4. Buscador de subcadenas: Escribe una función que determine si una cadena es una subcadena de otra, utilizando solo operadores de comparación.
    - No uses métodos de cadenas como find() o in.
    - La función debe devolver el índice donde comienza la subcadena, o -1 si no se encuentra.

5. Comparador de versiones: Implementa una función que compare dos números de versión (por ejemplo, "1.2.3" y "1.2.4") y determine cuál es mayor.
    - Divide las cadenas en componentes y compáralos uno por uno.
    - Maneja correctamente versiones con diferente número de componentes.

6. Ordenador personalizado: Crea una función que ordene una lista de objetos personalizados basándose en múltiples criterios.
    - Define una clase con al menos tres atributos.
    - Implementa un método lt() en la clase para permitir la comparación.
    - Usa sorted() con un key que utilice tuplas para comparación multi-criterio.

7. Comparador de estructuras anidadas: Escribe una función que compare dos estructuras de datos anidadas (que pueden contener listas, tuplas y diccionarios) y determine si son iguales.
    - La función debe ser recursiva para manejar estructuras de cualquier profundidad.
    - Asegúrate de que la función maneje correctamente diferentes tipos de colecciones.

## Secciones tratadas hoy
- 5. <a href="https://docs.python.org/es/3.14/tutorial/datastructures.html" target="_blank">Estructuras de datos</a>
    - 5.1. Más sobre listas
        - 5.1.1. Usar listas como pilas
        - 5.1.2. Usar listas como colas
        - 5.1.3. Comprensión de listas
        - 5.1.4. Listas por comprensión anidadas
    - 5.2. La instrucción del
    - 5.3. Tuplas y secuencias
    - 5.4. Conjuntos
    - 5.5. Diccionarios
    - 5.6. Técnicas de iteración
    - 5.7. Más acerca de condiciones
    - 5.8. Comparando secuencias y otros tipos

##### Artículos relacionados
- [El tutorial de Python #3: La clave para organizar y reutilizar tu código](/blog/python/tutorial-python-04/) >>
- << [El tutorial de Python #2: Control de Flujo Avanzado y Funciones](/blog/python/tutorial-python-02/)

###### Podría interesarte también
###### • [Python: El Lenguaje Preferido para Inteligencia Artificial](/blog/python/)