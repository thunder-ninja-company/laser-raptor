/* eslint-disable @typescript-eslint/no-var-requires */

// const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.aliases.json')

const nextJest = require('next/jest')
const { pathsToModuleNameMapper } = require('ts-jest')

/* eslint-enable @typescript-eslint/no-var-requires */

const createJestConfig = nextJest({
    dir : './',
})

const customJestConfig = {
    setupFilesAfterEnv : ['<rootDir>/jest.setup.js'],
    moduleDirectories  : ['node_modules', '<rootDir>/'],
    testEnvironment    : 'jest-environment-jsdom',

    moduleNameMapper : pathsToModuleNameMapper(
        compilerOptions.paths,
        { prefix : '<rootDir>/' }
    ),

}

console.log(customJestConfig)

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
