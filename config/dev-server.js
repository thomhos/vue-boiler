const path                  = require('path')
const express               = require('express')
const webpack               = require('webpack')
const webpackDevMiddleware  = require('webpack-dev-middleware')
const webpackHotMiddleware  = require('webpack-hot-middleware')
const devConfig             = require('./webpack.dev.js')

/*
 *  Create the app and set the port
 */
const app       = express()

/*
 *  Add HMR to the webpack config
 */
devConfig.entry.app             = ['webpack-hot-middleware/client?reload=true', devConfig.entry.app]
devConfig.output.filename       = '[name].js'
devConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

/*
 *  Set up the webpack dev middleware for an express server
 */
const clientCompiler  = webpack(devConfig);
const devMiddleware = new webpackDevMiddleware(clientCompiler, {
    publicPath: devConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})
app.use(devMiddleware)
app.use(webpackHotMiddleware(clientCompiler))

/*
 *  Start listening for requests
 */
app.listen(8080, () => {
    console.log(`Server started at localhost: 8080`)
})
