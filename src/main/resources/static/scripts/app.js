// create the module and name it scotchApp
var angularApp = angular.module('angularApp', ['ngRoute']);

// configure our routes
angularApp.config(function ($routeProvider, $locationProvider, $compileProvider) {

    //makes data bindings available immediately in directive controller constructor
    $compileProvider.preAssignBindingsEnabled(true);

    $locationProvider.hashPrefix('');

    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })

        .when('/directives', {
            templateUrl: 'views/directives.html',
            controller: 'DirectivesController'
        })

        .when('/delayBindWithCompile', {
            templateUrl: 'views/delayBindWithCompile.html',
            controller: 'DelayedBindWithCompileController'
        })

        // route for the test page
        .when('/test', {
            templateUrl: 'views/test.html',
            controller: 'TestController'
        })

        .when('/tableHelperWithController', {
            templateUrl: 'views/tableHelperWithController.html',
            controller: 'TableHelperWithControllerController'
        })

        .when('/withoutOrWithoutController', {
            templateUrl: 'views/withoutOrWithoutController.html',
            controller: 'WithoutOrWithoutController'
        });
});