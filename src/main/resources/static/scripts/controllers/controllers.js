// create the controller and inject Angular's $scope
angularApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

angularApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

angularApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

angularApp.controller('directivesController', function ($scope) {
    $scope.person = {
        name: 'John',
        city: 'Minsk'
    };
    $scope.func = function () {
        console.log('action called');
    };
    $scope.customers = [
        {
            "name": "James",
            "last_name": "Butterburg",
            "age": 31,
            "street": "Chapaeva 4",
            "url": "http://ya.ru"
        },
        {
            "name": "Josephine",
            "last_name": "Darakjy",
            "age": 36,
            "street": "Chapaeva 2",
            "url": "http://ya.ru/1"
        },
        {
            "name": "Art",
            "last_name": "Chemel",
            "age": 33,
            "street": "Chapaeva 1",
            "url": "http://ya.ru/2"
        }
    ]
});

angularApp.controller('testController', ['$scope', '$timeout', '$filter', '$http', '$location', function ($scope, $timeout, $filter, $http, $location) {

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