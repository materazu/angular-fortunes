'use strict';

var model = require('../models');
var Line = model.Line;

module.exports.getAllForFortune = function (id, callback) {
    Line.find({'fortune_id': id}).exec(function (err, lines) {
        callback(lines);
    });
};