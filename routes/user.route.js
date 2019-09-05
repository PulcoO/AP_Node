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
api.get('/:userId', user_controller.user_getOne);
//DELETE ONE //
api.delete('/:userId', user_controller.user_delete);

//update //
api.put('/:userId', user_controller.user_update)

//user favoris//
api.get('/favoris/:userId', user_controller.user_favoris)


module.exports = api;