var gulp = require('gulp');

const config = {
    src: {js: 'src/main/js/**/*.js'}
};

gulp.task('build', function () {
    console.log('Compile >>> ' + config.src.js);
});

gulp.task('watch', function () {
    gulp.watch(config.src.js, ['build']);
});

gulp.task('default', ['build']);
