const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const {
    VueLoaderPlugin
} = require('vue-loader')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    mode: 'development',
    devtool: isProd ?
        false : '#cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            'public': path.resolve(__dirname, '../public')
        }
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.styl(us)?$/,
                loader: 'style-loader!css-loader!stylus-loader'
                /*use: isProd ?
                    ExtractTextPlugin.extract({
                        use: [{
                                loader: 'css-loader',
                                options: {
                                    minimize: true
                                }
                            },
                            'stylus-loader'
                        ],
                        fallback: 'vue-style-loader'
                    }) : ['vue-style-loader', 'css-loader', 'stylus-loader']*/
            },
        ]
    },
    performance: {
        hints: false
    },
    optimization: {
        minimizer: [
            /*new TerserPlugin({
                cache: true, // 开启缓存
                parallel: true, // 支持多进程
                sourceMap: true, 
            }),*/
            new UglifyJSPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    }
                }
            }),
        ]
    },
    plugins: isProd ? [
        new VueLoaderPlugin(),
        /* new webpack.optimize.UglifyJsPlugin({
             compress: {
                 warnings: false
             }
         }),*/
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin({
            filename: 'common.[chunkhash].css'
        })
    ] : [
        new VueLoaderPlugin(),
        new FriendlyErrorsPlugin()
    ]
}