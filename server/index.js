// Requires
const express = require('express');
//var cors = require('cors');
//var mongoose = require('mongoose');
// import routes

// create express app
const app = express();
//app.use(express.json());
// Use Cors
//app.use((cors));

//testing
app.get('/', (req, res) => {
    res.send("welcome to our todos api...")
})

// port
const PORT = 3000;
app.listen(PORT,() => console.log("Express server is running on port " + PORT));
