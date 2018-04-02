// create the module and name it scotchApp
var angularApp = angular.module('angularApp', ['ngRoute']);

// configure our routes
angularApp.config(function ($routeProvider, $locationProvider) {
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

        // route for the test page
        .when('/test', {
            templateUrl: 'views/test.html',
            controller: 'TestController'
        });
});