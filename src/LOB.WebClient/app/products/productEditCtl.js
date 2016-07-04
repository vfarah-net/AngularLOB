(function () {
    'use strict';

    angular
        .module('productManagement')
        .controller('ProductEditCtl', ProductEditCtl);

    ProductEditCtl.$inject = ['product'];

    function ProductEditCtl(product) {
        var vm = this;
        vm.product = product;
        if (vm.product && vm.product.productId) {
            vm.title = 'Edit: ' + vm.product.productName;
        } else {
            vm.title = "New Product";
        }
    }
})();
