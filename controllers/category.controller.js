////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////      CONFIGURATION      ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

// INITIALISATION DE L INDEX DES MODELS 
const db = require('../models/index.js');

//export

exports.category_details = function(req, res) {
    db.Category.findAll({})
        .then(categories => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(categories);

        })
        .catch(error => {
            res.json(error);
            res.end();
        })
}

exports.category_getOne = function(req, res) {
    db.Category.findOne({
            where: {
                'id': req.params.categoryId // params parce que dans l'url
            }
        })
        .then(category => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(category);

        })
        .catch(error => {
            res.json(error);
            res.end();
        })
}

exports.category_create = function(req, res) {
    db.Category.create({
            name: req.body.name,
        })
        .then(category => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(category);
        })
        .catch(error => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log(error);
        })
}

exports.category_delete = function(req, res) {
    db.Category.destroy({ // rajout de la vérification administrateur
            where: {
                'id': req.params.categoryId // params parce que dans l'url
            }
        })
        .then(category => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(category)
        })
        .catch(error => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log(error);
            res.end();
        })
}
exports.category_update = function(req, res) {
    db.Category.update({ // rajout de la fonction administrateur // rajout de la vérification country = city = geo
            name: req.body.name,
        }, {
            where: { 'id': req.params.categoryId }
        })
        .then(category => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(category)
        })
        .catch(error => { // detailler l'erreur si plusieurs possibilité
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log('error');
            res.end();
        })
}