(function () {

    var controllerAs = function () {

        var link = function (scope, elem, attrs, tableHelperCtrl, transclude) {

            transclude(scope, function (content) {

                var th = angular.element('<th mapsto="' + scope.mapsto + '">' +
                    content[0].data + '</th>');
                th.on('click', function () {
                    scope.$apply(function () {
                        tableHelperCtrl.sort(scope.mapsto);
                    });
                });

                elem.replaceWith(th);

            });
        };

        return {
            restrict: 'E',
            transclude: true,
            require: '^tableHelperTransclude',
            scope: {
                mapsto: '@'
            },
            link: link
        };
    };

    angular.module('angularApp')
        .directive('header', controllerAs);

}());
