/*
 * WSCONPASS - Conpass Desafio
 *
 * Author: Fabio Lenine Vilela da Silva
 * LICENSE: MIT
 *
 */

/*jshint esversion: 6 */

const express           = require('express');
const app               = express();
const http              = require('http');
const mongoose			    = require('mongoose');
const bodyParser        = require('body-parser');
const config            = require('./keys/configdb');

require('./modules/dbconnection')(mongoose, config);

const crud              = require('./modules/dbcrud')(mongoose);

http.createServer(app).listen(3000);

app.use(bodyParser.json());							          //for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));	// for parsing application/x-www-form-urlencoded

app.disable('x-powered-by');

// Routes
require('./routes/dashboard')(app, crud);

module.exports = app;
