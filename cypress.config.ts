import webpackPreprocessor from "@cypress/webpack-preprocessor";
import { compilerOptions } from "./tsconfig.aliases.json";
// import { pathsToModuleNameMapper } from 'ts-jest'
import { defineConfig } from "cypress";
// import path from 'path'

// console.log(whatIsThis)
console.log(compilerOptions.paths);

export default defineConfig({
  projectId: "p6xyaz",

  e2e: {
    setupNodeEvents(on, config) {
      config.specPattern = "e2e/**/*.spec.tsx";

      const webpackDefaults = webpackPreprocessor.defaultOptions;

      console.log(config.browser);

      console.log("config.browser?.path");
      console.log(config.browser?.path);

      console.log("XXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXX");
      // console.log(compilerOptions.paths)

      // const whatIsThis = pathsToModuleNameMapper(
      //     compilerOptions.paths,
      //     { prefix : '<rootDir>/' }
      // )

      // const alias = Object.keys(whatIsThis).reduce((acc, key) => {
      //     const newKey = key
      //         .replace('^', '')
      //         .replace('/(.*)$', '/*')

      //     acc[newKey] = path.resolve(__dirname, whatIsThis[key]
      //         .replace('<rootDir>', '.')
      //         .replace('$1', ''))

      //     return acc
      // }, {})

      // console.log(alias);
      // {
      //     '^gyst/(.*)$': '<rootDir>/src/project/gyst/$1',
      //     '^core/(.*)$': '<rootDir>/src/core/$1'
      // }

      // console.log(alias);

      const options = {
        ...webpackDefaults,
        webpackOptions: {
          ...webpackDefaults.webpackOptions,
          resolve: {
            ...webpackDefaults.webpackOptions?.resolve,
            alias: {
              "gyst/*": "./src/project/gyst/*",
              "core/*": "./src/core/*",
            },
          },
        },
      };

      on("file:preprocessor", webpackPreprocessor(options));
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
