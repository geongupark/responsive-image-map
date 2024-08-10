module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/tests/**/*.test.ts'],
};
