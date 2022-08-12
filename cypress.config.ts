import webpackPreprocessor from '@cypress/webpack-preprocessor'
import { compilerOptions } from './tsconfig.aliases.json'
import { defineConfig } from 'cypress'


console.log(compilerOptions.paths)

export default defineConfig({
    projectId : 'p6xyaz',

    e2e : {
        setupNodeEvents(on, config) {
            config.specPattern = 'e2e/**/*.spec.tsx'

            const webpackDefaults = webpackPreprocessor.defaultOptions

            const options = {
                ...webpackDefaults,
                webpackOptions : {
                    ...webpackDefaults.webpackOptions,
                    resolve : {
                        ...webpackDefaults.webpackOptions?.resolve,
                        alias : {
                            'gyst/*' : './src/project/gyst/*',
                            'core/*' : './src/core/*',
                        },
                    },
                },
            }

            on('file:preprocessor', webpackPreprocessor(options))
        },
    },

    component : {
        devServer : {
            framework : 'next',
            bundler   : 'webpack',
        },
    },
})
