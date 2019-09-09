let express = require('express');
let api = express.Router();
let db = require(`../models/index.js`);

const event_controller = require('../controllers/event.controller')

/*********************** *******************************/

api.get('/', event_controller.event_details);

module.exports = api;