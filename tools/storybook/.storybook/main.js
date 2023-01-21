const webpack = require('webpack')

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  webpackFinal: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react'
      })
    );

    return config
  },
}
