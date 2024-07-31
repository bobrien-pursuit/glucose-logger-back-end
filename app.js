//DEPENDENCIES
const cors = require('cors');
const express = require('express');

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES

//EXPORTS
module.exports = app;