'use strict';

var model = require('../models');
var User = model.User;

module.exports.getOne = function (name, callback) {
    User.find({'name': name}).exec(function (err, user) {
        callback(user[0]);
    });
};

module.exports.getOneOrCreate = function (name, callback) {
    name = name ? name : 'anonymous';

    User.find({'name': name}).exec(function (err, user) {
        if (!user.length) {
            var user = {
                'name': name,
                'created_at': new Date()
            };

            User.create(user, function (err, user) {
                callback(user);
            });
        } else {
            callback(user[0]);
        }
    });
};