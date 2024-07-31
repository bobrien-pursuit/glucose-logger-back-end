//DEPENDENCIES
const cors = require('cors');
const express = require('express');

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES

//localhost:4001
app.get('/', (req, res) => {
    res.send("Glucose Logger")
});

// 404 page
app.get('*', (req, res) => {
    res.status(404).send("Page not found");
})

//EXPORTS
module.exports = app;