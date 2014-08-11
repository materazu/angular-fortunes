/**
 * Init of vendors
 */
var cors = require('cors')
var express = require('express');
var routes = require('./routes');
var app = express();

/**
 * Configurations
 */
app.use(cors())
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.set('env', 'development');
app.set('port', 3333);

app.locals.title = 'fortunes-server';

app.configure('development', 'production', function() {
    app.use(express.logger('dev'));
});

/**
 * Fortune routes
 */
app.post('/fortune', routes.fortune.create);
app.get('/fortune', routes.fortune.getAll)

/**
 * Vote routes
 */
app.get('/vote/:fortune_id', routes.vote.count);
app.post('/vote', routes.vote.create);

/**
 * User routes
 */
app.get('/user/:id', routes.user.getOne);
app.get('/users/:name', routes.user.find);

module.exports = app;
