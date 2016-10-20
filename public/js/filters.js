'use strict';
/* Filters */
angular.module('trnApp.filters', []).
filter('interpolate', ['version', function (version) {
    return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);