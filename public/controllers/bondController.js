'use strict'
// set up angular
angular.module('bondApp', ['ngRoute'])
	.controller('CarsController', CarsController)
	.directive('bondCar', bondCar);

// injection for BondController
CarsController.$inject = ['$http'];

// Controller
function CarsController($http){
	let vm = this;
	vm.all = [];
	vm.newCar = {};
	vm.addCar = addCar;
	vm.deleteCar = deleteCar;
	vm.formDrop = formDrop;
	vm.newForm = false;

	// Form Drop Function
	function formDrop(){
		vm.newForm =!vm.newForm;
	}

	// GET
	function getCars(){
		$http.get('/cars')
		.then((res)=>{
			console.log(res.data);
			vm.all = res.data;
			// console.log(vm.all);
		});
	}

	getCars();

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
	function deleteCar(id){
		console.log("Delete Clicked");
		console.log(id);
		$http.delete('/cars/' + id)
		.then((res)=>{
			let index = vm.all.indexOf(id);
			vm.all.splice(index,1);
		});
	}

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