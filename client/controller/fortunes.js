'use strict';

app
    /**
     *
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
     *
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