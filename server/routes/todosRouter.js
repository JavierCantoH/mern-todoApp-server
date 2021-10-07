// import model task
const Todo = require("../models/todo");
// requiere express
const express = require("express");
// requiere joi for validate data before passing it to the db
const Joi = require("joi");
// create a router
const todoRouter = express.Router();

// POST NEW TODO
todoRouter.post("/", async(req, res) => {

    // joi schema
    const schema = Joi.object({
        name: Joi.string().min(3).max(200).required(),
        author: Joi.string().min(3),
        uid: Joi.string(),
        isComplete: Joi.boolean(),
        date: Joi.date(),
    });

    // validate the data entered by the user using joi
    const { error } = schema.validate(req.body);
    // if there is an error send it to the client and to the console
    if (error) return res.status(400).send(error.details[0].message);
    console.log(error);
    // extracting the data that will be saved in the db
    const { name, author, isComplete, date, uid } = req.body;
    // create new Todo with new validated data
    let todo = new Todo({
        name, author, isComplete, date, uid,
    });
    try {
        todo = await todo.save();
        res.send(todo);
    } catch(error){
        res.status(500).send(error.message);
        console.log(error.message);
    }
});

module.exports = todoRouter;