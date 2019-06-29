module.exports = function(grunt) {
    grunt.initConfig({
        screeps: {
            options: {
                email: '[Your_Email]@gmail.com',
                password: '[Your_Password]',
                branch: '[Branch_Name(PLACE IT IS UPLOADED TO)]',
                ptr: false
            },
            dist: {
                src: ['dist/**/*.js']
            }
        },
        watch: {
            js: {
                files: ['dist/**/*.js'],
                tasks: ['screeps']
            }
        }
    });

    grunt.loadNpmTasks('grunt-screeps');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['screeps']);
}
