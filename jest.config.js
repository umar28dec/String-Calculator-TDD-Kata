module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html"],
};
