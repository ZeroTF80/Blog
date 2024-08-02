---
title: 'El tutorial de Python #1: Tutorial oficial'
technology: 'Python'
description: 'Descubre Python desde cero con la guía oficial. Aprende conceptos clave y técnicas prácticas para programar con confianza.'
pubDate: 'aug 1 2024'
heroImage: '/Python.jpg'
---
## Glosario
- [Introducción al Tutorial Oficial de Python](#introducción-al-tutorial-oficial-de-python)
    - [¿Por qué este tutorial?](#por-qué-este-tutorial)
- [Explorando Python](#explorando-python)
- [Usando el Intérprete de Python](#usando-el-intérprete-de-python)
    - [Aritmetica](#aritmetica)
    - [Manipulación de texto](#manipulación-de-texto)
    - [Listas](#listas)
- [Consignas](#consignas)
    - [Aritmetica(7)](#aritmetica7)
    - [Manipulación de texto(7)](#manipulación-de-texto7)
    - [Listas(7)](#listas7)
- [Secciones tratadas hoy](#secciones-tratadas-hoy)

## Introducción al Tutorial Oficial de Python
Bienvenido al mundo de Python, un lenguaje de programación versátil, potente y fácil de aprender. El <a href="https://docs.python.org/es/3.14/tutorial/" target="_blank">Tutorial oficial de Python</a> es tu recurso definitivo para dominar este lenguaje, ya seas un principiante entusiasta o un programador experimentado buscando ampliar tus habilidades.

### ¿Por qué este tutorial?
- Creado por los desarrolladores de Python

- Cubre desde conceptos básicos hasta técnicas avanzadas

- Ejemplos prácticos y explicaciones claras

- Actualizado regularmente con las últimas características

En este blog, te guiaremos a través de las secciones clave del tutorial oficial, ofreciendo insights, consejos prácticos y ejemplos para ayudarte a aprovechar al máximo este valioso recurso.

Prepárate para sumergirte en Python y descubrir por qué es uno de los lenguajes más populares y demandados en la industria tecnológica actual. ¡Comencemos!

## Explorando Python
Python es ideal para automatizar tareas repetitivas, crear bases de datos personalizadas, interfaces gráficas o juegos simples. Es útil tanto para desarrolladores profesionales como para aficionados debido a su facilidad de uso y amplia disponibilidad en Windows, macOS y Unix.

Ofrece una estructura robusta para programas grandes y tiene tipos de datos avanzados como listas y diccionarios. Python permite escribir programas compactos y legibles, y su intérprete interactivo ahorra tiempo al no requerir compilación.

Además, es extensible: puedes agregar nuevas funciones o módulos en C y usar Python como lenguaje de extensión para aplicaciones. Nacido de la inspiración del programa "Monty Python's Flying Circus.

## Usando el Intérprete de Python
El intérprete de Python es esencial para ejecutar scripts y probar código de manera interactiva. En sistemas Unix, puedes iniciarlo escribiendo `python3.12` en la terminal, mientras que en Windows, se puede usar `python3.12` o `py` si tienes el lanzador `py.exe`.

En este modo interactivo, identificado por el prompt >>>, puedes escribir y ejecutar comandos línea por línea, lo cual es ideal para experimentar con código rápidamente.

De forma predeterminada, los archivos fuente de Python están codificados en UTF-8, lo que permite el uso de caracteres de la mayoría de los idiomas en literales, identificadores y comentarios. Sin embargo, la biblioteca estándar usa solo caracteres ASCII para identificadores, una convención que se recomienda seguir para garantizar la portabilidad del código.

Los comentarios en Python comienzan con `#` y se extienden hasta el final de la línea. Pueden aparecer al inicio de la línea o después del código, pero no dentro de una cadena de caracteres. Los comentarios son para aclarar el código y no son interpretados por Python.
```python
# Soy un comentario.
```
### Aritmetica
El intérprete de Python funciona como una calculadora: puedes introducir expresiones y obtener los valores. Usa operadores como `+`, `-`, `*`, y `/` para operaciones aritméticas, y paréntesis `()` para agrupar. Por ejemplo:
```python
>>> 2 + 2
4
>>> 50 - 5*6
20
>>> (50 - 5*6) / 4
5.0
>>> 8 / 5  # division always returns a floating-point number
1.6
```
Los números enteros (ej. 2, 4, 20) son de tipo int, mientras que los números con parte fraccionaria (ej. 5.0, 1.6) son de tipo float.

La división `/` siempre retorna un número decimal de punto float. Para hacer floor division y obtener un número entero como resultado puede usarse el operador `//`; para calcular el resto puedes usar `%`:
```python
>>> 17 / 3  # classic division returns a float
5.666666666666667
>>> 17 // 3  # floor division discards the fractional part
5
>>> 17 % 3  # the % operator returns the remainder of the division
2
>>> 5 * 3 + 2  # floored quotient * divisor + remainder
17
```
Con Python, es posible usar el operador `**` para calcular potencias
```python
>>> 5 ** 2  # 5 squared
25
>>> 2 ** 7  # 2 to the power of 7
128
```
El signo igual (`=`) se usa para asignar valores a variables. Por ejemplo:
```python
>>> width = 20                                               
>>> height = 5 * 9
>>> width * height
900
```
Si una variable no está «definida» (no se le ha asignado un valor), al intentar usarla dará un error:
```python
>>> n  # try to access an undefined variable
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'n' is not defined
```
Python tiene soporte completo para punto float; los operadores con operandos mixtos convertirán los enteros a punto flotante. Por ejemplo:
```python
>>> 5 * 2.0
10.0
```
En el modo interactivo, la última expresión impresa se asigna a la variable `_`. Esto facilita continuar con cálculos. Por ejemplo:
```python
>>> 10 + 5
15
>>> _ * 2
30
```
La variable `_` debe ser tratada como de solo lectura. No le asignes explícitamente un valor, ya que esto creará una variable local independiente que enmascarará la variable mágica.

Además de `int` y `float`, Python admite otros tipos de números, como `Decimal` y `Fraction`. También tiene soporte para números complejos, usando el sufijo `j` o `J` para indicar la parte imaginaria, por ejemplo, `3+5j`.

### Manipulación de Texto
En Python, el tipo str (cadenas de caracteres / string) se utiliza para manipular texto, desde caracteres individuales como `!`, hasta palabras como `conejo`, nombres como `París`, y oraciones completas como `¡Te tengo a la vista!`. Los textos pueden ir entre comillas simples ('...') o dobles ("..."), produciendo el mismo resultado.
```python
>>> 'Conejo!'
'Conejo!'
>>> 'París'
'París'
>>> '¡Te tengo a la vista!'
'¡Te tengo a la vista!'

# Para citar una cita, debemos \'escapar\' la cita precediéndola con \\
# Alternativamente, podemos usar el otro tipo de comillas:
>>> 'Para citar una cita, debemos "escapar" la cita precediéndola con'
'Para citar una cita, debemos "escapar" la cita precediéndola con'
```
En el intérprete de Python, la definición de cadena y la cadena de salida pueden verse diferentes. La función print() produce una salida más legible, omitiendo las comillas de encuadre e imprimiendo caracteres escapados y especiales:
```python
>>> s = 'First line.\nSecond line.'  # \n significa nueva línea
>>> s  # sin print(), los caracteres especiales se incluyen en la cadena
'First line.\nSecond line.'
>>> print(s)  # con print(), los caracteres especiales se interpretan, por lo que \n produce una nueva línea
First line.
Second line.
```
Para evitar que los caracteres precedidos por `\` se interpreten como especiales, se pueden usar cadenas sin formato con una `r` antes de las comillas:
```python
>>> print('C:\some\name')  # aquí \n significa nueva línea
C:\some
ame
>>> print(r'C:\some\name')  # nota la r antes de la comilla
C:\some\name
```
Las cadenas de texto literales pueden contener múltiples líneas usando triples comillas (`"""..."""` o `'''...'''`). Los fines de línea se incluyen automáticamente, pero se puede evitar con `\` al final de la línea:
```python
>>> print("""\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
""")
```
Esto produce la siguiente salida:
```Python
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
```
Las cadenas se pueden concatenar con `+` y repetir con `*`:
```python
>>> 3 * 'un' + 'ium'
'unununium'
```
Esto es útil para dividir cadenas largas:
```python
>>> text = ('Put several strings within parentheses '
            'to have them joined together.')
>>> text
'Put several strings within parentheses to have them joined together.'
```
Esto solo funciona con literales, no con variables o expresiones:
```python
>>> prefix = 'Py'
>>> prefix 'thon'  # no se puede concatenar una variable y una cadena literal
  File "<stdin>", line 1
    prefix 'thon'
           ^^^^^^
SyntaxError: invalid syntax

>>> ('un' * 3) 'ium'
  File "<stdin>", line 1
    ('un' * 3) 'ium'
               ^^^^^
SyntaxError: invalid syntax
```
Para concatenar variables o una variable y un literal, usa `+`:
```python
>>> prefix + 'thon'
'Python'
```
Las cadenas de texto se pueden indexar, comenzando desde el índice 0. En Python, no hay un tipo de dato diferente para los caracteres; un carácter es simplemente una cadena de longitud uno:
```python
>>> word = 'Python'
>>> word[0]  # carácter en la posición 0
'P'
>>> word[5]  # carácter en la posición 5
'n'
```
Los índices también pueden ser negativos, comenzando desde la derecha:
```python
>>> word[-1]  # último carácter
'n'
>>> word[-2]  # penúltimo carácter
'o'
>>> word[-6]  # primer carácter
'P'
```
Los índices de slicing tienen valores por defecto útiles:
```python
>>> word[:2]   # caracteres desde el inicio hasta la posición 2 (excluida)
'Py'
>>> word[4:]   # caracteres desde la posición 4 (incluida) hasta el final
'on'
>>> word[-2:]  # caracteres desde el penúltimo (incluido) hasta el final
'on'
```
El inicio siempre se incluye y el final siempre se excluye, lo que asegura que `s[:i] + s[i:]` siempre sea igual a `s`:
```python
>>> word[:2] + word[2:]
'Python'
>>> word[:4] + word[4:]
'Python'
```
Los índices apuntan entre caracteres, con el borde izquierdo del primer carácter numerado 0. Los índices negativos comienzan desde -1:
```python
 +---+---+---+---+---+---+
 | P | y | t | h | o | n |
 +---+---+---+---+---+---+
 0   1   2   3   4   5   6
-6  -5  -4  -3  -2  -1
```
La rebanada de `i` a `j` consta de todos los caracteres entre los bordes etiquetados `i` y `j`.

La longitud de una rebanada es la diferencia de los índices, si ambos están dentro de los límites. Por ejemplo, la longitud de `word[1:3]` es 2.

Si intentas usar un índice que excede la longitud de la cadena, obtendrás un error:
```python
>>> word[42]  # la palabra solo tiene 6 caracteres
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: string index out of range

```
Sin embargo, los índices fuera de rango se manejan sin problemas al usar slicing:
```python
>>> word[4:42]
'on'
>>> word[42:]
''
```
Las cadenas en Python son inmutables, lo que significa que no se pueden modificar. Intentar asignar un valor a una posición específica en la cadena causará un error:
```python
>>> word[0] = 'J'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment

>>> word[2:] = 'py'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
```
Para modificar una cadena, debes crear una nueva:
```python
>>> 'J' + word[1:]
'Jython'
>>> word[:2] + 'py'
'Pypy'
```
La función incorporada len() retorna la longitud de una cadena:
```python
>>> s = 'supercalifragilisticexpialidocious'
>>> len(s)
34
```

### Listas
Python tiene tipos de datos compuestos para agrupar valores, siendo el más versátil la lista. Las listas se escriben con valores separados por comas entre corchetes y pueden contener diferentes tipos de ítems, aunque usualmente son del mismo tipo.
```python
squares = [1, 4, 9, 16, 25]
squares
[1, 4, 9, 16, 25]
```
Al igual que las cadenas, las listas pueden ser indexadas y segmentadas:
```python
squares[0]  # primer ítem
1
squares[-1]  # último ítem
25
squares[-3:]  # sublista desde el tercer ítem desde el final
[9, 16, 25]
```
Las listas admiten operaciones como concatenación:
```python
squares + [36, 49, 64, 81, 100]
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```
A diferencia de las cadenas, las listas son mutables y su contenido se puede modificar:
```python
cubes = [1, 8, 27, 65, 125]  # algo está mal aquí
4 ** 3  # el cubo de 4 es 64, no 65!
64
cubes[3] = 64  # reemplaza el valor incorrecto
cubes
[1, 8, 27, 64, 125]
```
Puedes agregar nuevos ítems al final de la lista con el método `append`:
```python
cubes.append(216)  # agrega el cubo de 6
cubes.append(7 ** 3)  # y el cubo de 7
cubes
[1, 8, 27, 64, 125, 216, 343]
```
En Python, la asignación de listas no copia los datos; todas las variables referencian la misma lista. Cualquier cambio hecho a la lista a través de una variable se reflejará en todas las variables que la referencian:
```python
rgb = ["Red", "Green", "Blue"]
rgba = rgb
id(rgb) == id(rgba)  # referencian el mismo objeto
True
rgba.append("Alpha")
rgb
["Red", "Green", "Blue", "Alpha"]
```
Las operaciones de rebanado devuelven una nueva lista con los elementos solicitados, como en el siguiente ejemplo de copia superficial de la lista:
```python
correct_rgba = rgba[:]
correct_rgba[-1] = "Alpha"
correct_rgba
["Red", "Green", "Blue", "Alpha"]
rgba
["Red", "Green", "Blue", "Alpha"]
```
También puedes asignar a una rebanada, lo que puede cambiar la longitud de la lista o vaciarla:
```python
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
letters[2:5] = ['C', 'D', 'E']  # reemplaza algunos valores
letters
['a', 'b', 'C', 'D', 'E', 'f', 'g']
letters[2:5] = []  # ahora los elimina
letters
['a', 'b', 'f', 'g']
letters[:] = []  # vacía la lista completamente
letters
[]
```
La función len() también funciona con listas:
```python
letters = ['a', 'b', 'c', 'd']
len(letters)
4
```
Es posible anidar listas (listas que contienen otras listas):
```python
a = ['a', 'b', 'c']
n = [1, 2, 3]
x = [a, n]
x
[['a', 'b', 'c'], [1, 2, 3]]
x[0]
['a', 'b', 'c']
x[0][1]
'b'
```
Puedes usar Python para tareas más complejas, como calcular la secuencia de Fibonacci:
```python
# Serie de Fibonacci:
# la suma de dos elementos define el siguiente
a, b = 0, 1
while a < 10:
    print(a)
    a, b = b, a + b
```
Este ejemplo introduce varias características nuevas. La asignación múltiple permite que las variables `a` y `b` obtengan nuevos valores simultáneamente. El bucle `while` se ejecuta mientras la condición sea verdadera. En Python, cualquier valor distinto de cero es verdadero, y las secuencias vacías son falsas.

El cuerpo del bucle está indentado, lo que agrupa las declaraciones. La función `print()` escribe el valor de los argumentos que se le dan, diferenciándose de escribir la expresión directamente, ya que maneja múltiples argumentos y formatea la salida de manera legible.

El parámetro `end` en `print()` evita el salto de línea al final de la salida, permitiendo una terminación personalizada:
```python
a, b = 0, 1
while a < 1000:
    print(a, end=',')
    a, b = b, a + b

```
Esta versión imprime la serie de Fibonacci hasta 1000, separada por comas.

#### Notas de pie
Precedencia de operadores: En Python, el operador de exponenciación (`**`) tiene mayor prioridad que el operador de negación (`-`). Por lo tanto, la expresión `-3**2` se interpreta como `-(3**2)`, lo que da como resultado `-9`. Para obtener `9`, debes usar paréntesis: `(-3)**2`.

Uso de comillas: En Python, los caracteres especiales como `\n` (nueva línea) tienen el mismo significado tanto en comillas simples (`'...'`) como en comillas dobles (`"..."`). La diferencia es que dentro de las comillas simples no necesitas escapar las comillas dobles (`"`) y dentro de las comillas dobles no necesitas escapar las comillas simples (`'`).

## Consignas
Hemos adquirido conocimientos valiosos y tenemos los recursos necesarios a nuestra disposición. Ahora es el momento de aplicar lo aprendido y comenzar a crear.
<a href="https://github.com/AngelB-Dev/El-tutorial-de-Python" target="_blank">Repositorio de GitHub</a>

### Aritmetica(7)
1. Calcula el área de un rectángulo con base 15 y altura 8.

2. Divide 100 entre 6 y muestra el resultado como número decimal.

3. Calcula cuántos grupos completos de 4 se pueden formar con 30 elementos y cuántos elementos sobran.

4. Eleva 3 al cubo.

5. Calcula el 15% de 80 utilizando operaciones aritméticas básicas.

6. Suma los números del 1 al 5 y luego multiplica el resultado por 2.

7. Determina si 64 es divisible por 8 utilizando el operador de módulo.

### Manipulación de texto(7)
1. Crea una cadena que incluya un diálogo, utilizando comillas dobles para la cadena principal y comillas simples para las palabras del personaje.

2. Define una cadena de texto que represente un poema corto de tres líneas, usando triple comillas y caracteres de escape para el formato.

3. Crea una cadena sin formato (raw string) que represente una expresión regular simple, por ejemplo, para encontrar números de teléfono.

4. Combina tres variables de cadena diferentes para formar una dirección de correo electrónico completa.

5. Crea una cadena que repita un emoji (por ejemplo, 😊) cinco veces utilizando operadores de cadena.

6. Define una cadena larga que represente un párrafo de un artículo, dividiéndola en múltiples líneas de código pero que se muestre como un párrafo continuo al imprimirla.

7. Demuestra la diferencia entre usar `len()` en una cadena con caracteres Unicode (como emojis) y en una cadena con solo caracteres ASCII.

### Listas(7)
1. Crea una lista llamada `primes` con los primeros 5 números primos y luego imprime el tercer elemento de la lista.

2. Dada la lista `temperatures = [20, 25, 18, 30, 15]`, corrige el valor incorrecto (18) reemplazándolo por la temperatura correcta de 28.

3. Crea una lista llamada `fruits` con tres frutas, y luego añade dos frutas más al final de la lista utilizando el método `append()`.

4. Haz una copia superficial de una lista de animales y demuestra que agregar un elemento a la copia no afecta a la lista original.

5. Crea una lista de números del 1 al 7, luego reemplaza los elementos en las posiciones 3 a 5 (inclusive) por sus cuadrados.

6. Crea una lista anidada que contenga dos sublistas: una con los días de la semana laboral y otra con los días del fin de semana. Luego, accede e imprime el primer día del fin de semana.

7. Escribe un programa que genere e imprima una lista de los primeros 8 números triangulares (1, 3, 6, 10, 15, 21, 28, 36).

## Secciones tratadas hoy
- 1. Abriendo el apetito
- 2. Usando el intérprete de Python
    - 2.1. Invocar el intérprete
        - 2.1.1. Paso de argumentos
    - 2.2. El intérprete y su entorno
- 3. Una introducción informal a Python
    - 3.1. Usando Python como una calculadora
        - 3.1.1. Números
        - 3.1.2. Texto
        - 3.1.3. Listas
    - 3.2. Primeros pasos hacia la programación

##### Artículos relacionados
- [El tutorial de Python #2: Más herramientas para control de flujo](/blog/python/tutorial-python-02/) >>

###### Podría interesarte también 
###### • [Python: El Lenguaje Preferido para Inteligencia Artificial](/blog/python/)