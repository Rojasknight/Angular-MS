'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'vm',
  });
}])

.controller('View1Ctrl',['$scope','$http' ,function($scope, $http) {
var vm = this;
vm.productos =[];
$http.get('http://calidad.dev/api/produtos/producto/index',{})
.then(function(response){
  
  vm.productos = response.data;
  console.log(vm.productos);
})
}]);