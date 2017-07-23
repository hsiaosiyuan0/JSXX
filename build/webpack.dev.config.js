let path = require("path")
let projectRoot = path.resolve(__dirname, "..")

module.exports = {
  entry: path.join(projectRoot, "src/index.js"),
  // watch: true,
  devtool: "source-map",
  resolve: {
    extensions: [".js"]
  },
  output: {
    path: path.join(projectRoot, "dist"),
    filename: "jsxx.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ["babel-loader", "eslint-loader"],
      include: projectRoot,
      exclude: /node_modules/
    }]
  },
  node: {
    module: "empty",
    net: "empty",
    fs: "empty"
  }
}
