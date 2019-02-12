const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = (_, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: "./src/index.ts",

    output: {
      filename: "[name].[contenthash].js"
    },

    mode: isProd ? "production" : "development",

    devtool: isProd ? "source-map" : "inline-source-map",

    resolve: {
      extensions: [".ts", ".js"]
    },

    module: {
      rules: [{ test: /\.ts$/, loader: "ts-loader" }]
    },

    plugins: [
      new HtmlWebpackPlugin({ template: "src/index.html" }),
      new CleanWebpackPlugin("dist")
    ]
  };
};
