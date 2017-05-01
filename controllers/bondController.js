'use strict'
// set up angular
angular.module('BondCars', [])
	.controller('BondController', BondController);

// injection for BondController
BondController.$inject = ['$http'];

// Controller
function BondController($http){

}