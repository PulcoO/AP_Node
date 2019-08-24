// IMPORT DE INDEX MODEL relation BDD
const db = require('../models/index.js');

// IMPORT DE JSONWEBTOKEN
const jwt = require('jsonwebtoken');

////////////////////////////////////////////////////////////////
let actors = db.Favori.belongsTo(db.Actor,{
    foreignKey: "ActorId"
  });

exports.favori_details = function(req, res) {
    db.Favori.findAll({
            where: {
                'userId': req.params.userId // params parce que dans l'url
            },
            include:[actors]         
    })
        .then(favoris => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(favoris);

        })
        .catch(error => {
            res.json(error);
            res.end();
        })
}

exports.favori_getOne = function(req, res) {
    db.Favori.findOne({
            where: {
                'id': req.params.userId,
                'id': req.params.favoriId // params parce que dans l'url
            }
            
        })
        .then(favoris => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(favoris);

        })
        .catch(error => {
            res.json(error);
            res.end();
        })
}

exports.favori_create = function(req, res) {
    db.Favori.create({ // ici rajouter la verification pour le favori administrateur
            actorId: req.params.actorId,
            userId: req.params.userId

        })
        .then(favoris => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(favoris);
        })
        .catch(error => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log(error);
        })
}

exports.favori_delete = function(req, res) {
    db.Favori.destroy({ // ici rajouter la verification pour le favori administrateur
            where: {
                'id': req.params.favoriId // params parce que dans l'url
            }
        })
        .then(favoris => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(favoris)
        })
        .catch(error => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log(error);
            res.end();
        })
}
exports.favori_update = function(req, res) {
    db.Favori.update({ // rajout de la fonction administrateur // rajout de la vérification country = city = geo
            name: req.body.name,
        }, {
            where: { 'id': req.params.favoriId }
        })
        .then(favori => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(favori)
        })
        .catch(error => { // detailler l'erreur si plusieurs possibilité
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log('error');
            res.end();
        })
}