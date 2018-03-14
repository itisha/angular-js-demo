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
            ds: '=',
            action: '&'
        },
        template: 'Name: {{ds.name}} <br/>City: {{ds.city}}' +
        '<br/> <button ng-click="ds.name=\'Fred\'; action()">' +
        'Change</button>'
    };
});

angularApp.directive('linkDemo', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.on('click', function () {
                elem.html('You clicked me');
            });
            elem.on('mouseenter', function () {
                elem.css('background-color', 'yellow');
            });
            elem.on('mouseleave', function () {
                elem.css('background-color', 'white');
            });
        }
    };
});