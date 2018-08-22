# @yamanoku/stylelint


## Usage

### CLI (stylelint)

Install `@yamanoku/stylelint-config`.

```bash
yarn add -D @yamanoku/stylelint-config
```

Create `config.js` to root directory of the project as following.

```js
module.exports = {
  "extends": "@yamanoku/stylelint-config",
}
```

```bash
stylelint --config config.js index.css
```

### Gulp (Scss)

```js
gulp.task('lint-styles', () => {
  return gulp.src('sass/**/*.scss').pipe(
    $.postcss(
      [
        stylelint({
          extends: '@yamanoku/stylelint-config',
        }),
        reporter({
          clearMessages: true,
        }),
      ],
      {
        syntax: require('postcss-scss'),
      },
    ),
  );
});

gulp.task('watch', () => {
  gulp.watch(['sass/**/*.scss'], ['lint-styles']);
});

gulp.task('default', ['watch']);
```

## Override

```js
module.exports = {
  "extends": "@yamanoku/stylelint-config",
  "rules": {
     // Add Rules
  }
}
```