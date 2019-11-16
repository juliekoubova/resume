module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript"
  ],
  rules: {
    "quotes": ["warn", "single"],
    "semi": ["warn", "never"],
    "space-before-function-paren": ["warn", "never"],
    "vue/singleline-html-element-content-newline": ["off"]
  }
}
