const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    "components.js": "./src/components/index.js"
  },
  output: {
    filename: "[name]",
    path: path.resolve(__dirname, "./dist"),
    library: {
      name: "nucleo",
      type: "umd"
    },
    umdNamedDefine: true,
  },
  externals: ["react", "prop-types"],
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
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "nucleo.css"
    }),
    new webpack.ProvidePlugin({
      React: "react",
      PropTypes: "prop-types"
    })
  ]
};
