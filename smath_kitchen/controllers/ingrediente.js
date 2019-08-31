'use strict'

var fs = require('fs');
var path = require('path');


var request = require('request');

var Ingrediente = require('../models/ingrediente');

/*
function Consumir(req,res) {
    const options = {
        url: 'https://www.reddit.com/r/funny.json',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client'
        }
    };
    
    request(options, function(err, res, body) {
        let json = JSON.parse(body);
        console.log(json);
    });
}
*/
function saveIngrediente(req,res) {
    var ingrediente= new Ingrediente();
    var params = req.body;

    ingrediente._id = params._id
    ingrediente.original = params.original;
    ingrediente.originalName = params.originalName;
    ingrediente.name = params.name;
    ingrediente.amount = params.amount;
    ingrediente.unit = params.unit;
    ingrediente.unitShort = params.unitShort;
    ingrediente.unitLong = params.unitLong

    console.log(params);
    ingrediente.save((err,ingredienteStored) => {
        if(err){
            res.status(500).send({message: 'Error al guardar el ingrediente'});
        }else{
            if(!ingredienteStored){
                res.status(500).send({message: 'EL ingrediente no fue guardado'});
            }else{
              //  Consumir(req,res);
                res.status(200).send({ingrediente: ingredienteStored});
            }
        }
    });
} 


module.exports = {      //Esto es un objeto
    saveIngrediente
}