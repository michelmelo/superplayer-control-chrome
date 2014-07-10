module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['src/js/*.js']
    },
    clean: {
      dist: ['dist']
    },
    copy: {
      files: {
        expand: true,
        cwd: 'src/',
        src: '**',
        dest: 'dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint', 'clean', 'copy']);
};
