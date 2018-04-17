(function () {

    var withController = function () {

        var template = '<button ng-click="vm.addItem()">Add Item</button><ul>' +
                '<li ng-repeat="item in vm.items">{{ ::item.name }}</li></ul>',

            controller = function () {

                var vm = this;

                function init() {
                    vm.items = angular.copy(vm.datasource);
                }

                vm.addItem = function () {
                    var name = 'With Controller Item';
                    vm.add()(name);
                    vm.items.push({
                        name: name
                    });
                };

                init();
            };

        return {
            restrict: 'EA', //Default in 1.3+
            scope: {
                datasource: '=',
                add: '&'
            },
            controller: controller,
            controllerAs: 'vm',
            bindToController: true,
            template: template
        };
    };

    angular.module('angularApp')
        .directive('withController', withController);

}());
