const gulp = require("gulp")
const inlineCss = require("gulp-inline-css")
const plumber = require("plumber")

{src, dist} = gulp;

function build(){
	src("*.html")
	.pipe(plumber())
	.pipe(inlineCss())
	dist("build")
}

exports.build = build;


