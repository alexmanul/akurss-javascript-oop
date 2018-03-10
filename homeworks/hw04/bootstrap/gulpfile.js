var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var include = require('gulp-file-include');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('hello-world', function () {
	console.log("Hello, world!");
});

gulp.task('styles', function () {
	return gulp.src('src/styles/scss/main.scss')
		.pipe(sass())
		.pipe(rename({suffix: '.min'}))
		.pipe(cssnano())
		.pipe(gulp.dest('dist/styles'));
});

gulp.task('html', function () {
	return gulp.src('src/*.html')
		.pipe(include({prefix: '@@', basepath: '@file'}))
		.pipe(gulp.dest('dist/'));
});


gulp.task('scripts', function () {
	return gulp.src('src/scripts/**/*.js')
		.pipe(concat('main.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/scripts/'));
});

gulp.task('images', function () {
	return gulp.src('src/images/**/*.jpg')
		.pipe(gulp.dest('dist/images/'));
});

gulp.task('watch', function () {
	gulp.watch('src/styles/**/*.scss', ['styles']);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/scripts/**/*.js', ['scripts']);
	gulp.watch('src/images/**/*.jpg', ['images']);
});

gulp.task('clean', function () {
	return del(['dist'])
});

gulp.task('default', ['clean'], function () {
	gulp.start('html', 'styles', 'scripts', 'images')
});