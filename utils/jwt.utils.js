let jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'secret'

module.exports = {
    generateTokenForUser: function (userData) {
        return jwt.sign({
                userId: userData.id,
                isAdmin: userData.isAdmin
            },
            JWT_SIGN_SECRET, {
                expiresIn: '1h'
            })
    }
}