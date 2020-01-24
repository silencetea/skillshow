/*
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-01-23 19:02:08
 * @LastEditors  : silencetea
 * @LastEditTime : 2020-01-25 00:28:10
 */
// const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
    entry: {
        app: './src/entry-client.js'
    },
    resolve: {
        alias: {
            'create-api': './create-api-client.js'
        }
    },
    optimization: {
        // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
        // 以便可以在之后正确注入异步 chunk。
        // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: [
        // 此插件在输出目录中
        // 生成 `vue-ssr-client-manifest.json`。
        new VueSSRClientPlugin()
    ]
})