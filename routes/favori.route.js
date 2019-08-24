let express = require('express');
let api = express.Router();
let db = require(`../models/index.js`);

///////////////////////////////////////////////////////////////////
const favori_controller = require('../controllers/favori.controller');
///////////////////////////////////////////////////////////////////

//READ ALL //
api.get('/:userId/:actorId', favori_controller.favori_details);
//READ ONE //
api.get('/:userId/:favoriId', favori_controller.favori_getOne);
//CREATE ONE //
api.post('/:userId', favori_controller.favori_create);
//DELETE ONE //
api.delete('/:userId', favori_controller.favori_delete);
//UPDATE ONE // 
api.put('/:userId/:favoriId', favori_controller.favori_update);

module.exports = api;