
/*
*  Test Ramda's utility functions are available on the angular $rootScope
*/
describe('ramdangular util tests - ', function () {

   //add the ramdangular module
   beforeEach(angular.mock.module('ramdangular'));

    //verify all of the ramda's functions available in $rootScope
    ramda.forEach(function (fnName) {

        it(fnName + " should adapt to ramda's " + fnName, inject(function ($rootScope) {
            expect($rootScope[fnName]).toBeDefined();
        }));

    }, ramda.functionsIn(ramda));

    //invoking $rootScope.range should produce same result as ramda's range
    it("range should adapt to ramda's range", inject(function ($rootScope) {
        expect($rootScope.range(2, 10)).toEqual(ramda.range(2, 10));
    }));

});
