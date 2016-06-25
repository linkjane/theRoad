var express = require('express'),
    morgan = require('morgan'),
    compress = require('compress');

module.exports = function () {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    
    app.set('views', './app/views');
    app.set('view engine', 'jade');
    
    require('../app/route/index.server.route')(app);
    return app;
}