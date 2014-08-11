'use strict';

var mongoose = require('mongoose');

mongoose.connect('localhost/fortunes', {});
mongoose.set('debug', true);

module.exports.User = require('./user');
module.exports.Fortune = require('./fortune');
module.exports.Line = require('./line');
module.exports.Vote = require('./vote');
module.exports.mongoose = mongoose;
