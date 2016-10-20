'use strict';
// Declare app level module which depends on filters, and services
angular.module('trnApp', [
  'ngRoute'
  , 'ngAnimate'
  , 'trnApp.filters'
  , 'trnApp.services'
  , 'trnApp.directives'
  , 'trnApp.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'views/sessions.html'
        , controller: 'SessionCtrl'
    })
    .when('/view1/:caseId', {
        templateUrl: 'views/sessions.html'
        , controller: 'SessionCtrl'
    })
    .when('/view1/:caseId/:lineId', {
        templateUrl: 'views/sessions.html'
        , controller: 'SessionCtrl'
    })
    .when('/view2', {
        templateUrl: 'views/admin-main.html'
        , controller: 'AdminCtrl'
    })
    .otherwise({
        redirectTo: '/view1'
    });
}]);