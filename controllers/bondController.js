'use strict'
// set up angular
angular.module('BondCars', [])
	.controller('BondController', BondController)
	.directive('bondCar', bondCar);


function bondCar(){
	let directive = {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/carDirective.html',
		scope: {

		}
	};
}

// injection for BondController
BondController.$inject = ['$http'];

// Controller
function BondController($http){

}