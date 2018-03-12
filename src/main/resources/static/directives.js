angularApp.directive('helloWorld', function () {
    return {
        scope: {
            name: '@'
        },
        template: 'Hello World, {{ name }}!'
    };
});

angularApp.directive('isolatedScopeObject', function () {
    return {
        scope: {
            ds: '='
        },
        template: 'Name: {{ds.name}} <br/>City: {{ds.city}}' +
        '<br/> <button ng-click="ds.name=\'Fred\'">' +
        'Change</button>'
    };
});