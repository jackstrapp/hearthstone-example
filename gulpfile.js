'use strict';

// require all needed modules
var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var watch = require('gulp-watch');
var karma = require('karma').Server;
var tslint = require('gulp-tslint');

    // default project config
    

    // Clean out build directories
    gulp.task('clean', function () {
        del.sync([
            path.join(__dirname, 'build'),
            path.join(__dirname, 'appTypings'),
            path.join(__dirname, 'compiled')
        ], {
            force: true
        });
    });

    const tsTask = (config) => {
        var tsProject = ts.createProject(path.join(__dirname,'tsconfig.json'));
        var tsResult = gulp
        .src(path.join(config.path, '**/*.ts'))
        .pipe(sourcemaps.init()) // with Sourcemaps
        .pipe(ts(tsProject));

        return merge([
            tsResult.dts // write automatically generated typing files
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(path.join(__dirname, 'appTypings', config.appName))),
            tsResult.js // write compiled JavaScript files
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(path.join(__dirname, 'build', config.appName)))
        ]);
    };
    
    gulp.task('ts-common', function () {
        return tsTask({appName: 'common', path: 'common'});
    });
    
    gulp.task('ts-deckbuilder', function () {
        return tsTask({appName: 'deckBuilder', path: 'deckBuilder'});
    });
    
    gulp.task('ts-deckmanager', function () {
        return tsTask({appName: 'deckManager', path: 'deckManager'});
    });

    // compile TypeScript
    gulp.task('ts', ['ts-common', 'ts-deckmanager', 'ts-deckbuilder'], function () {
        return tsTask({appName: 'main', path: 'main'});
    });

    const jsTask = (config) => {
        return browserify({
            entries: path.join(__dirname, 'build', config.appName, 'main.js'),
            debug: true
        })
            // ignore required module (for libraries which you include yourself - config in package.json)
            .transform('browserify-shim')
            .bundle()
            .on('error', function (e) {
                console.log(e.toString());
                this.emit('end');
            })
            // save it as "{{applicationName}}Bundle.js"
            .pipe(source(path.join(config.appName + 'Bundle.js')))
            // in the application's "compiled" folder
            .pipe(gulp.dest(path.join(__dirname, 'compiled', config.appName)));
    };

    gulp.task('js-common', function () {
        return jsTask({appName: 'common', path: 'common'});
    });
    
    gulp.task('js-deckbuilder', function () {
        return jsTask({appName: 'deckBuilder', path: 'deckBuilder'});
    });
    
    gulp.task('js-deckmanager', function () {
        return jsTask({appName: 'deckManager', path: 'deckManager'});
    });

    // compile TypeScript
    gulp.task('js', ['ts', 'js-common', 'js-deckmanager', 'js-deckbuilder'], function () {
        return jsTask({appName: 'main', path: 'main'});
    });

    // run unit tests
    gulp.task('test', ['js'], function (done) {
        // files needed for testing
        var files = [
            // include needed libraries
            path.join(__dirname, 'node_modules/phantomjs-polyfill/bind-polyfill.js'),
            path.join(__dirname, 'node_modules/angular/angular.js'),
            path.join(__dirname, 'node_modules/angular-mocks/angular-mocks.js'),
            path.join(__dirname, 'libs/angular-ui-router.js')
        ];
      
        // application, the actual tests
        files = files.concat([
            path.join(__dirname, 'compiled', 'main', '**/*.js'), // include the application
            path.join(__dirname, 'build', 'common', 'tests/**/*.spec.js'), // test files
            path.join(__dirname, 'build', 'deckManager', 'tests/**/*.spec.js'), // test files
            path.join(__dirname, 'build', 'deckBuilder', 'tests/**/*.spec.js') // test files
        ]);

        // start Karma Test Runner
        new karma({
            basePath: __dirname,
            browsers: ['PhantomJS'],
            frameworks: ['jasmine', 'browserify'],
            files: files,
            // process tests that were transpiled for the CommonJS module system
            preprocessors: {
                'build/**/tests/**/*.spec.js': ['browserify']
            },
            // mock away Angular as required
            browserify: {
                debug: true,
                transform: ['browserify-shim']
            },
            // reporters: ['kjhtml'],
            singleRun: true,
            autoWatch: false
        }, done).start();
    });

    // watch for file changes
    gulp.task('watch-test', ['test'], function () {
        var watchPath = [
            path.join('common', '**/*.ts'),
            path.join('deckManager', '**/*.ts'),
            path.join('deckBuilder', '**/*.ts'),
            path.join('main', '**/*.ts')
        ];

        return watch(watchPath, function () {
            gulp.start('test');
        });
    });

    // watch for file changes
    gulp.task('watch-js', ['js'], function () {
        var watchPath = [
            path.join('common', '**/*.ts'),
            path.join('deckManager', '**/*.ts'),
            path.join('deckBuilder', '**/*.ts'),
            path.join('main', '**/*.ts')
        ];

        return watch(watchPath, function () {
            gulp.start('js');
        });
    });

    gulp.task('default', ['js']);
