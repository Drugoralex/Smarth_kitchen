'use strict'

var fs = require('fs');
var path = require('path');


var request = require('request');

var Ingrediente = require('../models/ingrediente');


function IngredienteGet(req,res) {
 //   var ingrediente= new Ingrediente();
    var id  = req.params.id;

    console.log(id);
    const options = {
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/'+id+'/information?amount=100&unit=gram',
        method: 'GET',
        headers: {
            'X-RapidAPI-Host':'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'b6c64246d6mshc0fd2135a5928cdp1393edjsn8cf2695d839d'
        }
    };
    
    request(options, function(_err, _res, body) {
        let json = JSON.parse(body);
        res.status(200).send({json})
    });

    

} 


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
                Consumir(req,res);
                res.status(200).send({ingrediente: ingredienteStored});
            }
        }
    });
} 


module.exports = {      //Esto es un objeto
    saveIngrediente,
    IngredienteGet
}