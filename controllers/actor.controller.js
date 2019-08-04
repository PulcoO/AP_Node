////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////      CONFIGURATION      ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

// INITIALISATION DE L INDEX DES MODELS 
const db = require('../models/index.js');

/////////////////////// BODY PARSER /////////////////////////////
let bodyParser = require('body-parser');

//configuration body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/////////////////////////web tokken/////////////////////////
const jwt = require('jsonwebtoken');
//Check to make sure header is not undefined, if so, return Forbidden (403)
const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if (typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}

//export

exports.actor_details = function(req, res) {
    db.Actor.findAll({})
        .then(actors => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(actors);

        })
        .catch(error => {
            res.json(error);
            res.end();
        })
}

exports.actor_getOne = function(req, res) {
    db.Actor.findOne({
            where: {
                'id': req.params.actorId // params parce que dans l'url
            }
        })
        .then(actors => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(actors);

        })
        .catch(error => {
            res.json(error);
            res.end();
        })
}

exports.actor_create = function(req, res) {
    db.Actor.create({
            name: req.body.name,
            geo: req.body.geo,
            adress: req.body.adress,
            city: req.body.city,
            cp: req.body.cp,
            country: req.body.country,
            category: req.body.category,
            website: req.body.website,
            description: req.body.description,
            telephonnumber: req.body.telephonnumber,
            openhours: req.body.openhours
        })
        .then(actors => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(actors);
        })
        .catch(error => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log(error);
        })
}

exports.actor_delete = function(req, res) {
    db.Actor.destroy({ // rajout de la vérification administrateur
            where: {
                'id': req.params.actorId // params parce que dans l'url
            }
        })
        .then(actors => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(actors)
        })
        .catch(error => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log(error);
            res.end();
        })
}
exports.actor_update = function(req, res) {
    db.Actor.update({ // rajout de la fonction administrateur // rajout de la vérification country = city = geo
            name: req.body.name,
            geo: req.body.geo,
            adress: req.body.adress,
            city: req.body.city,
            cp: req.body.cp,
            country: req.body.country,
            category: req.body.category,
            website: req.body.website,
            description: req.body.description,
            telephonnumber: req.body.telephonnumber,
            openhours: req.body.openhours
        }, {
            where: { 'id': req.params.actorId }
        })
        .then(actor => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(actor)
        })
        .catch(error => { // detailler l'erreur si plusieurs possibilité
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log('error');
            res.end();
        })
}