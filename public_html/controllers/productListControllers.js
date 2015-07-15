/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global angular */

angular.module("sportsStore")
.controller("productListCtrl", function ($scope, $filter){
    var selectedCategory = null;
    
    $scope.selectCategory = function (newCategory){
        selectedCategory = newCategory;
    };
    $scope.categoryFilterFn = function(product){
        return selectedCategory == null || 
                product.category == selectedCategory;
    };   
                 
});
