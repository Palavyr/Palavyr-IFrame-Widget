'use strict';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './dev/main.tsx',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    target: 'web',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: [/node_modules/],
                use: ['babel-loader', 'ts-loader'],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env'],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('node-sass'),
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'src/scss/')],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/inline',
            },
        ],
    },
    plugins: [
        /**
         * Known issue for the CSS Extract Plugin in Ubuntu 16.04: You'll need to install
         * the following package: sudo apt-get install libpng16-dev
         */
        new MiniCssExtractPlugin({
            filename: 'styles.css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './dev/index.html',
            filename: 'index.html',
            title: 'Palavyr Chat Widget',
        }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production'),
        // }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    optimization: {
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
};

// References:
// - https://stackoverflow.com/questions/45818937/webpack-uncaught-referenceerror-require-is-not-defined
// -
