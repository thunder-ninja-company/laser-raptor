/* eslint-disable @typescript-eslint/no-var-requires */

// const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.aliases.json')

const nextJest = require('next/jest')
const { pathsToModuleNameMapper } = require('ts-jest')

/* eslint-enable @typescript-eslint/no-var-requires */

const createJestConfig = nextJest({
    dir : './',
})

// moduleDirectories  : ['node_modules', '<rootDir>/'],
// testEnvironment    : 'jest-environment-jsdom',

// transformIgnorePatterns : [
// 'node_modules/nanoid'
// '/node_modules/(?!react-dnd|core-dnd|@react-dnd|dnd-core|react-dnd-html5-backend|nanoid)'
// ],


// transform : {
//     '^.+\\.(j|t)sx?$' : 'ts-jest',
// },
// transformIgnorePatterns : [
//     // '/node_modules/(?!@react-dnd|react-dnd|dnd-core|react-dnd-html5-backend)',
// ],
// transform         : {},
// moduleDirectories : [
//     'node_modules',
// ],

const customJestConfig = {

    extensionsToTreatAsEsm : ['.ts', '.tsx'],

    globals : {
        'ts-jest' : {
            useESM : true
        }
    },

    // transform : {
    //     '^./src/+*/*.(ts|tsx)$' : ['ts-jest', { rootMode : 'upward' }],
    // },

    transform : {
        '^.+\\.(js|jsx)$' : 'babel-jest',
        '^.+\\.(ts|tsx)$' : 'ts-jest',
    },

    // transform : {
    //     '^.+\\.tsx?$' : 'ts-jest',
    //     '^.+\\.js?$'  : 'babel-jest',
    // },

    // transform : {

    // },

    testEnvironment : 'jest-environment-jsdom',

    // testRegex : [
    //     '\\.(test).$'
    // ],

    // testMatch : ['**/*__tests__/*.ts?(x)'],

    testMatch : ['<rootDir>/src/project/gyst/component/DragGrid/__tests__/lalalalalala.test.tsx'],


    // testMatch : [

    //     // '*src/project/gyst/component/DragGrid/__tests__/lalalalalala.tsx',

    // ],

    moduleFileExtensions : ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories    : ['node_modules', 'bower_components', 'shared'],

    // transformIgnorePatterns : [
    // ],

    moduleNameMapper : pathsToModuleNameMapper(
        compilerOptions.paths, {
            prefix : '<rootDir>/'
        }
    ),

    setupFilesAfterEnv : ['<rootDir>/jest.setup.js'],

}

console.log(customJestConfig.moduleNameMapper)

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
