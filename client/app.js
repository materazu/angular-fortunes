'use strict';

var app = angular.module('fortunes', ['ngRoute', 'restangular', 'siyfion.sfTypeahead']);

app.config(function (RestangularProvider, configConstant) {
    RestangularProvider.setBaseUrl(configConstant.apiBaseUrl);
});