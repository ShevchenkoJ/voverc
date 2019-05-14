const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const sourceMaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
	return gulp.src('scss/styles.scss')
		.pipe(plumber())
		.pipe(sourceMaps.init())
		.pipe(sass())
		.pipe(autoprefixer ({
			browsers: ['last 2 versions']
		}))
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('css'));
});

gulp.task('html', function () {
	return gulp.src('*.html')
	.pipe(gulp.dest('build'));
});

gulp.task('serve', function () { 

	gulp.watch("scss/**/*.scss", gulp.series('sass'));
	gulp.watch("*.html", gulp.series('html'));
});
