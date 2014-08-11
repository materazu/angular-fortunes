'use strict';

app.service('VoteProvider', function (Restangular) {
    this.getVote = function (fortune, callback) {
        Restangular.all('vote/' + fortune._id).getList().then(function (vote) {
            callback(vote[0]);
        });
    }

    this.createVote = function (note, fortune, callback) {
        var fortuneId = fortune._id;
        var data = {note: note, fortune: fortuneId}

        Restangular.all('vote').post(data).then(function(vote) {
            Restangular.all('vote/' + fortuneId).getList().then(function (vote) {
                callback(vote[0]);
            });
        })
    }
});