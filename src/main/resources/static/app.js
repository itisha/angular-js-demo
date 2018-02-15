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

    $scope.$watch('handle', function (newValue, oldValue) {
            console.info('Changed!');
            console.log('Old: ' + oldValue);
            console.log('New: ' + newValue);
        }
    );

    setTimeout(function () {

        /*Using apply to notify AngularJS digest loop*/
        $scope.$apply(function () {
            $scope.handle = 'newTwitterHandle';
            console.log('ScopeChanged')
        })

    }, 3000);

    $scope.characters = 5;

    $scope.alertClicked = function () {
        alert("Clicked");
    };

    $scope.name = 'John Doe';

    var rulesRequest = new XMLHttpRequest();
    rulesRequest.onreadystatechange = function () {
        $scope.$apply(function () {
            if (rulesRequest.readyState == 4 && rulesRequest.status == 200) {
                $scope.rules = JSON.parse(rulesRequest.responseText);
            }
        });
    };

    rulesRequest.open("GET", "http://localhost:8080/api", true);
    rulesRequest.send();

}]);