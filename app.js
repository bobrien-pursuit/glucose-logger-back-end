//DEPENDENCIES
const express = require('express');
const app = express();
const cors = require('cors');
const entriesController = require("./controllers/entriesController.js");


//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/entries", entriesController);

//ROUTES

//localhost:4001
app.get('/', (req, res) => {
    res.send("Glucose Logger")
});

// 404 page
app.get('*', (req, res) => {
    res.status(404).send("Page not found");
});

//EXPORTS
module.exports = app;