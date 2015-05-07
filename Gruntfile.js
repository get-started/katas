module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            target: {
                src: 'dist'
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/katas.js': [
                        'src/commons.js', 'src/**/*.js'
                    ]
                },
                options: {
                    compress: {
                        drop_console: true,
                        hoist_funs: false,
                        loops: false,
                        unused: false
                    }
                }
            }
        },
        jasmine: {
            dev: {
                src: ['src/**/*.js','bower_components/momentjs/min/moment-with-locales.js'],
                options: {
                    specs: ['test/**/*.spec.js'],
                    keepRunner: true,
                    outfile: 'test/SpecRunner.html'
                }
            },
            product: {
                src: ['dist/**/*.js','bower_components/momentjs/min/moment-with-locales.js'],
                options: {
                    specs: ['test/**/*.spec.js'],
                    keepRunner: false,
                    outfile: 'test/SpecRunner-dist.html'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('test', 'jasmine:dev');
    grunt.registerTask('default', ['clean', 'uglify', 'jasmine:product']);
};