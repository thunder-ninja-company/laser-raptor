const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  stories: [
    // "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  typescript : { reactDocgen : false },
  features: {
    interactionsDebugger: true, // 👈 Enable playback controls
  },

  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config

    config.resolve.plugins = [new TsconfigPathsPlugin()];

    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');
    console.log('asdfasdfasdfasdf');

    return config;
  },
}