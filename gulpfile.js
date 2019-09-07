var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
    return gulp.src('./app/sass/style.sass')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
    gulp.watch('./app/sass/*.sass', gulp.series('sass'));
});

gulp.task('default', function(done) {
    gulp.series('sass', 'watch');
    done();
});