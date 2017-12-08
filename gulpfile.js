const gulp = require('gulp');
const ts = require('gulp-typescript');
const gulpTslint = require('gulp-tslint');
const tslint = require('tslint');
const del = require('del');

gulp.task('lint', () => {
  const tsProject = ts.createProject('./tsconfig.json');
  const program = tslint.Linter.createProgram('./tsconfig.json');

  tsProject.src()
    .pipe(gulpTslint({
      formatter: 'stylish',
      program
    }))
    .pipe(gulpTslint.report({
      summarizeFailureOutput: true
    }));
});

gulp.task('clean', (done) => {
  del('.dist').then(() => {
    done();
  });
});

gulp.task('build', [], () => {
  const tsProject = ts.createProject('./tsconfig.json');
  return gulp.src('src/**/*.ts')
    .pipe(tsProject())
    .pipe(gulp.dest('.dist'));
});

gulp.task('test', ['lint']);
gulp.task('default', ['test']);
