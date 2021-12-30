/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  rootDir: ".",
  testEnvironment: "jsdom",
  testMatch: ["**/*.test.{ts,tsx}"],
  collectCoverageFrom: [
    "src/components/*.tsx",
    "src/libs/*.ts",
    "!src/libs/getThing{ByName,s}.ts",
  ],
  coverageThreshold: null,
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", { configFile: ".swcrc" }],
  },
  transformIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
  extensionsToTreatAsEsm: [".ts"],
};
