'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'myApp.version'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  // default to log in state
  $urlRouterProvider.otherwise('/login');

  $stateProvider.state('login', {
      url: '/login',
      controller: 'LoginController',
      controllerAs: 'loginController',
      templateUrl: 'login/login.html'
  });


}]);
