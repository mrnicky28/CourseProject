const {series, parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const gulpClean = require('gulp-clean');
const imagemin = require("gulp-imagemin");
const browserSync = require('browser-sync').create();


function serve() {
    browserSync.init({
        server: 'build',
        watch: true
    });
}

function clean() {
    return src('build', {read: false, allowEmpty: true})
        .pipe(gulpClean());
}

function copyHTML() {
    return src('src/*.html')
        .pipe(dest('build'));
}

function JS() {
    return src('src/**/*.js')
        .pipe(dest('build/'))
        .pipe(browserSync.stream());
}

function transformSCSS() {
    return src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(concat('style.css'))
        .pipe(dest('build/styles'));
}

function images() {
    return src('src/img/**/*.{jpg,png,svg,gif,ico,webp}')
        .pipe(dest('build/img'))
        .pipe(src('src/img/**/*.{jpg,png,svg,gif,ico,webp}'))
        .pipe(
            imagemin({
                progressive: true,
                svgPlugins: [{removeViewBox: false}],
                interlaced: true,
                optimizationLevel: 3 // 0 to 7
            })
        )
        .pipe(dest('build/img'))
        .pipe(browserSync.stream())
}

function watchTasks() {
    watch('src/index.html', copyHTML);
    watch('src/**/*.scss', transformSCSS);
    watch('src/**/*.js', JS);
    watch('src/img/**/*.{jpg,png,svg,gif,ico,webp}', images);
}

exports.style = transformSCSS;
exports.html = copyHTML;
exports.js = JS;
exports.images = images;
exports.watch = watchTasks;
exports.clean = clean;
exports.default = series(
    clean,
    parallel(copyHTML, JS, transformSCSS, images),
    parallel(watchTasks, serve)
);