module.exports = function (grunt) {
    grunt.initConfig({
        jasmine: {
            target: {
                src: ['src/**/*.js'],
                options: {
                    specs: ['test/**/*.spec.js'],
                    keepRunner: true,
                    outfile: 'test/SpecRunner.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('default', 'jasmine');
};