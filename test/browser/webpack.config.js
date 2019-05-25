const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const projectRoot = path.resolve(__dirname, "../..");

module.exports = {
  entry: path.join(projectRoot, "test/browser/index.js"),
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".js"]
  },
  output: {
    path: path.join(projectRoot, "test/browser/dist"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        include: projectRoot,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(projectRoot, "test/browser/index.html")
    })
  ],
  node: {
    module: "empty",
    net: "empty",
    fs: "empty"
  }
};
