import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)unit.[jt]s", "**/?(*.)jest.[jt]sx", "!**/tests/playwright/**"],
};

export default createJestConfig(customJestConfig);
