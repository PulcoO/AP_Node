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

exports.event_create = function (req, res) {
    db.Event.create({
        title: req.body.title,
        content: req.body.content,
        datebegin: req.body.datebegin,
        dateend: req.body.dateend,
        location: req.body.location,
        openhours: req.body.openhours
    })
        .then(event => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(event);
            console.log(event)
        })
        .catch(error => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log(error);
        })
}

exports.event_delete = function (req, res) {
    db.Event.destroy({
        where: {
            'id': req.params.eventId
        }
    })
        .then(event => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(event)
        })
        .catch(error => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log(error);
            res.end();
        })
}