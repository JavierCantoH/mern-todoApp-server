// Requires
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// import routes
const todos = require('./routes/todosRouter');
const signUp = require('./routes/signUpRouter');
const signIn = require('./routes/signInRouter');
// import models
const Todo = require('./models/todo');
const User = require('./models/user');
// create express app
const app = express();
app.use(express.json());
// Use Cors
app.use(cors());
// dotenv for mongo db atlas
require('dotenv').config();
// app use routes
app.use('/api/todos', todos);
app.use('/api/signup', signUp);
app.use('/api/signin', signIn);
//testing
app.get('/', (req, res) => {
    res.send("welcome to our todos api...")
})
// port
const port = process.env.PORT || 5000;
app.listen(port,() => console.log("Express server is running :) on port " + port));
// Mongoose connection 
const connection_string = process.env.CONNECTION_STRING
mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established :)"))
  .catch((error) => console.error("MongoDB connection failed: ", error.message));

