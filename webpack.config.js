module.exports = {
  // app
  // entry: ['babel-polyfill', './app/index.js'],

  entry: ['babel-polyfill', './es6-react/index.js'],
  
  output: {
    path: './build',
    // if the above line does not work, try `path: __dirname + '/build'`
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // a regular expression that catches .js files
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3000, // most common port
    contentBase: './build',
    inline: true
  }
}
