# Consulta anticorrupcion Colombia node-express

This is an example for a express-react app done by David Andres Ramirez - 201532981

## Installation
First of all we need to prepare the data which is going to be used later on. For doing this, run the following line while you are inside the data folder.

`
mongoimport -d consultadb -c consultacoleccion --jsonArray --file datos.json
`

Now, you need to get back to the main folder of the proyect, called consulta. Once inside, you need to install all the modules. In order to do this you need to execute the following command

`
npm install
`

When you finish installing all the modules, you need to enter the "front" subfolder, where you need to run the following command again.

`
npm install
`

Now, you need to run

`
npm run build
`

The previous command is for making the front folder a static html which is going to be used by the express proyect. Now you can return you the main folder of the proyect, where finally you need to run 

`
npm start
`

You can access the page by getting into

`
http://localhost:3001
`
