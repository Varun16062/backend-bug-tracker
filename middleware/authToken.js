const Jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtKey = process.env.JWT_SECRET_KEY;

module.exports = function (req, resp, next) {
    const bearerToken = req.body.headers['authorization'];
    if (bearerToken) {
        const bearer = bearerToken.split(" ")
        const token = bearer[1]
        console.log(token, jwtKey)

        var decoded = Jwt.verify(token, jwtKey)

        if (decoded.user) {
            next();
        } else {
            resp.status(403).send({ result: "please provide valid token" })
        }
    } else {
        resp.status(401).send({ result: "please add token with headers" })
    }
}