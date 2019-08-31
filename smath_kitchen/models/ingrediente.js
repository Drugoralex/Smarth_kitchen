'use strict'

var mongoose =require('mongoose');
var Schema = mongoose.Schema;       //Crea un esquema dentro de la DB

var IngredienteSchema = Schema ({

   original: String,
   originalName: String,
   name: String,
   amount: Number,
   unit: String,
   unitShort: String,
   unitLong: String,
   consistency:String,
   aisle: String,
   //image: String,
});

module.exports = mongoose.model('Ingrediente', IngredienteSchema); //Exporta los modelos a la base de datos