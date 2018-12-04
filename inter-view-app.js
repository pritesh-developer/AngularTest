var app=angular.module('InterviewApp',["ngRoute"]);

    app.controller('InterviewAppController', function($scope){
		
		$scope.name="Pritesh's InterviewApp";
		
		$scope.email="Paul.pritesh@gmail.com";
		
		
	});
	
	app.config(function($routeProvider){
		
		$routeProvider.when('/',{templateUrl:'inter-view.html',controller='InterviewAppController'})
	                  .when('/products',{templateUrl:'products.html'})
					  .when('/product/:id', {templateUrl:'product.html', conteroller:""});
					
		             
		
	});
	
	
	
	
	
	
	

	

	