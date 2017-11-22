"use strict"

module.exports = {
    "extends": "stylelint-config-recommended",
    "rules": {
        "block-no-empty": true,
        "color-no-invalid-hex": true,
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": "never",
        "declaration-no-important": true,
        "function-comma-space-after": "always",
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-no-vendor-prefix": true,
        "max-empty-lines": 2,
        "number-leading-zero": "never",
        "number-no-trailing-zeros": true,
        "property-no-vendor-prefix": true,
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-trailing-semicolon": "always",
        "selector-list-comma-newline-after": "always-multi-line",
        "string-quotes": "double",
        "value-no-vendor-prefix": true,
        "function-linear-gradient-no-nonstandard-direction": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "selector-max-specificity": "0,2,0",
        "no-eol-whitespace": true,
    }
}