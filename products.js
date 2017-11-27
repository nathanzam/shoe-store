(function() {
  'use strict';

  angular
  .module("store-products", [])

  .directive("productPanels", function() {
    return {
      restrict: 'E',
      templateUrl: "./partials/product-panels.html",
      controller: function ($scope){
        // will initialize tab variable
        $scope.tab = 1;

        // will set tab variable equal to whichever tab we click on
        $scope.selectTab = function (setTab) {
          $scope.tab = setTab;
        };

        // Add.active class to li tag whenever tab is clicked and will show each respective tab's content
        $scope.isSelected = function (checkTab) {
          return $scope.tab === checkTab;
        };
      }
    };
  })

  .directive("productReviews", function () {
    return {
      templateUrl: "./partials/product-reviews.html",
      controller:  function($scope) {
        $scope.review = {};

        $scope.addReview = function (product) {
          product.reviews.push($scope.review);
          $scope.review = {};
        };
      }
    };
  });

}());
