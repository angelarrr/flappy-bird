var gulp = require('gulp');

var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// compile sass task
gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('site/css'));
});

// minify index
gulp.task('html', function() {
	return gulp.src('site/index.html')
		.pipe(minifyHTML())
		.pipe(gulp.dest('build/'));
});

// JavasScript build task
gulp.task('scripts', function() {
	return browserify('.site/js/main.js')
		.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
});

// styles build task
gulp.task('styles', function() {
	return gulp.src('site/css/*.css')
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('build/css'));
});

// watch task
gulp.task('watch', function() {
	gulp.watch('site/js/*.js', ['jshint']);
	gulp.watch('site/scss/**/*.scss', ['sass']);
});

// default task
gulp.task('default', ['scripts', 'sass', 'watch']);

// build task
gulp.task('build', ['sass', 'html', 'scripts', 'styles']);