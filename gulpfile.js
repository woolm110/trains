// generated on 2015-07-03 using generator-gulp-webapp 1.0.2
var gulp = require('gulp'),
  //gulpLoadPlugins = require('gulp-load-plugins'),
  browserSync = require('browser-sync'),
  del = require('del'),
  wiredep = require('wiredep');

//const $ = gulpLoadPlugins();
const reload = browserSync.reload;

var sass = require('gulp-sass'),
  globbing = require('gulp-css-globbing'),
  kraken = require('gulp-kraken'),
  gulpFilter = require('gulp-filter'),
  cache = require('gulp-cached'),
  jsonminify = require('gulp-jsonminify');

var plumber = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  eslint = require('gulp-eslint'),
  gulpif = require('gulp-if'),
  useref = require('gulp-useref'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  uglify = require('gulp-uglify'),
  size = require('gulp-size'),
  minifyCss = require('gulp-minify-css'),
  minifyHtml = require('gulp-minify-html');

gulp.task('styles', function() {
  return gulp.src('app/styles/*.scss')
    .pipe(globbing({
      // Configure it to use SCSS files
      extensions: ['.scss']
    }))
    .pipe(sass())
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 1 version', 'ie >= 9']
    }))
    .pipe(sourcemaps.write())
    .pipe(sass({
      includePaths: ['./styles']
    }))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({
      stream: true
    }));
});

function lint(files, options) {
  return function() {
    return gulp.src(files)
      .pipe(reload({
        stream: true,
        once: true
      }))
      .pipe(eslint(options))
      .pipe(eslint.format())
      .pipe(gulpif(!browserSync.active, eslint.failAfterError()));
  };
}
const testLintOptions = {
  env: {
    mocha: true
  },
  globals: {
    assert: false,
    expect: false,
    should: false
  }
};

// gulp.task('lint', lint('app/scripts/**/*.js'));
// gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

gulp.task('html', ['styles'], function() {
  const assets = useref.assets({
    searchPath: ['.tmp', 'app', '.']
  });

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(gulpif('*.js', uglify()).on('error', function(err) {
      console.log(err);
    })).pipe(gulpif('*.css', minifyCss({
      compatibility: '*'
    }).on('error', function(err) {
      console.log(err);
    })))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulpif('*.html', minifyHtml({
      conditionals: true,
      loose: true
    })))
    .pipe(gulp.dest('dist'));
});

var bitMapFilter = gulpFilter(['**/*.{jpg,png,gif}']);

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe(gulpif(gulpif.isFile, cache(imagemin({
        progressive: true,
        interlaced: true,
        // don't remove IDs from SVGs, they are often used
        // as hooks for embedding and styling
        svgoPlugins: [{
          cleanupIDs: false
        }]
      }))
      .on('error', function(err) {
        console.log(err);
        this.end();
      })))
    .pipe(bitMapFilter)
    .pipe(kraken({
        key: '0f60505033bb35ad3deed9a78402d605',
        secret: 'f4d4c102e9154e7f3e0f5d656de9fbf267f5c913',
        lossy: true
      })
      .on('error', function(err) {
        console.log(err);
        // this.end();
      }))
    .pipe(gulp.dest('dist/images'));
});

/*run kraken solo if issues*/
gulp.task('kraken', function() {
  gulp.src('app/images/**/*')
    .pipe(kraken({
      key: '0f60505033bb35ad3deed9a78402d605',
      secret: 'f4d4c102e9154e7f3e0f5d656de9fbf267f5c913',
      lossy: true
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('dataCompress', function() {
  return gulp.src(['app/data/**/*.json'])
    .pipe(jsonminify())
    .pipe(gulp.dest('dist/data'));
});

gulp.task('fonts', function() {
  return gulp.src(require('main-bower-files')({
      filter: '**/*.{eot,svg,ttf,woff,woff2}'
    }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function() {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['styles', 'fonts', 'dataCompress'], function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    },
    ghostMode: false
  });

  //gulp.start('kraken');

  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*',
    'app/data/**/*'
  ], {
    debounceDelay: 2000
  }).on('change', reload);

  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
  gulp.watch('app/images/**/*.{jpg,png,gif}', {
    debounceDelay: 2000
  });

});

gulp.task('serve:dist', function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', function() {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('test/spec/**/*.js').on('change', reload);
  // gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', function() {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['html', 'images', 'fonts', 'extras'], function() {
  return gulp.src('dist/**/*').pipe(size({
    title: 'build',
    gzip: true
  }));
});

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
