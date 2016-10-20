'use strict';
/* Services */
// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('trnApp.services', []).
factory('GlobalScopes', function ($rootScope) {
    var mem = {};
    return {
        store: function (key, value) {
            $rootScope.$emit('scope.stored', key);
            mem[key] = value;
        }
        , get: function (key) {
            return mem[key];
        }
    };
}).
factory('SessionService', function ($rootScope) {
    var lines = {};
    var filterByStatus = function (obj, type) {
        return obj.status === type;
    };
    return {
        store: function (value) {
            $rootScope.$emit('scope.stored');
            lines = value;
        }
        , get: function () {
            return lines;
        }
        , getRecent: function () {
            //sort by date desc then return the lines.
            return lines.slice(0, 4);
        }
        , getByType: function (type) {
            return lines.filter(filterByType.bind(this, type));
        }
        , getTypeNumber: function (type) {
            return lines.filter(function (x) {
                return x.status == type
            }).length;
        }
    }
});