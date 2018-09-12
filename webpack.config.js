const path = require('path')
module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: path.resolve('./loader/index.js'),
                options: {
                    test: 1
                }
            }
        }]
    }
}