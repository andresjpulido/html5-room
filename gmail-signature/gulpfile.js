var gulp = require('gulp'),     
    inlineCss = require('gulp-inline-css'),
    htmlmin = require('gulp-htmlmin');

gulp.task('master', function() {
    return gulp.src('./src/*.html')
        .pipe(inlineCss({
            	applyStyleTags: true,
            	applyLinkTags: true,
            	removeStyleTags: true,
            	removeLinkTags: true
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build/'));
});

gulp.task('default', gulp.series('master'));
