(function (ng, R) {
    'use strict';

    var ramdangularModule = ng.module('ramdangular', []),
        utilsModule = ng.module('ramdangular/utils', []);


    var bind = function (func, ctx) {
        return Function.prototype.bind.apply(func, Array.prototype.slice.call(arguments, 1));
    };

    //register utils
    R.forEach(function (functionName) {

        function register($rootScope) {
            $rootScope[functionName] = bind(R[functionName], R);
        }

        R.forEach(function (module) {
                module.run(['$rootScope', register]);
            }, [
                ramdangularModule,
                utilsModule,
                ng.module('ramdangular/utils/' + functionName, [])
            ]
        );

    }, R.functionsIn(R));


}(angular, ramda));