angularApp.controller('TestController', ['$scope', '$timeout', '$filter', '$http', '$location', 'hexafy', function ($scope, $timeout, $filter, $http, $location, hexafy) {

    $scope.number = 257;
    $scope.hex = hexafy.myFunc($scope.number);
    console.log('Custom service call:');
    console.log('number = ' + $scope.number);
    console.log('hexafy result = ' + $scope.hex);

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
        .then(function (success) {

                $scope.rules = success.data;

            },
            function (error) {

                console.error(error);

            }
        );

    $scope.newRule = '';
    $scope.addRule = function () {

        $http.post('/api', {ruleName: $scope.newRule})
            .then(function (success) {

                console.log('posting data to server ...');
                $scope.newRule = '';

                //avoid redirecting after post
                console.log('PATH ::' + $location.path());
                $location.path('/test');


                //call list again for update, move to function
                $http.get('/api')
                    .then(function (success) {

                            $scope.rules = success.data;
                            console.log('refreshing data');

                        },
                        function (error) {

                            console.error(error);
                            console.error('error when refreshing data');

                        }
                    );

            });
    }

}]);