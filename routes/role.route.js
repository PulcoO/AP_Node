let express = require('express');
let api = express.Router();
let db = require(`../models/index.js`);

///////////////////////////////////////////////////////////////////
const role_controller = require('../controllers/role.controller');
///////////////////////////////////////////////////////////////////

//READ ALL //
api.get('/', role_controller.role_details);
//READ ONE //
api.get('/:roleId', role_controller.role_getOne);
//CREATE ONE //
api.post('/', role_controller.role_create);
//DELETE ONE //
api.delete('/', role_controller.role_delete);
//UPDATE ONE // 
api.put('/:roleId', role_controller.role_update);

module.exports = api;