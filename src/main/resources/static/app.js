// create the module and name it scotchApp
var angularApp = angular.module('angularApp', ['ngRoute']);

// configure our routes
angularApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })

        .when('/directives', {
            templateUrl: 'pages/directives.html',
            controller: 'directivesController'
        })

        // route for the test page
        .when('/test', {
            templateUrl: 'pages/test.html',
            controller: 'testController'
        });
});