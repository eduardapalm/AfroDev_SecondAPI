//This page brings NPM packages: Express and Config. 
require('dotenv').config();
const configExpress = require('./config/configExpress'); 
const config = require('config'); 

app = configExpress()


//Creating a listener using the port provided by the 'configExpress' file.
//Listener -> is a function that waits an action to be executed,
//in this case the 'app.listen' function waits for the client to
//acess the server and responds with 'Servidor Rodando'

app.listen(config.get('api.port'), () =>{
    console.log('Servidor Rodando')
})