const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        "brinput": "./index.js",
        "brinput.min": "./index.js",
      },    
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: '[name].js',      
      library: undefined,
      libraryTarget: 'umd'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};



