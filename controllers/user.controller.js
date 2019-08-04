let bcrypt = require("bcrypt");
let jwtUtils = require("../utils/jwt.utils");
let models = require("../models");

// User function 
function user_create(req, res) {
    console.log(req.body);
    //params
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let bio = req.body.bio;

    if (email == null || username == null || password == null) {
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
                            email: email,
                            username: username,
                            password: bcryptedPassword,
                            bio: bio,
                            isAdmin: 0
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
    db.User.findOne({
            where: {
                'id': req.params.userId // params parce que dans l'url
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




// exports.user_getOne = function (req, res) {
//     db.User.findOne({
//             where: {
//                 'id': req.params.id // params parce que dans l'url
//             }
//         })
//         .then(users => {
//             res.getHeader('Content-type', 'application/json ; charset=utf-8');
//             res.status(200);
//             res.json(users);

//         })
//         .catch(error => {
//             res.json(error);
//             res.end();
//         })
// }

// exports.user_create = function (req, res) {
//     db.User.create({
//             title: req.body.title,
//             content: req.body.content,
//             photo: req.body.photo,
//             authorId: req.body.author,
//             categoryId: req.body.category
//         })
//         .then(users => {
//             res.getHeader('Content-type', 'application/json ; charset=utf-8');
//             res.status(200);
//             res.json(users);
//         })
//         .catch(error => {
//             res.getHeader('Content-type', 'application/json ; charset=utf-8');
//             res.status(400);
//             console.log(error);
//         })
// }

// exports.user_delete = function (req, res) {
//     db.User.destroy({
//             where: {
//                 'id': req.params.id // params parce que dans l'url
//             }
//         })
//         .then(users => {
//             res.getHeader('Content-type', 'application/json ; charset=utf-8');
//             res.status(200);
//             res.json(users)
//         })
//         .catch(error => {
//             res.getHeader('Content-type', 'application/json ; charset=utf-8');
//             res.status(400);
//             console.log(error);
//             res.end();
//         })
// }