'use strict';

app.service('FortunesProvider', function (Restangular, VoteProvider) {
    this.getAll = function (callback) {
        Restangular.all('fortune').getList().then(function (apiFortunes) {
            var fortunes = [];
            apiFortunes.forEach(function (fortune) {
                VoteProvider.getVote(fortune, function(vote) {
                    fortune.vote = vote ? vote : {"total":0};
                    fortunes.push(fortune);

                    if (apiFortunes.length == fortunes.length) {
                        callback(fortunes);
                    }
                });
            });
        });
    }

    this.create = function (fortune, callback) {
        Restangular.all('fortune').post(fortune).then(callback);
    }
});