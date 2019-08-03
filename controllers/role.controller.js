// IMPORT DE INDEX MODEL relation BDD
const db = require('../models/index.js');

// IMPORT DE JSONWEBTOKEN
const jwt = require('jsonwebtoken');

////////////////////////////////////////////////////////////////
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
                'id': req.params.roleId // params parce que dans l'url
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
exports.role_update = function(req, res) {
    db.Role.update({ // rajout de la fonction administrateur // rajout de la vérification country = city = geo
            name: req.body.name,
        }, {
            where: { 'id': req.params.roleId }
        })
        .then(role => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(role)
        })
        .catch(error => { // detailler l'erreur si plusieurs possibilité
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log('error');
            res.end();
        })
}