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