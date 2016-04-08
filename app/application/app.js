var routerApp = angular.module('hackathonApp', ['ui.router']);
routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'application/home/home.html',
            controller: 'homeController'
        }).state('usecase', {
            url: '/usecase',
            templateUrl: 'application/usecase/usecase.html',
            controller: 'usecaseController'
        }).state('signup', {
            url: '/signup',
            templateUrl: 'application/signup/signup.html',
            controller: 'signupController'
        }).state('benefits', {
            url: '/benefits',
            templateUrl: 'application/benefits/benefits.html',
            controller: 'benefitsController'
        });
});