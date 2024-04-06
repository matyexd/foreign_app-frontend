const path = require("path");
const { loaderByName, addBeforeLoader } = require("@craco/craco");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@": resolvePath("./src"),
      "@views": resolvePath("./src/views"),
      "@routes": resolvePath("./src/routes"),
    },
  },

  configure: (webpackConfig) => {
    webpackConfig.resolve.extensions.push(".html");

    const htmlLoader = {
      loader: require.resolve("html-loader"),
      test: /\.html$/,
      exclude: /node_modules/,
    };

    addBeforeLoader(webpackConfig, loaderByName("file-loader"), htmlLoader);

    return webpackConfig;
  },
};
