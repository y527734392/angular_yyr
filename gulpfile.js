var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
    srcPath : 'src/', //文件路径
    devPath : 'build/', //开发
    prdPath : 'dist/'  //上线
};

gulp.task('lib',function(){
   gulp.src('bower_components/**/*.js')
        .pipe(gulp.dest(app.devPath + 'vendor'))
        .pipe(gulp.dest(app.prdPath + 'vendor'))
       .pipe($.connect.reload());
});
gulp.task('html',function(){
   gulp.src(app.srcPath + '**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath))
       .pipe($.connect.reload());
});

gulp.task('json',function(){
    gulp.src(app.srcPath + 'data/**/*.json')
        .pipe(gulp.dest(app.devPath + "data"))
        .pipe(gulp.dest(app.prdPath + "data"))
        .pipe($.connect.reload());
});

gulp.task('less',function(){
    gulp.src(app.srcPath + 'style/index.less')
        .pipe($.less())
        .pipe(gulp.dest(app.devPath + 'css'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.prdPath + 'css'))
        .pipe($.connect.reload());
});

gulp.task('js',function(){
   gulp.src(app.srcPath + 'script/**/*.js')
       .pipe($.concat('index.js'))
       .pipe(gulp.dest(app.devPath + "js"))
       .pipe($.uglify())
       .pipe(gulp.dest(app.prdPath + "js"))
       .pipe($.connect.reload());
});

gulp.task('img',function(){
   gulp.src(app.srcPath + 'img/**/*')
       .pipe(gulp.dest(app.devPath + 'img'))
       .pipe($.imagemin())
       .pipe(gulp.dest(app.prdPath + 'img'))
       .pipe($.connect.reload());
});

gulp.task('build',['img','js','less','lib','html','json']);


gulp.task('clean',function(){
   gulp.src([app.devPath , app.prdPath])
       .pipe($.clean())
       .pipe($.connect.reload());
});

gulp.task('server',['build'],function(){
    $.connect.server({
        root : [app.devPath],
        livereload : true,
        port : 1234,
    });
    open('http://localhost:1234');
    gulp.watch('bower_components/**/*.js',['lib']);
    gulp.watch(app.srcPath + '**/*.html',['html']);
    gulp.watch(app.srcPath + 'data/**/*.json',['json']);
    gulp.watch(app.srcPath + 'script/**/*.js',['js']);
    gulp.watch(app.srcPath + 'style/**/*.less',['less']);
    gulp.watch(app.srcPath + 'img/**/*',['img']);
});

gulp.task('default',['server']);