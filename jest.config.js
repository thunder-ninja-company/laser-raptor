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

    moduleDirectories : ['node_modules'],
    testEnvironment   : 'jest-environment-jsdom',
    transform         : {
        '^.+\\.(js|jsx|ts|tsx)$' : ['babel-jest', { rootMode : 'upward' }],
    },

    setupFilesAfterEnv : ['<rootDir>/jest.setup.js'],
    // moduleDirectories  : ['node_modules', '<rootDir>/'],
    // testEnvironment    : 'jest-environment-jsdom',

    transformIgnorePatterns : [
        '/node_modules/(?!react-dnd|core-dnd|@react-dnd|dnd-core|react-dnd-html5-backend)'
    ],

    // transform : {
    //     '^.+\\.(j|t)sx?$' : 'ts-jest',
    // },

    // transformIgnorePatterns : [
    //     '/node_modules/(?!@react-dnd|react-dnd|dnd-core|react-dnd-html5-backend)',
    // ],

    moduleNameMapper : pathsToModuleNameMapper(
        compilerOptions.paths,
        { prefix : '<rootDir>/' }
    )
}

console.log(customJestConfig.moduleNameMapper)

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
