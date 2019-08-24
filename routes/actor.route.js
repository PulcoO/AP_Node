let express = require('express');
let api = express.Router();
let db = require(`../models/index.js`);

////////////////////////////////////////////////////////////////////
const actor_controller = require('../controllers/actor.controller');
////////////////////////////////////////////////////////////////////

//READ ALL //
api.get('/', actor_controller.actor_details);
//READ ONE //
api.get('/:actorId', actor_controller.actor_getOne);
//CREATE ONE //
api.post('/', actor_controller.actor_create);
//DELETE ONE //
api.delete('/', actor_controller.actor_delete);
//UPDATE ONE // 
api.put('/:actorId', actor_controller.actor_update);

//READ ALL BY CATEGORY//
api.get('/category/:categoryId', actor_controller.actor_details_sort_by_category_with_favori);

// RESTE A FAIRE // 

// GET ONE BY NAME OR CITY OR COUNTRY ?? //

module.exports = api;