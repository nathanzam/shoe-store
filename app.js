(function() {
  'use strict';

  angular
  .module("gemStore", ["store-products"])

    .controller("StoreCtrl", function($http, $scope) {
      $http.get("./products.json").then(function (response) {
        $scope.products = response.data;

      });
    })

    .controller("ReviewCtrl");

}());
