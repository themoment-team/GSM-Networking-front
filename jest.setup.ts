const jestSetup = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: '<rootDir>/coverage',
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/**/index.ts'],
  testMatch: ['<rootDir>/src/utils/__test__/*.test.ts'],
};

export default jestSetup;
