describe('ramdangular API', function () {

    //beforeEach(module('ramdangular'));

    ramda.forEach(function (fnName) {

        it(fnName + " should adapt to ramda's " + fnName, inject(function ($rootScope) {
            expect($rootScope[fnName].toString()).toBe(_[fnName].toString());
        }));

    }, ramda.functionsIn(ramda));


});
