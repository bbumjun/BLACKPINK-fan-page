const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/js/index.js",
    profile: "./src/js/profile.js",
    gallery: "./src/js/gallery.js",
    discography: "./src/js/discography.js",
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
        use: 
        [
          {loader :MiniCssExtractPlugin.loader},
          {loader : "css-loader"},
          {loader : "postcss-loader", options: {
            sourceMap:true
          }},{loader : "sass-loader", options: {
            sourceMap:true
          }}
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg|webp)$/i,
        loader: "file-loader",
        options: {
          name: "assets/[name].[ext]",
        },
      },
      {
        test: /\.(ttf|woff|otf)$/,
        loader: "url-loader",
        options: {
          name: "assets/[name].[ext]",
          limit: 20000,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/profile.html",
      filename: "./profile.html",
      chunks: ["profile"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/gallery.html",
      filename: "./gallery.html",
      chunks: ["gallery"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/discography.html",
      filename: "./discography.html",
      chunks: ["discography"],
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({filename: "[name].css"}),
  ],
  devServer: {
    port: 3000,
    contentBase: "./dist/",
    publicPath: "/",
    open: true,
    hot:true,
  },
};
