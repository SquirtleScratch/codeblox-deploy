/**
 * path:  .configs/for_tests/jest.babel.config.js
 */

module.exports = {
  presets: [
    '@babel/preset-env',
    ["@babel/preset-react", { "runtime": "automatic" }],
    '@babel/preset-typescript',
  ],
};
