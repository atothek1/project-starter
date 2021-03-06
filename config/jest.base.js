module.exports = packagePath => ( {
    rootDir: packagePath,
    verbose: true,
    collectCoverage: true,
    testRegex: "(/__tests__/.*)\\.(spec)\\.(ts|tsx)$",
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: [ "<rootDir>/config/jest.setup.js", "@testing-library/jest-dom/extend-expect" ],
    transform: {
        "\\.[jt]sx?$": [ "babel-jest", { configFile: "./config/babel.config.js" } ],
    },
    transformIgnorePatterns: [
        "/node_modules/.*",
        "<rootDir>/node_modules/.*"
    ],
    collectCoverageFrom: [
        "**/res/**/*.ts",
        "**/res/**/*.tsx",
        "**/src/**/*.ts",
        "**/src/**/*.tsx",
    ],
    coveragePathIgnorePatterns: [
        "(/__mocks__/.*)\\.(ts|tsx)$",
        "(/__tests__/.*)\\.(spec)\\.(ts|tsx)$",
        "global.d.ts",
    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/staticfiles.mock.js",
        "@components": "<rootDir>/src/components/index.ts",
        "@components/(.*)": "<rootDir>/src/components/$1",
        "@containers": "<rootDir>/src/containers/index.ts",
        "@containers/(.*)": "<rootDir>/src/containers/$1",
        "@hooks": "<rootDir>/src/hooks/index.ts",
        "@hooks/(.*)": "<rootDir>/src/hooks/$1",
        "@pages": "<rootDir>/src/pages/index.ts",
        "@pages/(.*)": "<rootDir>/src/pages/$1",
        "@services": "<rootDir>/src/services/index.ts",
        "@services/(.*)": "<rootDir>/src/services/$1",
        "@store": "<rootDir>/src/store/index.ts",
        "@store/(.*)": "<rootDir>/src/store/$1",
        "@typings": "<rootDir>/src/typings/index.ts",
        "@typings/(.*)": "<rootDir>/src/typings/$1",
        "@utils": "<rootDir>/src/utils/index.ts",
        "@utils/(.*)": "<rootDir>/src/utils/$1",
        //
        "@res": "<rootDir>/res/index.ts",
        "@res/(.*)": "<rootDir>/res/$1",
        "@mocks": "<rootDir>/__mocks__/index.ts",
        "@mocks/(.*)": "<rootDir>/__mocks__/$1",
        "@tests": "<rootDir>/__tests__/index.ts",
        "@tests/(.*)": "<rootDir>/__tests__/$1",
    },
    globals: {
        __IS_DEVELOPMENT__: true,
        __IS_PRODUCTION__: false,
        __NAME__: "test-app",
        __VERSION__: "1.0.0-test",
        __ENVIRONMENT__: "development",
        __CONFIG__: {},
    },
    coverageReporters: [
        "lcov",
        "html",
    ],
    testEnvironmentOptions: {
        url: "https://test.com"
    }
} );
