(function () {
    'use strict';

    var app = angular.module('productManagement', [
        // Angular modules 

        // Custom modules 
        "common.services",
        "productResourceMock",
        // 3rd Party Modules
        "ui.router"
    ]);

    app.config(["$stateProvider",
                "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                //Home
                .state("home", {
                    url: "/",
                    templateUrl:"app/welcomeView.html"                    
                })
                // Products
                .state("productList", {
                    url: "/products",
                    templateUrl: "app/products/productListView.html",
                    controller: "ProductListCtl as vm"
                })
                .state("productEdit", {
                    url: "/products/edit/:productId",
                    templateUrl: "app/products/productEditView.html",
                    controller: "ProductEditCtl as vm"
                });
        }
    ]);
})();