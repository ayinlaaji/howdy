const TsConfigPathsPlugin = require("awesome-typescript-loader")
  .TsConfigPathsPlugin;

let config = {
  pageExtensions: ["tsx", "md", "mdx"],
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },
  webpack: (config, options) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsConfigPathsPlugin());
    return config;
  }
};
module.exports = config;
