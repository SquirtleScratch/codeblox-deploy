/**
 * path:  .configs/jest.backend.config.js
 */

module.exports = {
  rootDir: '../../',
  testEnvironment: 'node',
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
  // setupFilesAfterEnv: ['./.configs/jest.backend.setup.js'], // Remove or correct this if not needed
  testMatch: ['<rootDir>/__tests__/chai/**/*.[jt]s?(x)', '<rootDir>/__tests__/chai/**/?(*.)+(spec|test).[tj]s?(x)'],
};