let express = require('express');
let api = express.Router();
//let db = require(`../models/index.js`);



const user_controller = require('../controllers/user.controller');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//READ ALL //
api.get('/', user_controller.user_details);
//READ ONE //
api.get('/:id', user_controller.user_getOne);
//CREATE ONE //
api.post('/create', user_controller.user_create);
//DELETE ONE //
api.delete('/delete', user_controller.user_delete);


module.exports = api;