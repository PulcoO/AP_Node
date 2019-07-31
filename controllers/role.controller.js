// IMPORT DE INDEX MODEL
const db = require('../models/index.js');

// IMPORT DE JSONWEBTOKEN
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

exports.role_details = function(req, res) {
    db.Role.findAll({})
        .then(roles => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(roles);

        })
        .catch(error => {
            res.json(error);
            res.end();
        })
}

exports.role_getOne = function(req, res) {
    db.Role.findOne({
            where: {
                'id': req.params.id // params parce que dans l'url
            }
        })
        .then(roles => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(roles);

        })
        .catch(error => {
            res.json(error);
            res.end();
        })
}

exports.role_create = function(req, res) {
    db.Role.create({ // ici rajouter la verification pour le role administrateur
            name: req.body.name
        })
        .then(roles => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(roles);
        })
        .catch(error => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log(error);
        })
}

exports.role_delete = function(req, res) {
    db.Role.destroy({ // ici rajouter la verification pour le role administrateur
            where: {
                'id': req.params.roleId // params parce que dans l'url
            }
        })
        .then(roles => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(roles)
        })
        .catch(error => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log(error);
            res.end();
        })
}

//rajout de update !!!!