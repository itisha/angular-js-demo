(function () {
    var helloWorld = [function () {
        return {
            scope: {
                name: '@'
            },
            template: 'Hello World, {{ name }}!'
        }
    }];

    angular.module('angularApp')
        .directive('helloWorld', helloWorld);
}());