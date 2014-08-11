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
    }
)