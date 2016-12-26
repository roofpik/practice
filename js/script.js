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

	    .when('/gallery', {
	        templateUrl: 'templates/gallery.html',
	        controller: 'galleryController'
	    })

	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('galleryController', function($scope, $timeout) {

	    $scope.images = [{
	        thumb: "https://farm1.static.flickr.com/607/31746390721_dfdfe1a2c6_b.jpg",
	        src: "https://farm1.static.flickr.com/736/31754439461_5f8dfd796b_b.jpg",
	        display: true,
	        alt: "Just another sunset in Tanzania"
	    }, {
	        thumb: "https://farm1.static.flickr.com/750/31721567322_4639ba3d74_b.jpg",
	        src: "https://farm1.static.flickr.com/607/31746390721_dfdfe1a2c6_b.jpg",
	        display: false
	    }, {
	        thumb: "https://farm1.static.flickr.com/736/31754439461_5f8dfd796b_b.jpg",
	        src: "https://farm1.static.flickr.com/750/31721567322_4639ba3d74_b.jpg",
	        display: false
	    }]

	    $timeout(function() {
	        $('a[data-imagelightbox="a"]').imageLightbox({
	            activity: true,
	            arrows: true,
	            button: true,
	            caption: true,
	            navigation: false,
	            overlay: true
	        });

	    }, 500)


	});


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
	    $scope.addressFn = function(value) {
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





	scotchApp.directive('address', function() {
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
