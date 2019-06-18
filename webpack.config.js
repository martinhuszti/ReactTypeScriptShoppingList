const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: __dirname + "/src/index.tsx", // webpack entry point. Module to start building dependency graph
    output: {
        path: __dirname + '/dist', // Folder to store generated bundle
        filename: 'bundle.js', // Name of generated bundle after build
        publicPath: '/' // public URL of the output directory when referenced in a browser
    },
    resolve: {
        extensions: ['.js', '.jsx','.ts','.tsx']
      },

    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.tsx?$/],
                use: 'babel-loader',
                exclude: /node_modules/
              },
             {
                test: /\.html/,
                loader: 'raw-loader'
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins: [ // Array of plugins to apply to build chunk
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
            inject: 'body'
        }),
        new ManifestPlugin()

    ],
    devServer: { // configuration for webpack-dev-server
        historyApiFallback: true,
        contentBase: './src/public', //source of static assets
        port: 7700, // port to run dev-server
    }
};