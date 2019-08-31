'use strict'

var express = require('express');
var IngredienteController = require('../controllers/ingrediente');
var api = express.Router();

api.post('/SaveIngrediente',IngredienteController.saveIngrediente);


module.exports = api;