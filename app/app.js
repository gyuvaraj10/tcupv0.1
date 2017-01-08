'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'myApp.version'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  // default to log in state
  $urlRouterProvider.otherwise('/home');
  $urlRouterProvider.when('/week1', '/week1');
  $urlRouterProvider.when('/week2', '/week2');
  $urlRouterProvider.when('/week3', '/week3');
  $urlRouterProvider.when('/week4', '/week4');
  $urlRouterProvider.when('/week5', '/week5');
  $urlRouterProvider.when('/total', '/total');
 
 $stateProvider.state('tcup',{
  views:{
     'header@':{
      templateUrl: 'header/header.html'
     },
     'footer@': {
      templateUrl: 'footer/footer.html'
     }
  }
 }).state('tcup.login', {
  url: '/home',
  views: {
     'login@':{
        controller: 'LoginController',
        controllerAs: 'loginController',
        templateUrl: 'login/login.html'
      }
  },
  resolve: {
            $pageId: function () {
                return 'LOGIN';
            },
            $title: function () {
                return 'Login Page';
            }
        }
 });

 $stateProvider.state('tcup.tsheet', {
  url: '/timesheet',
  views:{
    'login@':{
       templateUrl: 'tsheet/timesheet.html',
       controller: 'TimeSheetController'
     }
     //  'weeklydata@tcup.tsheet':{
     //   templateUrl: 'weeklysheet/weeklysheet.html',
     //   controller: 'WeeklySheetController'
     // }
   } 
  });
}]);
