const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    index: "./js/index.js",
    profile: "./js/profile.js",
  },
  output: {
    filename: "[name].[contenthash:5].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
  },

  mode: "none",
  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        test: /\.(ttf|woff|otf)$/,
        loader: "url-loader",
        options: {
          name: "[path][name].[ext]",
          limit: 20000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./html/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./html/profile.html",
      filename: "./profile.html",
      chunks: ["profile"],
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: "[name].css"}),
  ],
  devServer: {
    port: 3000,
    contentBase: "./dist/",
    publicPath: "/",
    open: true,
  },
};
