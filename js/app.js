 var app = angular.module('myApp', ['ui.router', 'dashboardApp', 'signinApp']);

         // configure our routes
 app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
     $stateProvider

             // route for the home page
                 .state('/', {
                     url : "/signIn",
                     templateUrl : '../html/signin.html',
                 })
                 .state('signIn', {
                     url : "/signIn",
                     templateUrl : '../html/signin.html',
                 })
                 .state('dashboard', {
                     templateUrl : '../html/dashboard.html',
                     url  : '/dashboard'
                 })
            $urlRouterProvider.otherwise("signIn");
     $locationProvider.html5Mode(true).hashPrefix('!');
         });
