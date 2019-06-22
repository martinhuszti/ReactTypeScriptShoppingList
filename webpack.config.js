const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: __dirname + "/src/index.tsx", // webpack entry point. Module to start building dependency graph
    output: {
        path: __dirname + '/build', // Folder to store generated bundle
        filename: 'bundle.js', // Name of generated bundle after build
        publicPath: '/' // public URL of the output directory when referenced in a browser
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx',".css"]
    },

    module: {
        rules: [{
                test: [/\.jsx?$/, /\.tsx?$/],
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: ['css-hot-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: './src/components/shoppingitem/',
                            // only enable hot in development
                            hmr: process.env.NODE_ENV === 'development',
                            //reloadAll: true,

                        },
                    },
                    'css-loader',
                ],
            },
        ]
    },
    plugins: [ // Array of plugins to apply to build chunk
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
            inject: 'body'
        }),
        new CopyPlugin([
            // relative path is from src
            {
                from: './public/favicon.ico'
            }, // <- your path to favicon
            {
                from: './public/manifest.json'
            }, // <- your path to favicon
        ]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),

    ],
    devServer: { // configuration for webpack-dev-server
        contentBase: './src/public', //source of static assets
        port: 7700, // port to run dev-server
        historyApiFallback: true,
    }
};