'use strict';
(function (angular, R) {

    var ramdangularModule = angular.module('ramdangular', []),
        utilsModule = angular.module('ramdangular/utils', []),
        filtersModule = angular.module('ramdangular/filters', []);

    var rfns = R.functionsIn(R);

    //register utils
    R.forEach(function (functionName) {

        //register functions
        function register($rootScope) {
            $rootScope[functionName] = R.bind(R[functionName], R);
        }

        R.forEach(function (module) {
            module.run(['$rootScope', register]);
        }, [
            ramdangularModule,
            utilsModule,
            angular.module('ramdangular/utils/' + functionName, [])
        ]);

    }, rfns);


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


    }, rfns);


}(angular, R));
