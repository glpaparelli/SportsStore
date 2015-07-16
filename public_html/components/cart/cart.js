/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/* global angular */

angular.module("cart",[])
.factory("cart", function (){
    var cartData = [];
    
    return {
        
        addProduct: function (id,name,price){
            var addedToExistingItem = false;
            for (var i = 0; i<cartData.length;i++){
                if(cartData[i].id == id){
                    cartData[i].count++;
                    addedToExistingItem = true;
                    break;
                }
            }
            if(!addedToExistingItem){
                cartData.push({
                    count: 1,id:id,price:price,name:name
                });
            }
        },
        removeProduct: function(id){
            for (var i = 0; i<cartData.length; i++){
                if(cartData[i].id == id){
                    cartData.splice(1,1);
                }
            }  
        },
        getProducts:   function (){
            return cartData;
        }
    };
})
.directive("cartSummary", function (cart) {
    return {
        restrinct: "E",
        templateUrl: "components/cart/cartSummary.html",
        controller: function ($scope) {
            var cartData = cart.getProducts();
            $scope.total = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += (cartData[i].price * cartData[i].count)
                }
                return total;
            }

            $scope.itemCount = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += cartData[i].count;
                }
                return total;
            }
        }
    };
});






