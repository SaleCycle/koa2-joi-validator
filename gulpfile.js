const gulp = require("gulp");
const ts = require("gulp-typescript");
const gulpTslint = require("gulp-tslint");
const tslint = require("tslint");
const del = require("del");

function lint() {
  const tsProject = ts.createProject("./tsconfig.json");
  const program = tslint.Linter.createProgram("./tsconfig.json");

  return tsProject
    .src()
    .pipe(
      gulpTslint({
        formatter: "stylish",
        program
      })
    )
    .pipe(
      gulpTslint.report({
        summarizeFailureOutput: true
      })
    );
}

function clean(done) {
  del(".dist").then(() => {
    done();
  });
}

function build() {
  const tsProject = ts.createProject("./tsconfig.json");
  return gulp
    .src("src/**/*.ts")
    .pipe(tsProject())
    .pipe(gulp.dest(".dist"));
}

exports.lint = lint;
exports.clean = clean;
exports.build = build;
exports.default = lint;
