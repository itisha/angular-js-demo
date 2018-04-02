angularApp.directive('helloWorld', function () {
    return {
        scope: {
            name: '@'
        },
        template: 'Hello World, {{ name }}!'
    };
});