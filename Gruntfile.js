module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.initConfig({
        shell: {
            tsc: {
                command: 'node node_modules/typescript/bin/tsc -p tsconfig.json'
            }
        },
        requirejs: {
            compile: {
                options: {
                    name: 'main',
                    baseUrl: 'src/',
                    mainConfigFile: 'src/main.js',
                    out: 'dist/main.build.js',
                    optimize: 'none'
                    // findNestedDependencies: true
                }
            }
        }
    });

    grunt.registerTask('default', ['shell', 'requirejs']);
};
