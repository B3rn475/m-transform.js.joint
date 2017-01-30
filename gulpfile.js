/*jslint node: true, nomen: true */
"use strict";

var gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    extractor = require('gulp-extract-sourcemap'),
    minifyjs = require('gulp-uglify');

gulp.task('clean', function () {
    return gulp.src('./dist/*', {read: false, dot: true}).pipe(rimraf({ force: true }));
});

var expose = {
    'jquery': '$',
    'lodash': '_',
    'backbone': 'Backbone',
    'knockout': 'ko',
    'joint': 'joint',
    'window': 'window',
    'navigator': 'navigator',
    'document': 'document',
    'atob': 'atob',
    'Uint8Array': 'Uint8Array',
    'Blob': 'Blob',
    'FileSaver': 'saveAs'
};

gulp.task('m-transform.joint.js', function () {
    return browserify({
        entries: './global.js',
        debug: true,
    })
        .transform('exposify', {
            expose: expose
        })
        .transform('stringify', {
            extensions: ['.svg', '.html']
        })
        .bundle()
        .pipe(source('m-transform.joint.js'))
        .pipe(buffer())
        .pipe(extractor({
            basedir: __dirname,
            fakeFix: true
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('m-transform.joint.min.js', function () {
    return browserify({
        entries: './global.js',
        debug: false,
    })
        .transform('exposify', {
            expose: expose
        })
        .transform('stringify', {
            extensions: ['.svg', '.html'],
            minify: true,
            minifyOptions: {
                removeComments: false
            }
        })
        .bundle()
        .pipe(source('m-transform.joint.min.js'))
        .pipe(buffer())
        .pipe(minifyjs())
        .pipe(gulp.dest('./dist'));
});

gulp.task('m-transform.joint.css', function () {
    return gulp.src('./index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename('m-transform.joint.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('m-transform.joint.min.css', function () {
    return gulp.src('./index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename('m-transform.joint.min.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['m-transform.joint.js', 'm-transform.joint.min.js', 'm-transform.joint.css', 'm-transform.joint.min.css']);

gulp.task('default', ['clean'], function () {
    return gulp.start('build');
});
