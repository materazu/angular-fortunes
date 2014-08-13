'use strict';

app
    /**
     * List of all fortunes
     */
    .controller('fortunesList', function ($scope, FortunesProvider, VoteProvider) {
        FortunesProvider.getAll(function (fortunes) {
            $scope.fortunes = fortunes;
        });

        $scope.vote = function (fortune, vote) {
            VoteProvider.createVote(vote, fortune, function(vote) {
                fortune.vote = vote;
            })
        }
    })

    /**
     * TOP10
     */
    .controller('fortunesTop', function ($scope, FortunesProvider, VoteProvider) {
        FortunesProvider.getAll(function (fortunes) {
            $scope.fortunes = FortunesProvider.orderTop(fortunes, 'top');
        });

        $scope.vote = function (fortune, vote) {
            VoteProvider.createVote(vote, fortune, function(vote) {
                fortune.vote = vote;
            })
        }
    })

    /**
     * Bad0
     */
    .controller('fortunesBad', function ($scope, FortunesProvider, VoteProvider) {
        FortunesProvider.getAll(function (fortunes) {
            $scope.fortunes = FortunesProvider.orderTop(fortunes);
        });

        $scope.vote = function (fortune, vote) {
            VoteProvider.createVote(vote, fortune, function(vote) {
                fortune.vote = vote;
            })
        }
    })

    /**
     * Form to add a new fortune
     */
    .controller('fortunesAdd', function ($rootScope, $scope, $location, FortunesProvider, UserProvider) {
        var users = new Bloodhound({
            remote: 'http://localhost:3333/users/%QUERY',
            datumTokenizer: function(d) {
                return Bloodhound.tokenizers.whitespace(d.val);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace
        });

        users.initialize();

        $scope.options = {
            highlight: true
        };

        $scope.data = {
            displayKey: 'name',
            source: users.ttAdapter()
        };

        $scope.fortune = {'lines': [{'user_id' : '', 'message': ''}]};

        $scope.addLine = function () {
            $scope.fortune.lines.push({'user_id' : '', 'message': ''});
        }

        $scope.create = function (fortune) {
            FortunesProvider.create(fortune, function () {
                $location.path('/');
            });
        };

        $scope.getUsers = function (query) {
            if (query && query.length > 3) {
                return UserProvider.find(query);
            }

            return null;
        }
    })
;