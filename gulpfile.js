/*
 * @Author: SongH
 * @Date:   2017-10-13 10:15:13
 * @Last Modified by:   SongH
 * @Last Modified time: 2017-11-08 15:36:33
 */
var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('watch', function() {
    gulp.watch('./*.html', ['html']);
    gulp.watch('./View/*.html', ['html']);
    // gulp.watch('js/*.js',['javascript']);
    // gulp.watch('css/*.css',['css']);
})
gulp.task('connect', function() {
    connect.server({
        root: './',
        ip: '127.0.0.1',
        livereload: true,
        port: 80
    })
})
gulp.task('html', function(){
  gulp.src('./Pages/*.html')
      .pipe(connect.reload());
});
gulp.task('css', function(){
  gulp.src('./*.css')
      .pipe(connect.reload());
});
gulp.task('default',['connect','watch'])