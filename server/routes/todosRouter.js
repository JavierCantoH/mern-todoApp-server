// import model task
const Todo = require("../models/todo");
// requiere express
const express = require("express");
// create a router
const todoRouter = express.Router();

// POST NEW TODO
todoRouter.post("/", async(req, res) => {

    const { name, author, isComplete, date, uid } = req.body;

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