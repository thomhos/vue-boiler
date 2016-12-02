const path              = require('path')
const webpack           = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SWPrecachePlugin  = require('sw-precache-webpack-plugin')

const base              = require('./webpack.base.js')
const vueConfig         = require('./vue.config.js')


const config = Object.assign({}, base, {

    plugins: ( base.plugins || [] ).concat([
        new ExtractTextPlugin('styles.[hash].css'),

        // this is needed in webpack 2 for minifying CSS
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),

        // minify JS
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new SWPrecachePlugin({
            cacheId: 'vue-ssr',
            filename: 'service-worker.js',
            dontCacheBustUrlsMatching: /./,
            staticFileGlobsIgnorePatterns: [/index\.html$/, /\.map$/]
        })
    ])

})


vueConfig.loaders = {
    stylus: ExtractTextPlugin.extract({
        loader: 'css-loader!stylus-loader',
        fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader
    })
}

module.exports = config
