/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("sportsStoreAdmin")
.constant("productUrl", "http://localhost:5500/products/")
.config(function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
})
.controller("productCtrl", function ($scope, $resource, productUrl) {
    $scope.productsResource = $resource(productUrl + ":id", { id: "@id" });
    console.log($scope.productsResource.query());
    $scope.listProducts = function () {
        $scope.products = $scope.productsResource.query();
    };
    $scope.deleteProduct = function (product) {
        product.$delete().then(function () {
            $scope.products.splice($scope.products.indexOf(product), 1);
        });
    };
    $scope.createProduct = function (product) {
        new $scope.productsResource(product).$save().then(function (newProduct) {
            $scope.products.push(newProduct);
            $scope.editedProduct = null;
        });
    };
    $scope.updateProduct = function (product) {
        product.$save();
        $scope.editedProduct = null;
    };
    $scope.startEdit = function (product) {
        $scope.editedProduct = product;
    };
    $scope.cancelEdit = function () {
        $scope.editedProduct = null;
    };
    $scope.listProducts();
});