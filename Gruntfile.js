module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['src/js/*.js', 'src/js/**/*.js']
    },
    clean: ['dist/'],
    copy: {
      files: [
        {
          expand: true,
          src: ['src/**'],
          dest: 'dist/'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint', 'clean', 'copy']);
};