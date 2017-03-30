'use strict';

const express = require('express');
const routes = require('./routes.js');
const app = express();

app.use('/', express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use(routes);

const server = app.listen(process.env.PORT || 2323, ()=>{
  console.log("me runno on a port 2323");
});
