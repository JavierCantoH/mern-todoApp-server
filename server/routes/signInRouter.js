// import model user
const User = require("../models/user");
// requiere express
const express = require("express");
// requiere joi for validate data before passing it to the db
const Joi = require("joi");
// bcrypt for hassing user passwords
const bcrypt = require("bcrypt");
// jwt 
const jwt = require("jsonwebtoken");
// create a router
const signInRouter = express.Router();

// signin a new user (thats why we only have post)
signInRouter.post("/", async (req, res) => {
    // joi schema validation
    const schema = Joi.object({
      email: Joi.string().min(3).max(200).required().email(),
      password: Joi.string().min(6).max(200).required(),
    });
    // validate the data entered by the user using joi
    const { error } = schema.validate(req.body);
    // if there is an error send it to the client
    if (error) return res.status(400).send(error.details[0].message);
    try{
        // validate if the user already exists
        let user = await User.findOne({ email: req.body.email });
        // if user DOES NOT exists return error to client
        if (!user) return res.status(400).send("Invalid email or password");
        // user exists
        // bcrypt compare method to compare passowrd entered by the user and the password in the db
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        // if the password is not he same send error
        if (!validPassword)
            return res.status(400).send("Invalid email or password...");
        // the passowrds are the same, now login client and generate and send token to client using .env file
        const jwtSecretKey = process.env.SECRET_KEY;
        const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, jwtSecretKey)
        res.send(token);
    } catch(error){
        res.status(500).send(error.message);
        console.log(error.message);
    }
});
  
module.exports = signInRouter;