---
title: 'El tutorial de Python #2: Control de Flujo Avanzado y Funciones'
technology: 'Python'
description: 'Profundiza en las estructuras de control y funciones de Python. Aprende sobre condicionales, bucles, funciones lambda y más para escribir código más eficiente y elegante.'
pubDate: 'aug 2 2024'
heroImage: '/Python.jpg'
---
## Glosario
- [Estructuras de Control](#estructuras-de-control)
    - [Condicionales (IF)](#condicionales-if)
    - [Bucle (for)](#bucle-for)
        - [Iterables](#iterables)
    - [Función range()](#función-range)
    - [Control de bucles](#control-de-bucles)
        - [break](#break)
        - [continue](#continue)
        - [else](#else)
    - [pass](#pass)
    - [match](#match)
- [Funciones](#funciones)
    - [Argumentos de funciones](#argumentos-de-funciones)
        - [Lista de argumentos arbitrarios](#lista-de-argumentos-arbitrarios)
        - [Desempaquetado de argumentos](#desempaquetado-de-argumentos)
    - [Expresiones lambda](#expresiones-lambda)
    - [Documentación de funciones](#documentación-de-funciones)
        - [Cadenas de documentación](#cadenas-de-documentación)
        - [Anotación de funciones](#anotación-de-funciones)
- [Secciones tratadas hoy](#secciones-tratadas-hoy)

## Estructuras de Control
Las estructuras de control son elementos fundamentales en Python que dirigen el flujo de ejecución de un programa, permitiéndonos tomar decisiones y repetir acciones de manera eficiente. En esta sección, exploraremos las principales estructuras como condicionales (`IF`), bucles (`For`), la función `Range()`, el control de bucles con `break`, `continue` y `else`, la declaración `pass`, y la estructura `match` introducida en Python 3.10. Dominar estas herramientas es esencial para escribir código Python elegante y efectivo, y a través de ejemplos prácticos, aprenderemos cómo y cuándo utilizar cada una de ellas en situaciones reales de programación.

### Condicionales (IF)
El `if` es un concepto fundamental en la programación que permite la ejecución condicional de código. En Python, esta estructura de control evalúa una condición y, si es verdadera, ejecuta un bloque de código específico. Se puede extender con `elif` para múltiples condiciones y `else` para manejar todos los demás casos, proporcionando un flujo de control flexible y poderoso.
```python
edad = 18
if edad < 18:
    print("Eres menor de edad")
elif edad == 18:
    print("Acabas de alcanzar la mayoría de edad")
else:
    print("Eres mayor de edad")
```

### Bucle (for):
El bucle `for` en Python es un concepto de iteración que permite recorrer secuencias de manera eficiente. A diferencia de otros lenguajes, el `for` de Python está diseñado para iterar directamente sobre los elementos de cualquier secuencia (como listas, tuplas o cadenas), lo que lo hace intuitivo y versátil. Este concepto es fundamental para procesar colecciones de datos de manera elegante y concisa.
```python
frutas = ["manzana", "banana", "cereza"]
for fruta in frutas:
    print(f"Me gusta comer {fruta}")
```

#### Iterables
El concepto de iterable es fundamental en Python. Un iterable es cualquier objeto capaz de devolver sus elementos uno a la vez. Este concepto permite trabajar con secuencias de datos de manera eficiente, ya que no requiere que todos los elementos estén en memoria simultáneamente. Los iterables son la base de muchas operaciones en Python, desde bucles `for` hasta comprensiones de listas y funciones de orden superior.

### Función range():
`range()` es un concepto que genera secuencias numéricas de manera eficiente. Es una herramienta esencial en Python, especialmente útil en combinación con bucles `for`. El concepto de `range()` permite generar secuencias personalizadas con diferentes puntos de inicio, fin y pasos, lo que facilita la creación de iteraciones numéricas complejas sin necesidad de definir listas explícitamente.
```python
for i in range(5):
    print(i)  # Imprime 0, 1, 2, 3, 4
```

### Control de bucles:
Estos son conceptos de control de flujo dentro de bucles. Permiten un control más fino sobre la ejecución de bucles, facilitando el manejo de casos especiales y la creación de lógicas de iteración más sofisticadas.

#### break
La sentencia `break` permite salir inmediatamente de un bucle. Cuando se encuentra dentro de un bucle anidado, `break` solo saldrá del bucle más interno.
```python
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(f"{n} es divisible por {x}")
            break
    if x == n - 1:
        print(f"{n} es un número primo")
```

#### continue
El `continue` es un concepto de control de flujo dentro de bucles que permite saltar a la siguiente iteración del ciclo inmediatamente, omitiendo el resto del código en el cuerpo del bucle para esa iteración específica. Este concepto es útil cuando se quiere evitar la ejecución de ciertas partes del código en condiciones específicas, sin terminar completamente el bucle.
```python
for num in range(2, 10):
    if num % 2 == 0:
        print(f"Encontrado un número par: {num}")
        continue
    print(f"Encontrado un número impar: {num}")
```

#### else
La cláusula `else` en un bucle proporciona un bloque que se ejecuta cuando el bucle termina normalmente (sin `break`). Es similar al `else` en una estructura try-except, ya que se ejecuta cuando no ocurre una condición específica (en este caso, un `break`).
```python
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(f"{n} es divisible por {x}")
            break
    else:
        print(f"{n} es un número primo")
```

### pass
`pass` es un concepto en Python que representa una operación nula. Se utiliza cuando se requiere sintácticamente una declaración, pero no se desea ejecutar ningún código. Este concepto es útil como marcador de posición en funciones, clases o condicionales que aún no se han implementado, permitiendo al programador esbozar la estructura del código sin entrar en detalles de implementación.
```python
class MiClaseVacia:
    pass
```

### match
`match` es un concepto relativamente nuevo en Python (introducido en Python 3.10) que proporciona una forma avanzada de comparación de patrones. Similar a la estructura `switch` en otros lenguajes, pero más potente, `match` permite comparar una expresión contra múltiples patrones y ejecutar código basado en la coincidencia. Este concepto facilita la escritura de código más limpio y expresivo para manejar múltiples casos o descomponer estructuras de datos complejas.
```python
def analizador_http(status):
    match status:
        case 400:
            return "Bad request"
        case 404:
            return "Not found"
        case 418:
            return "I'm a teapot"
        case _:
            return "Something's wrong with the internet"
```

#### Patrones en match
Dentro de la sentencia `match`, los patrones son un concepto clave. Pueden ser simples (como literales) o complejos (como estructuras de datos). Los patrones permiten no solo comparar valores, sino también desempaquetar y asignar partes de la estructura de datos coincidente a variables. Este concepto hace que `match` sea especialmente poderoso para trabajar con datos estructurados y realizar coincidencias complejas de manera concisa.

#### Patrones de desempaquetado
Los patrones en `match` pueden desempaquetar estructuras de datos como tuplas y objetos, asignando sus componentes a variables. Este concepto permite una forma elegante y concisa de extraer y trabajar con partes específicas de estructuras de datos complejas.
```python
match point:
    case (0, 0):
        print("Origin")
    case (0, y):
        print(f"Y={y}")
    case (x, 0):
        print(f"X={x}")
    case (x, y):
        print(f"X={x}, Y={y}")
```

#### Patrones con clases
Se pueden usar nombres de clases seguidos de argumentos para hacer coincidir instancias de clases específicas y capturar sus atributos. Este concepto permite un manejo más orientado a objetos dentro de la estructura `match`.
```python
match point:
    case Point(x=0, y=0):
        print("Origin")
    case Point(x=0, y=y):
        print(f"Y={y}")
```

#### match_args
Este atributo especial en una clase permite definir el orden de los argumentos para patrones posicionales en `match`. Facilita la escritura de patrones más concisos cuando se trabaja con instancias de clases.
```python
class Point:
    __match_args__ = ('x', 'y')
```

#### Patrones anidados
Los patrones en match pueden anidarse, permitiendo coincidencias complejas en estructuras de datos multinivel. Este concepto es poderoso para trabajar con estructuras de datos jerárquicas o complejas.
```python
match points:
    case []:
        print("No points")
    case [Point(0, 0)]:
        print("The origin")
    case [Point(x, y)]:
        print(f"Single point {x}, {y}")

```

#### Guardas en patrones
Se pueden añadir condiciones adicionales a los patrones usando una cláusula `if`. Este concepto permite especificar condiciones más refinadas para cada coincidencia.
```python
match point:
    case Point(x, y) if x == y:
        print(f"The point lies on the diagonal Y=X at {x}")
```

## Funciones
Las funciones en Python son bloques de código reutilizables que realizan una tarea específica. Son una parte fundamental de la programación en Python, permitiendo una amplia gama de técnicas de programación, desde simples encapsulaciones de código hasta patrones de diseño avanzados y programación funcional.
```python
def saludar(nombre):
    return f"Hola, {nombre}!"

print(saludar("Alice"))  # Imprime: Hola, Alice!
```

### Argumentos de funciones
Las funciones en Python ofrecen una gran flexibilidad en la forma de pasar argumentos, lo que permite escribir código más legible y versátil. Un concepto fundamental es el uso de argumentos de palabras clave (o argumentos nombrados), que permiten especificar los valores de los parámetros por su nombre en lugar de su posición. Esto es particularmente útil cuando una función tiene múltiples parámetros opcionales.

Python también permite definir funciones con diferentes tipos de parámetros: posicionales, de palabras clave, o una combinación de ambos. Los parámetros especiales, marcados con `/` y `*`, permiten a los desarrolladores especificar cómo deben pasarse los argumentos a la función. Esto mejora la legibilidad del código y permite un control más preciso sobre cómo se pueden llamar las funciones.

#### Lista de argumentos arbitrarios
Python permite que una función acepte un número arbitrario de argumentos utilizando la sintaxis `*args` para argumentos posicionales y `**kwargs` para argumentos de palabras clave. Esto proporciona una gran flexibilidad en la definición de funciones.
- `*args`: Permite a una función aceptar cualquier número de argumentos posicionales. Estos argumentos se empaquetan en una tupla dentro de la función.

- `**kwargs`: Permite a una función aceptar cualquier número de argumentos de palabras clave. Estos argumentos se empaquetan en un diccionario dentro de la función.
```python
def suma(*args):
    return sum(args)

print(suma(1, 2, 3, 4))  # Imprime: 10
```

#### Desempaquetado de argumentos
Python también permite el desempaquetado de argumentos, que es esencialmente lo opuesto a `*args` y `**kwargs`:
- El operador `*` puede desempaquetar una lista o tupla para pasarla como argumentos separados a una función.

- El operador `**` puede desempaquetar un diccionario para pasar sus elementos como argumentos nombrados.
```python
def suma(a, b, c):
    return a + b + c

numeros = [1, 2, 3]
print(suma(*numeros))  # Imprime: 6
```

### Expresiones lambda
Las expresiones lambda en Python son una forma concisa de crear pequeñas funciones anónimas. Se definen usando la palabra clave `lambda`, seguida de los argumentos, dos puntos, y una única expresión. Las lambda son útiles para crear funciones simples en línea, especialmente como argumentos para funciones de orden superior como `map()`, `filter()`, o `sort()`.

**Características clave**:
- Son funciones de una sola expresión.

- Pueden tener cualquier número de argumentos, pero solo una expresión.

- Son útiles para funciones simples y de corta duración.

- No pueden contener declaraciones o anotaciones.
```python
cuadrado = lambda x: x**2
print(cuadrado(5))  # Imprime: 25
```

### Documentación de funciones
La documentación de funciones es una práctica esencial en Python para mejorar la legibilidad y mantenibilidad del código. Python proporciona varias herramientas y convenciones para documentar funciones de manera efectiva. Las dos principales son las cadenas de documentación (docstrings) y las anotaciones de funciones.

**La documentación adecuada de funciones tiene varios beneficios**:
1. Mejora la comprensión del código para otros desarrolladores (y para ti mismo en el futuro).

2. Facilita el uso de herramientas de generación automática de documentación.

3. Permite el uso de herramientas de análisis estático y verificación de tipos.

4. Mejora la experiencia de desarrollo en entornos de desarrollo integrado (IDEs) con funciones de autocompletado y sugerencias.

#### Cadenas de documentación
Las cadenas de documentación (docstrings) son una característica importante en Python para proporcionar documentación integrada en el código. Son cadenas de texto que aparecen como primera declaración en un módulo, función, clase o método.

**Características**:
- Se definen entre triples comillas (`""" """`).

- Pueden ser de una sola línea o multilínea.

- Son accesibles en tiempo de ejecución a través del atributo `__doc__`.

- Siguen convenciones específicas de formato (PEP 257).
```python
def area_circulo(radio):
    """
    Calcula el área de un círculo.
    
    :param radio: El radio del círculo
    :return: El área del círculo
    """
    import math
    return math.pi * radio**2

print(area_circulo.__doc__)
```

#### Anotación de funciones
Las anotaciones de funciones son una característica de Python que permite añadir metadatos a los parámetros de una función y a su valor de retorno. Aunque no afectan el comportamiento en tiempo de ejecución de la función, son útiles para documentación, verificación de tipos y herramientas de análisis estático.

**Características**:
- Se definen usando dos puntos (`:`) para los parámetros y una flecha (`->`) para el valor de retorno.

- Pueden ser de cualquier tipo, incluyendo tipos complejos o personalizados.

- Se almacenan en el atributo `__annotations__` de la función.

- Son opcionales y no afectan la ejecución de la función.
```python
def saludo(nombre: str) -> str:
    return f"Hola, {nombre}!"

print(saludo.__annotations__)  # Imprime: {'nombre': <class 'str'>, 'return': <class 'str'>}
```

## Consignas
Hemos adquirido conocimientos valiosos y tenemos los recursos necesarios a nuestra disposición. Ahora es el momento de aplicar lo aprendido y comenzar a crear. <a href="https://github.com/AngelB-Dev/El-tutorial-de-Python" target="_blank">Repositorio de GitHub</a>

### Estructura de control (7)

### Funciones (7)

## Secciones tratadas hoy
- 4. Más herramientas para control de flujo
    - 4.1. La sentencia if
    - 4.2. La sentencia for
    - 4.3. La función range()
    - 4.4. Las sentencias break, continue, y else en bucles
    - 4.5. La sentencia pass
    - 4.6. La sentencia match
    - 4.7. Definir funciones
    - 4.8. Más sobre definición de funciones
        - 4.8.1. Argumentos con valores por omisión
        - 4.8.2. Palabras claves como argumentos
        - 4.8.3. Parámetros especiales
            - 4.8.3.1. Argumentos posicionales o de palabras claves
            - 4.8.3.2. Parámetros únicamente posicionales
            - 4.8.3.3. Argumentos únicamente de palabras clave
            - 4.8.3.4. Ejemplos de Funciones
            - 4.8.3.5. Resumen
        - 4.8.4. Listas de argumentos arbitrarios
        - 4.8.5. Desempaquetando una lista de argumentos
        - 4.8.6. Expresiones lambda
        - 4.8.7. Cadenas de texto de documentación
        - 4.8.8. Anotación de funciones
    - 4.9. Intermezzo: Estilo de programación

Estas características hacen que las funciones
- << [El tutorial de Python #1: Tutorial oficial](/blog/python/tutorial-python/)

###### Podría interesarte también
###### • [Python: El Lenguaje Preferido para Inteligencia Artificial](/blog/python/)