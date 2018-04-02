// create the module and name it scotchApp
var angularApp = angular.module('angularApp', ['ngRoute']);

// configure our routes
angularApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })

        .when('/directives', {
            templateUrl: 'views/directives.html',
            controller: 'directivesController'
        })

        // route for the test page
        .when('/test', {
            templateUrl: 'views/test.html',
            controller: 'testController'
        });
});