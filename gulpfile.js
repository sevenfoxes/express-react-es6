var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var p           = require('./package.json');


gulp.task('browser-sync', function() {
  browserSync({
    proxy: "http://localhost:3000",
    ghostMode: true,
    notify: false,
    port: 3001,
    files: ["lib/**", "src/sass/**"],
    ui: {
      port: 9015,
      weinre: {
        port: 9016
      }
    }
  });
});

gulp.task('default', ['browser-sync']);
