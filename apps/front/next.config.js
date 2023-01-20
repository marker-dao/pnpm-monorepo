const webpack = require('webpack');

const nextConfig = {
  webpack(config, { isServer, dev }) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react'
      })
    );

    useEsbuildMinify(config, {
      css: true
    });

    return config;
  }
};

function useEsbuildMinify(config, options) {
  const terserIndex = config.optimization.minimizer.findIndex(
    minimizer => minimizer.constructor.name === 'TerserPlugin'
  );
  if (terserIndex > -1) {
    config.optimization.minimizer.splice(
      terserIndex,
      1,
      new ESBuildMinifyPlugin(options)
    );
  }
}

module.exports = nextConfig;
