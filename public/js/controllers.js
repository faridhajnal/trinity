'use strict';
/* Controllers */
angular.module('trnApp.controllers', []).
controller('mainCtrl', ['$scope', 'GlobalScopes', 'SessionService', function ($scope, GlobalScopes, SessionService) {
    $scope.analists = [
        {
            name: 'Analista 1'
            , type: 1
            , lastActive: new Date(2016, 10, 2, 4, 55, 13, 0)
            , image: 'img/user1-128x128.jpg'
         }
        , {
            name: 'Analista 2'
            , type: 0
            , lastActive: new Date(2016, 9, 30, 16, 2, 6, 0)
            , image: 'img/user2-160x160.jpg'
        }
        , {
            name: 'Analista 3'
            , type: 0
            , lastActive: new Date(2016, 10, 1, 18, 12, 55, 0)
            , image: 'img/user3-128x128.jpg'
         }
        , {
            name: 'Analista 4'
            , type: 0
            , lastActive: new Date(2016, 10, 2, 16, 20, 0, 0)
            , image: 'img/user4-128x128.jpg'
         }

    ];
    $scope.sessions = [
        {
            "id": 2755
            , "number": 5537524491
            , "date": new Date(2016, 10, 1, 18, 25, 43, 0)
            , "duration": "00 min. 33 seg."
            , "status": 1
            , "history": ["Creado 02 Oct 2016", "Pedido 01 Oct 2016"]
            , "priority": 0
            , "audio": "/audio/2755_021017_5537524491.wav"
            , "sinopsis": "Aqui va la sinopsis."
            , "transcription": "Aqui va la transcripcion"
            , "comments": [{
                "uID": 1
                , "comment": "Comentario 1"
            }, {
                "uID": 2
                , "comment": "Comentario 2"
            }, {
                "uID": 3
                , "comment": "Comentario 4"
            }]
	}
        , {
            "id": 2894
            , "number": 52344418549
            , "date": new Date(2016, 9, 30, 18, 14, 14, 0)
            , "duration": "21 min. 03 seg."
            , "status": 2
            , "history": ["Editado 30 Sep 2016 - Analista 3", "Creado 02 Oct 2016", "Pedido 01 Oct 2016"]
            , "priority": 3
            , "audio": "/audio/2755_021017_5537524491.wav"
            , "sinopsis": "Aqui va la sinopsis."
            , "transcription": "Aqui va la transcripcion"
            , "comments": [{
                "uID": 2
                , "comment": "Comentario 2"
            }, {
                "uID": 3
                , "comment": "Comentario 1"
            }, {
                "uID": 2
                , "comment": "Comentario 2"
            }]
	}
        , {
            "id": 3122
            , "number": 5525614217
            , "date": new Date(2016, 9, 25, 3, 45, 43, 0)
            , "duration": "03 min. 17 seg."
            , "status": 3
            , "history": ["Editado 03 Oct 2016 - Analista 2", "Creado 01 Oct 2016", "Pedido 30 Sep 2016"]
            , "priority": 0
            , "audio": "/audio/2755_021017_5537524491.wav"
            , "sinopsis": "Aqui va la sinopsis."
            , "transcription": "Aqui va la transcripcion"
            , "comments": [{
                "uID": 1
                , "comment": "Comentario 1"
            }, {
                "uID": 1
                , "comment": "Comentario 1"
            }, {
                "uID": 1
                , "comment": "Comentario 1"
            }]
	}
        , {
            "id": 4148
            , "number": 5546618759
            , "date": new Date(2016, 09, 30, 18, 12, 6, 0)
            , "duration": "04 min. 45 seg."
            , "status": 0
            , "history": ["Pedido 01 Oct 2016"]
            , "priority": 2
            , "audio": "/audio/2755_021017_5537524491.wav"
            , "sinopsis": "Aqui va la sinopsis."
            , "transcription": "Aqui va la transcripcion"
            , "comments": [{
                "uID": 1
                , "comment": "Comentario 1"
            }, {
                "uID": 2
                , "comment": "Comentario 2"
            }, {
                "uID": 2
                , "comment": "Comentario 2"
            }]
	}
        , {
            "id": 2755
            , "number": 5537524491
            , "date": new Date(2016, 10, 25, 1, 18, 26, 0)
            , "duration": "00 min. 33 seg."
            , "status": 1
            , "history": ["Creado 02 Oct 2016", "Pedido 01 Oct 2016"]
            , "priority": 1
            , "audio": "/audio/2755_021017_5537524491.wav"
            , "sinopsis": "Aqui va la sinopsis."
            , "transcription": "Aqui va la transcripcion"
            , "comments": [{
                "uID": 1
                , "comment": "Comentario 1"
            }, {
                "uID": 2
                , "comment": "Comentario 2"
            }, {
                "uID": 3
                , "comment": "Comentario 4"
            }]
	}
        , {
            "id": 2894
            , "number": 52344418549
            , "date": "2016-09-30T14:14:43.511Z"
            , "duration": "21 min. 03 seg."
            , "status": 2
            , "history": ["Editado 30 Sep 2016 - Analista 3", "Creado 02 Oct 2016", "Pedido 01 Oct 2016"]
            , "priority": 2
            , "audio": "/audio/2755_021017_5537524491.wav"
            , "sinopsis": "Aqui va la sinopsis."
            , "transcription": "Aqui va la transcripcion"
            , "comments": [{
                "uID": 2
                , "comment": "Comentario 2"
            }, {
                "uID": 3
                , "comment": "Comentario 1"
            }, {
                "uID": 2
                , "comment": "Comentario 2"
            }]
	}
        , {
            "id": 3122
            , "number": 5525614217
            , "date": "2016-09-25T02:02:45.511Z"
            , "duration": "03 min. 17 seg."
            , "status": 3
            , "history": ["Editado 03 Oct 2016 - Analista 2", "Creado 01 Oct 2016", "Pedido 30 Sep 2016"]
            , "priority": 0
            , "audio": "/audio/2755_021017_5537524491.wav"
            , "sinopsis": "Aqui va la sinopsis."
            , "transcription": "Aqui va la transcripcion"
            , "comments": [{
                "uID": 1
                , "comment": "Comentario 1"
            }, {
                "uID": 1
                , "comment": "Comentario 1"
            }, {
                "uID": 1
                , "comment": "Comentario 1"
            }]
	}
        , {
            "id": 2894
            , "number": 52344418549
            , "date": "2016-09-30T14:14:43.511Z"
            , "duration": "21 min. 03 seg."
            , "status": 2
            , "history": ["Editado 30 Sep 2016 - Analista 3", "Creado 02 Oct 2016", "Pedido 01 Oct 2016"]
            , "priority": 1
            , "audio": "/audio/2755_021017_5537524491.wav"
            , "sinopsis": "Aqui va la sinopsis."
            , "transcription": "Aqui va la transcripcion"
            , "comments": [{
                "uID": 2
                , "comment": "Comentario 2"
            }, {
                "uID": 3
                , "comment": "Comentario 1"
            }, {
                "uID": 2
                , "comment": "Comentario 2"
            }]
	}
        , {
            "id": 3122
            , "number": 5525614217
            , "date": "2016-09-25T02:02:45.511Z"
            , "duration": "03 min. 17 seg."
            , "status": 3
            , "history": ["Editado 03 Oct 2016 - Analista 2", "Creado 01 Oct 2016", "Pedido 30 Sep 2016"]
            , "priority": 0
            , "audio": "/audio/2755_021017_5537524491.wav"
            , "sinopsis": "Aqui va la sinopsis."
            , "transcription": "Aqui va la transcripcion"
            , "comments": [{
                "uID": 1
                , "comment": "Comentario 1"
            }, {
                "uID": 1
                , "comment": "Comentario 1"
            }, {
                "uID": 1
                , "comment": "Comentario 1"
            }]
	}];
    GlobalScopes.store('Analists', $scope.analists);
    SessionService.store($scope.sessions);
}]).
controller('SessionCtrl', ['$scope', 'GlobalScopes', 'SessionService', function ($scope, GlobalScopes, SessionService) {
    $scope.analists = GlobalScopes.get('Analists');
    $scope.sessions = SessionService.get();
}]).
controller('AdminCtrl', ['$scope', 'GlobalScopes', 'SessionService', function ($scope, GlobalScopes, SessionService) {
    $scope.analists = GlobalScopes.get('Analists');
    $scope.recentSessions = SessionService.getRecent();
    $scope.availableLines = 603;
    $scope.activeLines = 22;
    $scope.reportedFlaws = 1;
    $scope.pendingSessions = SessionService.getTypeNumber(1);
}]);