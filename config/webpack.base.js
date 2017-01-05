const path          = require('path')
const webpack       = require('webpack')
const vueConfig     = require('./vue.config.js')
const HTMLPlugin    = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: [
            'es6-promise',
            'vue',
            'vue-router',
            'vuex',
            'vuex-router-sync'
        ]
    },

    output: {
        path: path.resolve(__dirname, '../dist/'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },

    module: {
        // noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                limit: 10000,
                    name: 'assets/[name].[ext]?[hash]'
                }
            }
        ]
    },

    plugins: [
        // strip comments in Vue code
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"client"'
        }),
        // extract vendor chunks for better caching
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        // generate output HTML
        new HTMLPlugin({
            template: 'src/index.html'
        })
    ]
}
