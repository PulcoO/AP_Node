let bcrypt = require("bcrypt");
let jwtUtils = require("../utils/jwt.utils");
let models = require("../models");
let db = require("../models/index");

// User function 
function user_create(req, res) {
    console.log(req.body);
    //params
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let pseudo = req.body.pseudo;
    let email = req.body.email;
    let birthdate = req.body.birthdate;
    let password = req.body.password;
    let adress = req.body.adress;
    let cp = req.body.cp;
    let city = req.body.city;
    let country = req.body.country;
    let roleId = 3;

    if (email == null || pseudo == null || password == null) {
        return res.status(400).json({
            error: "missing parameters"
        });
    }

    models.User.findOne({
        attributes: ["email"],
        where: {
            email: email
        }
    })
        .then(function (userFound) {
            if (!userFound) {
                bcrypt.hash(password, 5, function (err, bcryptedPassword) {
                    models.User.create({
                        firstname: firstname,
                        lastname: lastname,
                        pseudo: pseudo,
                        email: email,
                        birthdate: birthdate,
                        password: bcryptedPassword,
                        adress: adress,
                        cp: cp,
                        city: city,
                        country: country,
                        roleId: roleId,
                    })
                        .then(function (newUser) {
                            return res.status(201).json({
                                userId: newUser.id
                            });
                        })
                        .catch(function () {
                            return res.status(500).json({
                                error: "cannot add user"
                            });
                        });
                });
            } else {
                return res.status(409).json({
                    error: "user already exist"
                });
            }
        })
        .catch(function () {
            return res.status(500).json({
                error: "unable to verify user"
            });
        });
}

function user_login(req, res) {
    //params
    let email = req.body.email;
    let password = req.body.password;

    if (email == null || password == null) {
        return res.status(400).json({
            error: "missing parameters"
        });
    }

    models.User.findOne({
        where: {
            email: email
        }
    })
        .then(function (userFound) {
            if (userFound) {
                bcrypt.compare(password, userFound.password, function (
                    errBycrypt,
                    resBycrypt
                ) {
                    if (resBycrypt) {
                        return res.status(200).json({
                            userId: userFound.id,
                            token: jwtUtils.generateTokenForUser(userFound)
                        });
                    } else {
                        return res.status(403).json({
                            error: "invalid password"
                        });
                    }
                });
            } else {
                return res.status(404).json({
                    error: "user not exist in DB"
                });
            }
        })
        .catch(function () {
            return res.status(500).json({
                error: "unable to verify user"
            });
        });
}

function user_details(req, res) {
    models.User.findAll({})
        .then(users => {
            res.status(200);
            res.json(users);
            res.end();
        })
        .catch(error => {
            res.json(error);
            res.end();
        });
}

function user_getOne(req, res) {
    let id = req.params.userId
    models.User.findOne({
        where: {
            id: id // params parce que dans l'url
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

function user_delete(req, res) {
    db.User.destroy({
        where: {
            'id': req.params.userId // params parce que dans l'url
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

//module exports
module.exports = {
    user_create,
    user_details,
    user_login,
    user_getOne,
    user_delete
}