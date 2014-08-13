'use strict';

app.service('UserProvider', function (Restangular) {
    /**
     * Find a user with letters
     *
     * @param query
     * @returns {$object|*}
     */
    this.find = function (query) {
        return Restangular.all('users/' + query).getList().$object;
    }

    /**
     * Get one real user
     *
     * @param query
     * @returns {$object|*}
     */
    this.getOne = function (query) {
        return Restangular.all('user/' + query).getList().$object;
    }
});