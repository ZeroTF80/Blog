---
title: 'El tutorial de Python #2: Control de Flujo Avanzado y Funciones'
technology: 'Python'
description: 'Profundiza en las estructuras de control y funciones de Python. Aprende sobre condicionales, bucles, funciones lambda y más para escribir código más eficiente y elegante.'
pubDate: 'aug 2 2024'
heroImage: '/Python.jpg'
---
## Glosario
- [Estructuras de Control](#estructuras-de-control)
    - [Condicionales (IF)](#condicionales)
    - [Bucles (For)](#bucles-for)
    - [Range()](#range)
    - [Control de bucles](#control-de-bucles)
        - [break](#break)
        - [continue](#continue)
        - [else](#else)
    - [pass](#pass)
    - [match](#match)
- [Funciones](#funciones)
    - [Definición de funciones](#definición-de-funciones)
    - [Argumentos de funciones](#argumentos-de-funciones)
        - [Lista de argumentos arbitrarios](#lista-de-argumentos-arbitrarios)
        - [Desempaquetado de argumentos](#desempaquetado-de-argumentos)
    - [Expresiones lambda](#expresiones-lambda)
    - [Documentación de funciones](#documentación-de-funciones)
        - [Cadenas de documentación](#cadenas-de-documentación)
        - [Anotación de funciones](#anotación-de-funciones)
- [Secciones tratadas hoy](#secciones-tratadas-hoy)

## Estructuras de Control
Las estructuras de control son elementos fundamentales en Python que dirigen el flujo de ejecución de un programa, permitiéndonos tomar decisiones y repetir acciones de manera eficiente. En esta sección, exploraremos las principales estructuras como condicionales (IF), bucles (For), la función Range(), el control de bucles con break, continue y else, la declaración pass, y la estructura match introducida en Python 3.10. Dominar estas herramientas es esencial para escribir código Python elegante y efectivo, y a través de ejemplos prácticos, aprenderemos cómo y cuándo utilizar cada una de ellas en situaciones reales de programación.

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

##### Artículos relacionados
- << [El tutorial de Python #1: Tutorial oficial](/blog/python/tutorial-python/)

###### Podría interesarte también
###### • [Python: El Lenguaje Preferido para Inteligencia Artificial](/blog/python/)