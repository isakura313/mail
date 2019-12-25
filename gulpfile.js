const gulp = require("gulp")
const inlineCss = require("gulp-inline-css")
// const plumber = require("plumber")

const {src, dest} = gulp;

async function build(){
	src("*.html")
	// .pipe(plumber())
	.pipe(inlineCss())
	.pipe(dest("build"))
}

exports.build = build;


