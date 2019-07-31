const db = require('../models/index.js');

/////////////////////////config du haschage via npm install bcrypt/////////////////////////

const bcrypt = require('bcrypt');
const saltRounds = 10;

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


exports.user_details = function(req, res) {
    db.User.findAll({})
        .then(users => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(users);

        })
        .catch(error => {
            res.json(error);
            res.end();
        })
}

exports.user_getOne = function(req, res) {
    db.User.findOne({
            where: {
                'id': req.params.id // params parce que dans l'url
            }
        })
        .then(users => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(users);

        })
        .catch(error => {
            res.json(error);
            res.end();
        })
}

exports.user_create = function(req, res) {
    db.User.create({
            title: req.body.title,
            content: req.body.content,
            photo: req.body.photo,
            authorId: req.body.author,
            categoryId: req.body.category
        })
        .then(users => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(users);
        })
        .catch(error => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log(error);
        })
}

exports.user_delete = function(req, res) {
    db.User.destroy({
            where: {
                'id': req.params.id // params parce que dans l'url
            }
        })
        .then(users => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(users)
        })
        .catch(error => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(400);
            console.log(error);
            res.end();
        })
}