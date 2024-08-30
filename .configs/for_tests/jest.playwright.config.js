/**
 * path:  .configs/for_tests/jest.playwright.config.js
 */

const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'), // Convert to absolute path
  preset: 'jest-playwright-preset',
  testEnvironment: 'jest-playwright-preset',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testDir: path.resolve(__dirname, '../../__tests__/playwright'), // Absolute path
  setupFilesAfterEnv: [path.resolve(__dirname, './jest.setup.js')],
};