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
    - [Listas](#Listas)
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
Las cadenas se pueden concatenar con + y repetir con *:
```python
>>> 3 * 'un' + 'ium'
'unununium'
```


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