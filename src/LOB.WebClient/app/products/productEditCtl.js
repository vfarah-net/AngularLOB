(function () {
    'use strict';

    angular
        .module('productManagement')
        .controller('ProductEditCtl', ProductEditCtl);

    ProductEditCtl.$inject = ['product', '$state'];

    function ProductEditCtl(product, $state) {
        var vm = this;
        vm.product = product;
        if (vm.product && vm.product.productId) {
            vm.title = 'Edit: ' + vm.product.productName;
        } else {
            vm.title = "New Product";
        }

        //Date Picker form and options

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = !vm.opened;
        }

        vm.dateOptions = {
            startingDay : 1
        };

        vm.save = function () {
            vm.product.$save(function(data) {
                toastr.success("Save Successful");
            },function(data) {
                toastr.error("Unable to save because " + data);
            });
        };

        vm.cancel = function () {
            $state.go("productList");
        };

        vm.addTags = function (tags) {
            debugger;
            if (tags) {
                var array = tags.split(",");
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            } else {
                alert("Please enter one or more tags seperated by commas");
            }
        }

        vm.removeTag = function(index) {
            vm.product.tags.splice(index, 1);
        }
    }
})();
