var gulp = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var del = require('del');
var vinylPath = require('vinyl-paths');

var config = {
	sourceFile: {
		js: ['app/**/*.js', 'app/**/*.js.map'],
		packageJson: ['package.json'],
		css: ['app/**/*.css'],
		html: ['app/**/*.html']
	},
	dist: './dist/'
}

gulp.task('clean', function (done) {
	gulp.src(config.dist)
		.pipe(vinylPath(del));
});
gulp.task('copy:html', function () {
	gulp.src(config.sourceFile.html)
		.pipe(gulp.dest(config.dist));
});

gulp.task('copy:css', function () {
	gulp.src(config.sourceFile.css)
		.pipe(gulp.dest(config.dist));
});

gulp.task('copy:packageJson', function () {
	gulp.src(config.sourceFile.packageJson)
		.pipe(gulp.dest(config.dist));
});

gulp.task('copy:client', function () {
	gulp.src(config.sourceFile.js)
		//.pipe(concat('main.js'))
		.pipe(minify())
		.pipe(gulp.dest(config.dist));
	gulp.src(config.sourceFile.html)
		.pipe(gulp.dest(config.dist));
});

gulp.task('copy', ['copy:packageJson', 'copy:css', 'copy:client']);

gulp.task('default', ['clean', 'copy'], function () {
	console.log('Done');
});