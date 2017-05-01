'use strict'
// set up angular
angular.module('bondApp', [])
	.controller('BondController', BondController)
	.directive('bondCar', bondCar);

// injection for BondController
BondController.$inject = ['$http'];

// Controller
function BondController($http){

}

function bondCar(){
	let directive = {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/carDirective.html',
		scope: {

		}
	};
}