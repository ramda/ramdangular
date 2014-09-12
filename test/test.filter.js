describe('ramdangular filter', function () {

    //add the ramdangular module
    beforeEach(angular.mock.module('ramdangular'));

    it('add should return sum of the passed numbers', inject(function ($filter) {
        expect($filter('add')(1)(2)).toBe(3);
    }));

    it('min should return min number of number array', inject(function ($filter) {
        expect($filter('min')(ramda.range(0)(10))).toBe(0);
    }));

    it('max should return max number of number array', inject(function ($filter) {
        expect($filter('max')(ramda.range(0)(10))).toBe(9);
    }));

    it('multiply should return multiplication of passed numbers', inject(function ($filter) {
        expect($filter('multiply')(2)(4)).toBe(8);
    }));

});