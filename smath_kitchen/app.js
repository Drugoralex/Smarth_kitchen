'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


//Cargar rutas
var ingrediente_routes= require('./routes/ingrediente');
//var artist_routes = require('./routes/artist');

app.use(bodyParser.urlencoded({extended:false})); //Configuracion básica 
app.use(bodyParser.json());                       //Convierte a Json las peticiones que llegan por http

//Configurar cabeceras http

//ruta base
app.use('/api', ingrediente_routes);
//app.use('/api', artist_routes);

app.get('/pruebas', function(req,res){
    res.status(200).send({message: 'Bienvenido al curso de Omar_Chávez.es'})
});

module.exports = app;