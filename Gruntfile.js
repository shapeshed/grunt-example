
module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      gruntfile: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint:files']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
