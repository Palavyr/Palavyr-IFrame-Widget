'use strict';

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'palavyr-chat-widget',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    target: 'node',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: [/node_modules/, /dev/],
                use: ['babel-loader', 'ts-loader'],
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
                                includePaths: [path.resolve(__dirname, 'src/')],
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
    ],
    externals: {
        react: {
            commonjs: 'React',
            commonjs2: 'react',
            amd: 'react',
        },
        'react-dom': {
            commonjs: 'ReactDOM',
            commonjs2: 'react-dom',
            amd: 'react-dom',
        },
    },
    optimization: {
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
};
