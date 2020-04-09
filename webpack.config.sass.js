const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/styles/nucleo.scss",
  output: {
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};
