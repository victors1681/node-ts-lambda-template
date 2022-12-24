module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  testTimeout: 60000,
};
