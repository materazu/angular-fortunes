'use strict';

var models = require('../models');
var repository = require('../repository');
var Fortune = models.Fortune;
var Line = models.Line;
var UserRepository = repository.User;

module.exports.create = function(req, res, next) {
    var data = req.body;
    var reporter = 'object' == typeof data.reporter ? data.reporter.name : data.reporter;

    UserRepository.getOneOrCreate(reporter, function (reporter) {
        data.user = reporter._id;

        var lines = data.lines;
        delete data.lines;
        var today = new Date();

        if (!data.created_at) {
            data.created_at = today;
        }

        Fortune.create(data, function(err, fortune) {
            if (err) {
                return next(err);
            }

            lines.forEach(function (line) {
                var user = 'object' == typeof line.user_id ? line.user_id.name : line.user_id;
                UserRepository.getOneOrCreate(user, function (fortuned) {
                    line.fortune = fortune._id;
                    line.user = fortuned._id;
                    line.created_at = today;

                    Line.create(line, function (err, line) {
                        fortune.lines.push(line);
                        fortune.save();
                    });
                });
            });

            res.json(fortune);
        });
    });
};

module.exports.getAll = function (req, res, next) {
    Fortune.find({}).sort({created_at: 'desc'}).populate('user lines').exec(function (err, fortunes) {
        if (err) {
            return next(err);
        }

        var options = {
            path: 'lines.user',
            model: 'user'
        };

        Fortune.populate(fortunes, options, function (err, fortunes) {
            res.json(fortunes);
        });
    });
}