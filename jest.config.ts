const config = {
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(micro|test).[jt]s?(x)"],
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  roots: ["./src"],
  testPathIgnorePatterns: ["node_modules"],
  transformIgnorePatterns: [`/node_modules/(?!${["react-icons"].join("|")})`],
  watchPathIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
}

export default config
