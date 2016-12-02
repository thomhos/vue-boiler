const webpack           = require('webpack')
const path              = require('path')
const base              = require('./webpack.base.js')

const config = Object.assign({}, base, {

    devtool: '#source-map',

    output: {
        path: path.resolve(__dirname, '../'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    }

})

module.exports = config
