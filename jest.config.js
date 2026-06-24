module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '.',
  roots: ['<rootDir>/tests', '<rootDir>/packages'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules'],
};
