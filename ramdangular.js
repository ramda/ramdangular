'use strict';
(function (angular, R) {

    var ramdangularModule = angular.module('ramdangular', []),
        utilsModule = angular.module('ramdangular/utils', []);

    var bind = function (func) {
        return Function.prototype.bind.apply(func, Array.prototype.slice.call(arguments, 1));
    };

    //register utils
    R.forEach(function (functionName) {

        //register functions
        function register($rootScope) {
            $rootScope[functionName] = bind(R[functionName], R);
        }

        R.forEach(function (module) {
                module.run(['$rootScope', register]);
            }, [
                ramdangularModule,
                utilsModule,
                angular.module('ramdangular/utils/' + functionName, [])
            ]
        );

    }, R.functionsIn(R));


}(angular, ramda));