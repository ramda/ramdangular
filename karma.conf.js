module.exports = function (config) {

    config.set({

        basePath: './',

        reporters: ['dots', 'coverage'],

        preprocessors: {
            'ramdangular.js': ['coverage']
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage'
        ],

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }

    });

};