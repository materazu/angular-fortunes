'use strict';

exports.index = function(req, res){
    res.render('index');
};

exports.fortune = require('./fortune');
exports.user = require('./user')
exports.vote = require('./vote')
