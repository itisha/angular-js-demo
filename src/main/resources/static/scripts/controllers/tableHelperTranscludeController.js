angularApp.controller('tableHelperTranscludeController', function ($scope) {

    var counter = 0;

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
        }];

    $scope.addCustomer = function (name) {
        console.log(name);
        counter++;
        $scope.customers.push({
            name: (name) ? name : 'Name_' + counter,
            last_name: 'Lastname_' + counter,
            street: counter + '00 Cedar Point St.',
            age: counter + 17,
            url: 'http://somewhere.com/00' + counter
        });
    };
});