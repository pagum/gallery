const path = require("path");
module.exports = {
  // define entry file and output
  entry: "./src/index.ts",
  output: {
    path: path.resolve("dist"),
    filename: "main.js"
  },
  // define babel loader
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      }
    ]
  }
};
