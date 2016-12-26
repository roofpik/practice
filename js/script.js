	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
	    $routeProvider
	    // route for the home page
	        .when('/', {
	        templateUrl: 'templates/home.html',
	        controller: 'mainController'
	    })

	    // route for the about page
	    .when('/about', {
	        templateUrl: 'templates/about.html',
	        controller: 'aboutController'
	    })

	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
	    // create a message to display in our view
	    console.log('main controller');
	    $scope.message = 'Everyone come and see how good I look!';
	    $scope.test = 'test value';
	    $scope.responseFn = function(val) {
	        console.log(val);
	    }
	});



	scotchApp.controller('studentController', function($scope) {
	    console.log('student controller');
	    $scope.student = {};
	    $scope.student.name = 'rahul';
	    $scope.studentResponse('value');
	    console.log($scope.message);
	    $scope.addressFn = function(value){
	    	console.log(value);
	    }

	});

	scotchApp.controller('addressController', function($scope) {
		console.log($scope.studentName);
		$scope.stuAddress = 'Gurgaon';
		$scope.addressResponse($scope.stuAddress);
	});


	scotchApp.directive('student', function() {
	    var directive = {};
	    directive.restrict = 'E';
	    directive.replace = true;
	    directive.templateUrl = 'templates/partials/student.html';
	    directive.scope = {
	        studentResponse: "=",
	        message: '@msg'
	    };
	    directive.compile = function(element, attributes) {
	    	console.log('compile directive');
	    };

	    directive.controller = 'studentController';
	    return directive;
	});





	scotchApp.directive('address', function(){
		var directive = {};
		directive.restrict = 'E';
		directive.replace = true;
		directive.templateUrl = 'templates/partials/address.html';
		directive.scope = {
	        addressResponse: "=",
	        studentName: '@stuName'
	    };

	     directive.controller = 'addressController';
	     return directive;

	})




	scotchApp.controller('aboutController', function($scope) {
	    $scope.message = 'Look! I am an about page. it is changed now';
	});