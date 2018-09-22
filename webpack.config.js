const path = require('path')
const MyPlugin = require('./plugins/myplugin-4.js')
const Watching4MyPlugin = require('./plugins/testplugin.js')

module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: path.resolve('./loaders/index.js'),
                options: {
                    test: 1
                }
            }
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    plugins: [
        new MyPlugin({
            test: 1
        }),
        new Watching4MyPlugin()
    ]
}