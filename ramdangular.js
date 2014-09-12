'use strict';
(function (angular, R) {

    var ramdangularModule = angular.module('ramdangular', []),
        utilsModule = angular.module('ramdangular/utils', []),
        filtersModule = angular.module('ramdangular/filters', []);

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


    var adaptRamdaFilters = [
        'add',
        'min',
        'max',
        'multiply'
    ];

    //register filters
    R.forEach(function (filterNames) {

        if (!(Array.isArray(filterNames))) {
            filterNames = [filterNames];
        }

        var filter = bind(R[filterNames[0]], R),
            filterFactory = function () {
                return filter;
            };

        R.forEach(function (filterName) {

            R.forEach(function (module) {
                module.filter(filterName, filterFactory);
            }, [
                ramdangularModule,
                filtersModule,
                angular.module('ramdangular/filters/' + filterName, [])
            ]);

        }, filterNames);

    }, adaptRamdaFilters);


}(angular, ramda));