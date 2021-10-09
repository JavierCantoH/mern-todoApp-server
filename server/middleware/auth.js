// stop a user for using todos opoerations if its not logeed in
// jwt
const jwt = require("jsonwebtoken");
// dotenv
require("dotenv").config();

function auth(req, res, next) {
    // verify if the token exists
    const token = req.header("x-auth-token");
    // token does not exists
    if (!token) return res.status(401).send("Access denied. Not authorized. ");
    // token exist
    try {
        // verify token
        const jwtSecretKey = process.env.SECRET_KEY;
        const decoded = jwt.verify(token, jwtSecretKey);
        req.user = decoded;
        // go to the next function
        next();
    } catch (ex) {
        res.status(400).send("Invalid auth token. ");
    }
}

module.exports = auth;