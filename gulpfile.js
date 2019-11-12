const gulp = require('gulp')
const browserSync = require('browser-sync').create()

// js, html 变动自动更新

const watch = () => {
  browserSync.init({
    server: {
      baseDir: './example',
      index: '/index.html'
    }
  })
  gulp.watch('./example/**/*.js').on('change', browserSync.reload)
  gulp.watch('./example/**/*.html').on('change', browserSync.reload)
}

exports.default = watch
