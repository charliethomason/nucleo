const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./demo/demo.js",
  output: {
    path: __dirname + "/dist",
    filename: "app.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      src: path.resolve("./src"),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "demo/index.html"
    })
  ],
  devServer: {
    static: {
      directory: __dirname + "/dist"
    },
    port: 9100,
    open: true
  }
};
