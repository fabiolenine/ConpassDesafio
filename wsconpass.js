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
const configTEST        = require('./keys/configdbTEST');
const configDEV         = require('./keys/configdbDEV');
const configPRO         = require('./keys/configdb');
let config = configPRO;

// don't show the log when it is test
if(process.env.NODE_ENV == 'dev') {
  // use morgan to log at command line
  app.use(morgan('combined'));
  let config = configDEV;
} else if (process.env.NODE_ENV == 'test') {
  let config = configTESTE;
}

require('./modules/dbconnection')(mongoose, config);

const crud              = require('./modules/dbcrud')(mongoose);

http.createServer(app).listen(3000);

app.use(bodyParser.json());							              // for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));	    // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json({type: 'application/json'})); // parse application/json

app.disable('x-powered-by');

// Routes
require('./routes/dashboard')(app, crud);

module.exports = app;
