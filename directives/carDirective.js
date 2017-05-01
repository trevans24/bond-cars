'use strict'
// set up angular for directive
angular.module('BondCars')
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