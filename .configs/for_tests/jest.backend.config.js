/**
 * path:  .configs/jest.backend.config.js
 */

module.exports = {
  rootDir: '../../',  // Root of project
  testEnvironment: 'node',  // Use 'node' for backend testing
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': [
      'babel-jest',
      {
        configFile: './.configs/for_tests/jest.babel.config.js',
      },
    ],
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'mjs'],
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: [],
  testMatch: ['<rootDir>/__tests__/jest_backend/**/*.[jt]s?(x)', '<rootDir>/__tests__/jest_backend/**/?(*.)+(spec|test).[tj]s?(x)'],
};