/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("sportsStore")
.controller("sportsStoreCtrl", function ($scope){
    
        $scope.data = {
        products:[
            { name: "Product #1", description: "A product",
              category : "Category #1", price: 100},
            { name: "Product #2", description: "Ab product",
              category : "Category #1", price: 110},
            { name: "Product #3", description: "Ac product",
              category : "Category #3", price: 120},
            { name: "Product #4", description: "Ad product",
              category : "Category #4", price: 130}]
        };
    });
