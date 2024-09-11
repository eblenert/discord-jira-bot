import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./src",
  setupFilesAfterEnv: ["dotenv/config"],
};

export default jestConfig;
