// import model todo
const Todo = require("../models/todo");
// requiere express
const express = require("express");
// requiere joi for validate data before passing it to the db
const Joi = require("joi");
// auth middleware
const auth = require("../middleware/auth");
// create a router
const todoRouter = express.Router();

// GET ALL TODOS
todoRouter.get("/", auth, async(req, res) => {
    try {
        // find all todos sorted by more recent created (more complicated queries used mongoose documentation https://mongoosejs.com/docs/queries.html)
        const todos = await Todo.find().sort({ date: -1 });
        // filter todos to only show the user the todos created by the user
        const filteredTodos = todos.filter( todo => todo.uid === req.user._id )
        res.send(filteredTodos);
    } catch (error){
        res.status(500).send("Error: " + error.message);
    }
})

// POST NEW TODO
todoRouter.post("/", auth, async(req, res) => {
    // joi schema validation
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

// UPDATE TODO
todoRouter.put("/:id", auth, async (req, res) => {
    // joi schema validation
    const schema = Joi.object({
        name: Joi.string().min(3).max(200).required(),
        author: Joi.string().min(3),
        uid: Joi.string(),
        isComplete: Joi.boolean(),
        date: Joi.date(),
    });

    // validate the data entered by the user using joi
    const { error } = schema.validate(req.body);
    // if there is an error send it to the client
    if (error) return res.status(400).send(error.details[0].message);
    // validate if the todo exist by id
    try{
        const todo = await Todo.findById(req.params.id);
        // to do not found
        if (!todo) return res.status(404).send("Todo not found...");
        // checking if the todo edited is created by the user
        if(todo.uid !== req.user._id) 
            return res.status(401).send("Todo update failed. Not authorizeed.");
        // to do found and authorized then ->
        // extracting the data that will be saved in the db
        const { name, author, isComplete, date, uid } = req.body;
        // update todo
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { name, author, isComplete, date, uid },
            // flag to return updated todo insted of old todo
            { new: true }
        );
        res.send(updatedTodo);
    } catch(error){
        res.status(500).send(error.message);
        console.log(error.message);
    }
});

// UPDATE TODO IS COMPLETE?
todoRouter.patch("/:id", auth, async (req, res) => {
    // validate if the todo exist by id
    try{
        const todo = await Todo.findById(req.params.id);
        // to do not found
        if (!todo) return res.status(404).send("Todo not found...");
        // checking if the todo edited is created by the user
        if(todo.uid !== req.user._id) 
            return res.status(401).send("Todo check/uncheck failed. Not authorizeed.");
        // to do found and authorized then ->
        // update todo isComplete field
        const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        {isComplete: !todo.isComplete,}, 
        // flag to return updated todo insted of old todo
        {new: true}
        );
        res.send(updatedTodo);
    } catch(error){
        res.status(500).send(error.message);
        console.log(error.message);
    }
});

// DELETE A TODO
todoRouter.delete("/:id", auth, async (req, res) => {
    // validate if the todo exist by id
    const todo = await Todo.findById(req.params.id);
    // to do not found
    if (!todo) return res.status(404).send("Todo not found...");
    // if to do exists now checking if the todo edited is created by the user
    if(todo.uid !== req.user._id) 
    return res.status(401).send("Todo deletion failed. Not authorizeed.");
    // to do found and authorized then ->
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.send(deletedTodo);
});

module.exports = todoRouter;