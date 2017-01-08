'use strict';


var app = angular.module('myApp');


app.controller('TimeSheetController', ['$scope', function ($scope) {
	var d = new Date();
	var displayTable;
	// $scope.weeks = [{"name" : "week1"}, {"name":"week2"}, {"name":"week3"}, {"name":"week4"}, {"name":"Total"}];
	$scope.isSelected =  function(weekname){
		
		console.log('checking weekname is selected ' + displayTable);
		if(weekname == displayTable){
			console.log('true');
			return true;
		};
		return false;
		console.log('false');
	};
	
	$scope.displaySheet = function(weekname){
		displayTable = weekname;
		console.log('clicked weekname: ' + displayTable);
	};

    $scope.weeks = [
    { "name": "week1",
      "dayefforts": [{
        'day': 'Monday',
        'date': '1/1/2017',
        'regular': '7.5',
        'overtime': '2',
        'total': '9.5'
      },
      {
        'day': 'Tuesday',
        'date': '2/1/2017',
        'regular': '7.5',
        'overtime': '2',
        'total': '9.5'
      },
       {
        'day': 'Wednesday',
        'date': '3/1/2017',
        'regular': '7.5',
        'overtime': '2',
        'total': '9.5'
       }] 
    }, 
    { "name": "week2",
      "dayefforts": [
      {
        'day': 'Monday',
        'date': '1/1/2017',
        'regular': '7.5',
        'overtime': '2',
        'total': '9.5'
      },
      {
        'day': 'Tuesday',
        'date': '2/1/2017',
        'regular': '7.5',
        'overtime': '2',
        'total': '9.5'
      }] 
    }, 
    { "name": "week3",
      "dayefforts": [
      {
        'day': 'Tuesday',
        'date': '2/1/2017',
        'regular': '7.5',
        'overtime': '2',
        'total': '9.5'
      },
       {
        'day': 'Wednesday',
        'date': '3/1/2017',
        'regular': '7.5',
        'overtime': '2',
        'total': '9.5'
       }] 
    }, 
    { "name": "week4",
      "dayefforts": [
       {
        'day': 'Tuesday',
        'date': '2/1/2017',
        'regular': '7.5',
        'overtime': '2',
        'total': '9.5'
      },
       {
        'day': 'Wednesday',
        'date': '3/1/2017',
        'regular': '7.5',
        'overtime': '2',
        'total': '9.5'
       }
      ]}, 
     { "name": "Total",
       "dayefforts": [
       {
        'day': 'Tuesday',
        'date': '2/1/2017',
        'regular': '7.5',
        'overtime': '2',
        'total': '9.5'
      },
       {
        'day': 'Wednesday',
        'date': '3/1/2017',
        'regular': '7.5',
        'overtime': '2',
        'total': '9.5'
       }
       ]}
    ];
}]);