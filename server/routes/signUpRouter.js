// import model user
const User = require("../models/user");
// requiere express
const express = require("express");
// requiere joi for validate data before passing it to the db
const Joi = require("joi");
// bcrypt for hassing user passwords
const bcrypt = require("bcrypt");
// create a router
const signUpRouter = express.Router();

// signup a new user (thats why we only have post)
signUpRouter.post("/", async (req, res) => {
    // joi schema validation
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().min(3).max(200).required().email(),
      password: Joi.string().min(6).max(200).required(),
    });
    // validate the data entered by the user using joi
    const { error } = schema.validate(req.body);
    // if there is an error send it to the client
    if (error) return res.status(400).send(error.details[0].message);
    try{
        // validate if the user alreafy exists
        let user = await User.findOne({ email: req.body.email });
        // if user exists return error to client
        if (user) return res.status(400).send("User already exists...");
        // extracting the data that will be saved in the db
        const { name, email, password } = req.body;
        // create a new user user the model user
        user = new User({ name, email, password });
        // hash the password using salt (string of random chars) and bcrypt
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        // save the user to the db
        await user.save();
        res.send("user created");
    } catch(error){
        res.status(500).send(error.message);
        console.log(error.message);
    }
});
  
module.exports = signUpRouter;