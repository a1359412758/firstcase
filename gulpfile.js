var gulp = require("gulp"),
    sass = require("gulp-sass"),
    rename = require("gulp-rename"),
    cssnano = require("gulp-cssnano");
//创建任务
//编译sass
gulp.task("sass",function(){
	return gulp.src("gulp/sass/*.scss").pipe(sass()).pipe(gulp.dest("css"))
.pipe(rename({"suffix":".min"})).pipe(cssnano()).pipe(gulp.dest("css"))})
gulp.task("watch",function(){
	gulp.watch("gulp/sass/*.scss",["sass"])
})