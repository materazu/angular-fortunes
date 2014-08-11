'use strict';

app.service('UserProvider', function (Restangular) {
    this.find = function (query) {
        return Restangular.all('users/' + query).getList().$object;
    }

    this.getOne = function (query) {
        return Restangular.all('user/' + query).getList().$object;
    }
});