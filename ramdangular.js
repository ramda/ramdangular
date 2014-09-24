'use strict';
(function (angular, R) {

    var ramdangularModule = angular.module('ramdangular', []),
        utilsModule = angular.module('ramdangular/utils', []),
        filtersModule = angular.module('ramdangular/filters', []);

    var bind = function (func, thisArg) {
        return func.bind(thisArg);
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


    var adaptRamdaFilters = [
        'map',
        'multiply'
    ];

    //register filters
    R.forEach(function (filterName) {
        var modules = [
            ramdangularModule,
            filtersModule,
            angular.module('ramdangular/filters/' + filterName, [])
        ];

        R.forEach(function (module) {
            module.filter(filterName, function() {
                return R[filterName];
            });
        }, modules);


    }, adaptRamdaFilters);


}(angular, ramda));
