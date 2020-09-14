module.exports = function (grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    '_files/mincss/base.css': ['_files/css/normalize.css', '_files/css/common.min.css','_files/css/swiper.min.css','_files/css/reset.min.css','_files/css/everyone.min.css','_files/fonts/iconfont.css','../../../static/fonts/iconfont.css','../../..//static/css/animate.min.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('default',['cssmin']);
};