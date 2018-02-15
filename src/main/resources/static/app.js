// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$timeout', '$filter', '$http', function ($scope, $timeout, $filter, $http) {

    $scope.name = 'Tisha';

    $timeout(function () {

        $scope.name = 'Everybody';

    }, 3000);

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

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


    $http.get('/api')
        .success(function (result) {

            $scope.rules = result;

        })
        .error(function (data, status) {

            console.log(data);

        });

    $scope.newRule = '';
    $scope.addRule = function () {

        $http.post('/api', {ruleName: $scope.newRule})
            .success(function (result) {

                console.log(result);
                $scope.newRule = '';

                //call list again for update, move to function
                $http.get('/api')
                    .success(function (result) {

                        $scope.rules = result;

                    })
                    .error(function (data, status) {

                        console.log(data);

                    });

            })
            .error(function (data, status) {

                console.log(data);

            })
    }

}]);