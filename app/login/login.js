/**
 * Created by yuvaraj on 07/01/17.
 */


angular.module('myApp')
    .controller('LoginController', ['$scope', '$state', function($scope, $state){
      $scope.login = function(){
      	console.log($scope.username);
        console.log($scope.password);

        if($scope.username === 'yuvaraj' && $scope.password === 'password'){
            $state.go('tcup.tsheet');
        }
      };
}]);