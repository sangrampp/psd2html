//include gulp
var gulp = require('gulp')

//include plugins
var sass = require('gulp-sass')

//compile sass
gulp.task('sass', function() {
    return gulp.src('css/src/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

//watch files for changes
gulp.task('watch', function() {
    gulp.watch('css/src/*.scss', ['sass']);
});

//default task
gulp.task('default', ['sass']);