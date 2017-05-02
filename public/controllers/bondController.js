'use strict'
// set up angular
angular.module('bondApp', ['ngRoute'])
	.controller('CarsController', CarsController)
	.directive('bondCar', bondCar)
	// .config(carRoute)
	.factory('Cars', Cars);

// injection for BondController
CarsController.$inject = ['$http'];

// Controller
function CarsController($http){
	let vm = this;
	vm.all = [];
	vm.newCar = {};
	vm.addCar = addCar;

	// GET
	function getCars(){
		$http.get('/cars')
		.then((res)=>{
			console.log(res.data);
			vm.all = res.data;
			// console.log(vm.all);
		});
	}

	// POST
	function addCar(){
		vm.all.push(vm.newCar);
		$http.post('/cars', vm.newCar)
		.then((res)=>{
			console.log(res);
		});
		vm.newCar = {};
	}
	
	// DELETE
	function deleteCard(id){
		$http.delete('/cars/:id' + id)
		.then((res)=>{
			let index = vm.all.indexOf(id);
			vm.all.splice(index,1);
		});
	}


	getCars();
}

// directive
function bondCar(){
	let directive = {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/carDirective.html',
		scope: {
			id: '@',
			car: '='
		}
	};
	return directive;
}

// ROUTING
// carRoute.$inject = ['$routeProvider'];

// function carRoute($routeProvider){
// 	$routeProvider
// 	.when('/', {
// 		templateUrl: 'templates/carDirective.html'
// 	});
// }

// Factory
Cars.$inject = ['$http'];

function Cars($http){
	let carMethods = {};
	carMethods.getAllCars = function(){
		return $http.get('/cars');
	};
}