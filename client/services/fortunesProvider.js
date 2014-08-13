'use strict';

app.service('FortunesProvider', function (Restangular, VoteProvider) {
    /**
     * Get all fortunes over Restangular
     *
     * @param callback
     */
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

    /**
     * Create a new Fortune
     *
     * @param fortune
     * @param callback
     */
    this.create = function (fortune, callback) {
        Restangular.all('fortune').post(fortune).then(callback);
    }

    /**
     * Top with note total
     *
     * @param fortunes
     * @param type
     * @returns {*}
     */
    this.orderTop = function (fortunes, type) {
        return fortunes.sort(function (a, b) {
            if (a.vote.total < b.vote.total) {
                return 'top' == type ? 1 : -1;
            }

            if (a.vote.total > b.vote.total)
                return 'top' == type ? -1 : 1;
            return 0;
        });
    }
});