process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var httpPort = require('./config/env/development').httpPort;
var app = express();

app.listen(httpPort, function () {
    console.log('successfully start at port' + httpPort);
})