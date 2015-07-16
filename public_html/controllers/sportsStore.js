/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global angular */

angular.module("sportsStore")
.constant("dataUrl", "http://localhost:5500/products")
.controller("sportsStoreCtrl", function ($scope, $http, dataUrl){
    
        $scope.data = {};
        
        $http.get(dataUrl)
                .success(function (data){
                    $scope.data.products = data;
        })
        .error(function (error){
            $scope.data.error = error;
        });
});