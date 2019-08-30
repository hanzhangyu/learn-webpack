const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: "cheap-module-source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
