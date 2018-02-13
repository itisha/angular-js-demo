// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$timeout', '$filter', function ($scope, $timeout, $filter) {

    $scope.name = 'Tisha';

    $timeout(function () {

        $scope.name = 'Everybody';

    }, 3000);

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    }

}]);