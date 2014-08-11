'use strict';

var model = require('../models');
var Vote = model.Vote;

module.exports.count = function (id, callback) {
    Vote.aggregate(
        { $match:
            { fortune: id }
        },
        { $group:
            { _id: '$fortune', total: { $sum: '$note' } }
        },
        function (err, count) {
            callback(count);
        }
    );
};

module.exports.create = function (data, callback) {
    Vote.create(data, function (err, vote) {
        callback(vote);
    })
}