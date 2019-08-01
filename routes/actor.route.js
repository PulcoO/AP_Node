let express = require('express');
let api = express.Router();
let db = require(`../models/index.js`);



const actor_controller = require('../controllers/actor.controller')
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//READ ALL //
api.get('/', actor_controller.actor_details);
//READ ONE //
api.get('/:id', actor_controller.actor_getOne);
//CREATE ONE //
api.post('/create', actor_controller.actor_create);
//DELETE ONE //
api.delete('/delete', actor_controller.actor_delete);
//UPDATE ONE // 
api.put('/id', actor_controller.actor_update);

// RESTE A FAIRE // 

// GET ONE BY NAME OR CITY OR COUNTRY ?? //

// GET MANY BU CATEGORIES ?? //