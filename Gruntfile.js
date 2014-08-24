module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['src/js/*.js']
    },
    clean: {
      dist: ['dist']
    },
    copy: {
      dist: {
        files: [
          {src: 'src/manifest.json', dest: 'dist/manifest.json'},
          {src: 'src/index.html', dest: 'dist/index.html'},
          {
            expand: true,
            cwd: 'src',
            src: 'img/**/*.png',
            dest: 'dist/'
          }
        ]
      }
    },
    usemin: {
      html: ['dist/index.html'],
      options: {
        dirs: ['dist/']
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/css/control.min.css': ['src/css/app.css']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/globals.js': ['src/js/globals.js'],
          'dist/js/open.js': ['src/js/open.js'],
          'dist/js/control.js': ['src/js/control.js'],
          'dist/js/hotkeys.js': ['src/js/hotkeys.js'],
          'dist/js/content.js': ['src/js/content.js'],
          'dist/js/ga.js': ['src/js/ga.js']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'dist/index.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['jshint', 'clean', 'copy', 'cssmin', 'uglify', 'usemin', 'htmlmin']);
};
