module.exports = function(grunt) {
    /*
        requirements:
        npm -> https://www.npmjs.com/

        In command window:
        cd [YOUR_FOLDER_PATH] // ex: C:\screeps
        npm init // create package.json
        npm i -g grunt // install grunt
        npm i grunt-screeps -s // install grunt-screeps + add dependency to package.json
        npm i grunt-contrib-watch -s // install grunt-watch + add dependency to package.json
    
        // Make a folder called dist
        // Put all code in that file.. It can be in folders it will be flattened.

        commands: 
        //In the same directory
        grunt // push code to branch specified
        grunt watch // watch for changes to directory specified.

     */
    grunt.initConfig({
        screeps: {
            options: {
                email: '[YOUR_EMAIL_HERE]',
                password: '[YOUR_PASSWORD_HERE]',
                branch: '[YOUR_BRANCH_HERE]',
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
