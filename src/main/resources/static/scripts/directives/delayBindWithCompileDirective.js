(function () {

    var delayBindWithCompile = ['$interpolate', function ($interpolate) {

        var compile = function (tElem, tAttrs) {
            console.log('In compile');
            var interpolateFunc = $interpolate(tAttrs.delayBind);
            tAttrs.$set('delayBind', null);

            return {
                pre: function (scope, elem, attrs) {
                    console.log('in delaybind pre ' + elem[0].tagName);
                },
                post: function (scope, elem, attrs) {
                    console.log('in delaybind post ' + elem[0].tagName);
                    elem.on(attrs.trigger, function (event) {
                        var attr = attrs.attribute,
                            val = interpolateFunc(scope);

                        //elem.attr() seem to be a check if there is that attribute already set for this element
                        //we don't want to override that attribute
                        if (attr && !elem.attr(attr)) {
                            elem.attr(attr, val);
                        }
                    })
                }
            }
        };

        return {
            restrict: 'A',
            compile: compile
        };
    }];

    angular.module('angularApp')
        .directive('delayBind', delayBindWithCompile);
}());