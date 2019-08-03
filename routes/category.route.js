let express = require('express');
let api = express.Router();
let db = require(`../models/index.js`);

///////////////////////////////////////////////////////////////////
const category_controller = require('../controllers/category.controller');
///////////////////////////////////////////////////////////////////

//READ ALL //
api.get('/', category_controller.category_details);
//READ ONE //
api.get('/:categoryId', category_controller.category_getOne);
//CREATE ONE //
api.post('/', category_controller.category_create);
//DELETE ONE //
api.delete('/', category_controller.category_delete);
//UPDATE ONE // 
api.put('/:categoryId', category_controller.category_update);

module.exports = api;