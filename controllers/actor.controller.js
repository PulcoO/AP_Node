////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////      CONFIGURATION      ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

// INITIALISATION DE L INDEX DES MODELS 
const db = require('../models/index.js');

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

// INITIALISATION DE SEQUELIZE
let Sequelize = require ('sequelize');
let Op = Sequelize.Op;

let category = db.Actor.belongsToMany(db.Category, {
    through: 'CategoryActor',
    as : 'category'
});

let favori = db.Favori.belongsTo(db.Actor,{
    foreignKey : "actorId",
    as : 'favori'
});
let user = db.User;

exports.actor_details = function(req, res) {
    db.Actor.findAll({
        include: 
            [
                {
                    model : db.Category ,
                    attributes :['id', 'name'],
                    required: false,
                },{
                    model : db.Favori,
                    attributes :['actorId', 'userId'],
                    required: false,
                },
                {
                    model : db.Comment,
                    required: false,
                    // include : [
                    //     {
                    //         model : db.User,
                    //         required: false,
                    //     },
                    //     {
                    //         where : {'id' : db.Comment.userId}
                    //     }
                        
                        
                    // ]
                }
            ],
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
};

exports.actor_getOne = function(req, res) {
    db.Actor.findOne({
            where: {
                'id': req.params.actorId // params parce que dans l'url
            },
            include: [
                {
                    model : db.Category,
                    attributes: ['id', 'name'],
                    required: false,
                },{
                    model : db.Favori,
                    attributes :['actorId', 'userId'],
                    required: false,
                },
                {
                    model : db.Comment,
                    required: false,
                    include : [
                        {
                            model : db.User,
                            required: false,
                        },
                    ]
                }
            ]
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
            geoLongitude: req.body.geoLongitude,
            geoLatitude: req.body.geoLatitude,
            adress: req.body.adress,
            city: req.body.city,
            cp: req.body.cp,
            country: req.body.country,
            website: req.body.website,
            description: req.body.description,
            telephonnumber: req.body.telephonnumber,
            openhours: req.body.openhours
        })
        .then((actor) => {
            req.body.categories.split(',').forEach(category =>{
                db.CategoryActor.create({
                    categoryId: category,
                })
            })
            return actorwithcat
        })
        .then(actorwhithcat => {
            res.getHeader('Content-type', 'application/json ; charset=utf-8');
            res.status(200);
            res.json(actorwhithcat);
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
            geoLongitude: req.body.geoLongitude,
            geoLatitude: req.body.geoLatitude,
            adress: req.body.adress,
            city: req.body.city,
            cp: req.body.cp,
            country: req.body.country,
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
////////////////////////////////////////////////////////////////////////////////
///                              LES SPECIFIQUES                             ///
////////////////////////////////////////////////////////////////////////////////

exports.actor_details_sort_by_category_with_favori = function(req, res) {
    //console.log(req.params.categoryId)
    let categoryParams= req.params.categoryId.split('-');
    //console.log(categoryParams)
    db.Actor.findAll({
        include: 
            [
                {
                    model : db.Category ,
                    where : {'id': {[Op.in]: categoryParams }},
                },
                {
                    model : db.Favori,
                    attributes :['actorId', 'userId'],
                    required: false,
                },
            ],
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
};
