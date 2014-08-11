'use strict';

var model = require('../models');
var repository = require('../repository');
var UserRepository = repository.User;
var User = model.User;

module.exports.getOne = function (req, res, next) {
    UserRepository.getOne(req.params.id, function (user) {
        res.send(user)
    });
};

module.exports.find = function (req, res, next) {
    var name = new RegExp(req.params.name, 'i');

    User.find({'name': name}).exec(function (err, users) {
        res.send(users);
    });
};