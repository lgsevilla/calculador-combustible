# 📘 DWEC02 - Tarea de Evaluación

## Calculadora de Costos de Combustible para una Empresa de Reparto

### 📝 Descripción general

Se desarrollará una aplicación web para calcular los costos de combustible de una empresa de reparto. Inicialmente se cargará una lista de datos en formato JSON en el `LocalStorage`con un histórico de gastos en los viajes realizados por diferentes vehículos entre 2015 y 2020, además se almacenará en el `SessioStorage` una lista con la suma de los gastos de cada año. 

Finalmente, la aplicación generará datos de un gasto de manera aleatoria y habrá que sumar el precio del gasto en el `SessionStorage`, en función del año al que corresponda ese gasto.

⚠️ **<u>*Importante*</u>**: *La parte correspondiente a la generación aleatoria de un gasto te la doy programada. Está comentada al final del archivo main., entre las líneas 23 y 37. Te recomiendo dejar este apartado para el final. Resuelve primero el resto de los ejercicios, y descoménta estas líneas después.*

### 🎯 Objetivos de aprendizaje

- Conocer e implementar la arquitectura básica de una aplicación web en entorno cliente.

- Utilizar estructurad de datos en JavaScript.

- Trabajar con el formato JSON.

- Repasar conceptos de Lenguaje de Marcas

### 🛠️ Ejercicios

#### Ejercicio 1: Arquitectura

- Crear una estructura de directorios basada en el patrón MVVM, e incluye los ficheros adjuntos en los directorios que les corresponda

- Enlaza el archivo `main.js` para que se ejecute cuando arranque la aplicación

- Enlaza en archivo `style.css`para que se carguen los estilos cuando arranque la aplicación

- Separa las responsabilidades de la aplicación en diferentes directorios y respeta el flujo de llamadas: **main-service-data-model**  

#### Ejercicio 2: Acceso a Datos.

- Crea el modelo de datos GastoCombustible en el directorio correspondiente. Este tiene qu8e tener siguientes atributos: 
  
  - id - int
  
  - vehicleType - string
  
  - date - Date
  
  - kilometers - float 
  
  - precioViaje - float

- En el archivo `gasto.data.js`
  
  - Copia y pega los registros del archivo `historicoGastos.json` en la constante `historico_db`para posteriormente leerlos como JSON
  
  - Haciendo uso del modelo de datos, guarda en `GASTOS_DB` un objeto de tipo `GastoCombustible` por cada registro que exista en `historico_db` 
  
  - 

#### Ejercicio 3: Servicio

En `gasto.service.js` tendrás que programar las siguientes funciones:

- `almacenarGastos()`
  
  - Recorre `GASTOS_DB` y va almacenando cada registro en el `LocalStorage`` . Guarda como clave el ID del gasto y como valor el objeto completo en formato JSON.
  
  - Calcula el gasto total para cada año utilizando la variable `gastoAnual` y guárdalo en el `SessionStorage` teniendo en cuenta que la clave tiene que ser el año, y el valor los gastos totales de ese año

⚠️ **<u><em>Importante</em></u>**: *Cuando exportes la función `almacenarGastos()`, nombra a ese objeto como `GastoService`*

- procesarGasto()  
  
  - ⚠️ **<u><em>Importante</em></u>**: Una vez descomentes las líneas indicadas en la introducción, el programa empezará a generar un gasto con datos aleatorios cada 5 segundos y llamará a la función `procesarGasto()` pasandole el gasto en formato json como parámetro.
  
  - Para cada gasto aleatorio que recibas crea un objeto `GastoCombustible`, y en función del año en que se realizó ese gasto, recupera del `sessionStorage` el gasto total de ese año, súmale el precio de ese año y actualízalo en el `sessionStorage`. 
