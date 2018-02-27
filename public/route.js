(function(){
	'use strict'
	angular
		.module('appRoutes', ['ui.router', 'oc.lazyLoad', 'ngMessages', 'angularCSS', 'ngAnimate'])
		.config(configuration);

	configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configuration($stateProvider, $urlRouterProvider){
		$stateProvider

		.state('landing',{
			url: '/Home',
			templateUrl: './components/home/home.html',
			css: './css/agency.min.css',
			// resolve: {
			// 	load: ['$ocLazyLoad', function($ocLazyLoad){
			// 		return $ocLazyLoad.load('./components/landing/landing.controller.js')
			// 	}]
			// },
			// controller: 'landingController',
			// controllerAs: 'ctrl'
		})

		$urlRouterProvider.otherwise('/Home');
  };
})();
