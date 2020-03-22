'use strict';

const {src, dest, parallel} = require('gulp');
const autoVendorPrefix = require('gulp-autoprefixer');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const purge = require('gulp-css-purge');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

gulpSass.compiler = dartSass;

function compressScssToCss() {
    return src('./scss/domelo.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(purge({
            trim: true,
            shorten: true,
            format: true
        }))
        .pipe(autoVendorPrefix())
        .pipe(rename('domelo.min.css'))
        .pipe(sourcemaps.write())
        .pipe(dest('./css'))
}

exports.default = parallel(compressScssToCss);
