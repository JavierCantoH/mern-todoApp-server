// Requires
const express = require('express');
//var cors = require('cors');
const mongoose = require('mongoose');
// import routes
// create express app
const app = express();
//app.use(express.json());
// Use Cors
//app.use((cors));

// dotenv for mongo db atlas
require('dotenv').config();


//testing
app.get('/', (req, res) => {
    res.send("welcome to our todos api...")
})

const connection_string = process.env.CONNECTION_STRING
// port
const port = process.env.PORT || 5000;
app.listen(port,() => console.log("Express server is running :) on port " + port));

// Mongoose connection 
mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connection established :)"))
  .catch((error) => console.error("MongoDB connection failed: ", error.message));

