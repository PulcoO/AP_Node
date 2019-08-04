let express = require('express');
let api = express.Router();

const user_controller = require('../controllers/user.controller')
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//READ ALL //
api.get('/', user_controller.user_details);
//LOGIN//
api.post('/login', user_controller.user_login);
//CREATE ONE //
api.post('/create', user_controller.user_create);

//READ ONE //
api.get('/:id', user_controller.user_getOne);
//DELETE ONE //
api.delete('/delete', user_controller.user_delete);