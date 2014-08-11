'use strict';

var repository = require('../repository');
var VoteRepository = repository.Vote;

module.exports.create = function(req, res, next) {
    VoteRepository.create(req.body, function (vote) {
        res.json(vote);
    });
};

module.exports.count = function (req, res, next) {
    var fortuneId = req.params.fortune_id;

    VoteRepository.count(fortuneId, function (count) {
        res.json(count);
    })
}