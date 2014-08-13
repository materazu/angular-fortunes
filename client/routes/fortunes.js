'use strict';

app.config(
    function ($routeProvider, pathConstant) {
        $routeProvider
            .when('/', {
                'controller': 'fortunesList',
                'templateUrl': pathConstant.views.fortunes.list
            })
            .when('/add', {
                'controller': 'fortunesAdd',
                'templateUrl': pathConstant.views.fortunes.add
            })
            .when('/top10', {
                'controller': 'fortunesTop',
                'templateUrl': pathConstant.views.fortunes.list
            })
            .when('/bad10', {
                'controller': 'fortunesBad',
                'templateUrl': pathConstant.views.fortunes.list
            })
    }
)