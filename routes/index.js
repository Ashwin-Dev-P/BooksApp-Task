const express = require('express');
const app = express();

//User routes
app.use('/', require('./client'))

module.exports = app;