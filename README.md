# Parcial 1 - Visualización de gráficas generadas a partir de JSON y CSV

El objetivo de este proyecto es generar gráficas a partir de JSON y CSV hecho por David Andres Ramirez - 201532981

## Instalación

Se está utilizando mLab, que es una base de datos Mongo externa. Debido a esto, no hay que cargar datos ya que todo se encuentra allí.

Si se quiere correr el proyecto localmente, se debe ubicar dentro de la carpeta *front* que está dentro del proyecto, para instalar los modulos necesarios para usar el programa. Una vez allí, se debe correr el siguiente comando. 

`
npm install
`

Cuando se hayan instalado los módulos, ahora se debe crear el build que es un html estático de esta carpeta. Para esto, se debe ejecutar la siguiente linea de comando.

`
npm run build
`

Ahora, debemos devolvernos a la carpeta principal del proyecto, es decir, salirse de la carpeta *front*. Una vez allí, vamos a instalar los módulos que requiere el back. Para esto, corremos la siguiente linea de comando.

`
npm install
`

Ya finalizado este paso, vamos a iniciar la aplicación corriendo el siguiente comando.

`
npm start
`

Ya puedes acceder a la página 

`
http://localhost:3001
`

##Notas para tener el cuenta

-Se necesitan al menos 20 elementos en la base de datos para que la aplicación funcione. La base de datos de por sí, ya cuenta con al menos 30 elementos.

-El punto original del proyecto es que se puede eliminar visualizaciones guardadas en la base de datos.

-Hay veces que el botón de dar rating no actualiza la vista instantaneamente, por lo que hay que hacer un *refresh* de la página web o volver a instentar presionando el botón.

-En la carpeta *DATA* hay un .CSV que se puede usar para probar en la página.

-La aplicación sólo soporta datos JSON que siguen la siguiente estructura. Por lo que hay que tener cuidado de qué JSON/CSV se está cargando en la página.

`
'y': { 'field': 'a', 'type': 'ordinal' },
'x': { 'field': 'b', 'type': 'quantitative' }
`

:)