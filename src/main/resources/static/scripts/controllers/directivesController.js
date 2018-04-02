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