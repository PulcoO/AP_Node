const db = require('../models/index.js');

exports.event_details = function (req, res) {
    db.Event.findAll({})
        .then(events => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(events);

        })
        .catch(error => {
            res.json(error);
            res.end();
        })
}