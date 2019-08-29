const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

function compressTask(cb) {
    gulp.src('./reset.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist'))
    cb()
}

exports.default = compressTask