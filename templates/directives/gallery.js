	scotchApp.directive('gallery', function() {
	    return {
	        restrict: 'E',
	        replace: true,
	        templateUrl: 'templates/directives/gallery.html',
	        controller: 'galleryCtrl',
	        scope: {
	            galleryResponse: '='
	        }
	    }
	});


	scotchApp.controller('galleryCtrl', function($scope, $timeout) {
		$scope.showGallery = false;
	    $scope.$on('initGallery', function(event, data) {
	        $scope.images = data;
	        $timeout(function() {
	            var gallery = $('a[data-imagelightbox="a"]').imageLightbox({
	                activity: true,
	                arrows: true,
	                button: true,
	                caption: true,
	                navigation: false,
	                overlay: true
	            });

	            // $scope.showGallery = false;

	            $('.trigger_gallery').on('click', function() {
	                gallery.startImageLightbox();
	            });
	            $scope.showGallery = true;

	        }, 500)

	    });


	})
