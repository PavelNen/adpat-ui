const path = require("path");
module.exports = ({ config }) => {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "@adapt-ui/core": path.resolve(
      __dirname,
      "./src",
    ),
  });
  config.module.rules.push(
    {
      test: /examples\.js?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre'
    }
  );
  return config;
};
