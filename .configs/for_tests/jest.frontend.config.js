/**
 * path:  .configs/jest.frontend.config.js
 */

module.exports = {
  rootDir: '../../',  // This points to the root of your project
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': [
      'babel-jest',
      {
        configFile: './.configs/for_tests/jest.babel.config.js',
      },
    ],
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'mjs'],
  transformIgnorePatterns: ['/node_modules/(?!chai)/'],
  setupFilesAfterEnv: ['./.configs/for_tests/jest.setup.js'],
  testMatch: ['<rootDir>/__tests__/jest_frontend/**/*.[jt]s?(x)', '<rootDir>/__tests__/jest_frontend/**/?(*.)+(spec|test).[tj]s?(x)'],
};