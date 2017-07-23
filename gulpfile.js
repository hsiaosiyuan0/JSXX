const del = require("del")
const gulp = require("gulp")
const newer = require("gulp-newer")
const sourcemaps = require("gulp-sourcemaps")
const babel = require("gulp-babel")
const gutil = require("gulp-util")
const gplumber = require("gulp-plumber")

const errorHandler = function(){
  return gplumber(function(error){
    gutil.log(error.codeFrame)
  })
}

const src = ["src/**/*.js", "test/**/*.js"]

gulp.task("clean", () => {
  return del("dist/*")
})

gulp.task("default", () => {
  return gulp.src(src, {base: __dirname})
    .pipe(errorHandler())
    .pipe(newer("dist"))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write(".", {includeContent: false, sourceRoot: __dirname}))
    .pipe(gulp.dest("dist"))
})

gulp.task("watch:js", () => {
  gulp.watch(src, gulp.series("default"))
})

gulp.task("watch", gulp.series(["default", "watch:js"]))
