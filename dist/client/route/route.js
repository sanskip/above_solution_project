'use strict';

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
            controller: 'tagController',
            templateUrl: 'client/views/tag.html'
        })
        .otherwise({ redirectTo: '/' });
}]);
