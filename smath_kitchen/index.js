'use strict'

var MongoClient = require('mongodb').MongoClient;
var app = require('./app');
var port = process.env.PORT || 3977;


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/backend_SmarthKitchen', (err,res) => {
    if(err){
        throw err;
    }else{
        console.log("La base de datos está corriendo correctamente...")
        app.listen(port,function(){
          console.log("Servidor del api de cocina escuchando en http://localhost:"+port)
        });
    }
});