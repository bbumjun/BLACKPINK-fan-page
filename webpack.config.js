const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry :  {
        index : './js/index.js'
},
    output : {
        filename : '[name].[contenthash:5].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath:'./'
    },

    mode: 'none',
    module : {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options : {
                    name:"[path][name].[ext]?[contenthash]"
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/index.html',
            filename: './[name].html'
        }),
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename: '[name].css'})
    ],
    devServer: {
        port:3000,
        contentBase: path.join(__dirname,'dist'),
        publicPath:'/',
        open:true
    },
}
