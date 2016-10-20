'use strict';
/* Directives */
angular.module('trnApp.directives', []).
directive('appVersion', ['version', function (version) {
    return function (scope, elm, attrs) {
        elm.text(version);
    };
  }]);