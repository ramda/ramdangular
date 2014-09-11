module.exports = function (config) {

    config.set({

        basePath : './',

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['PhantomJS'],

        plugins : [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });

};