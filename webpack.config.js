module.exports = {
  entry: __dirname + '/client/app.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        loader: ['style-loader', 'css-loader'],
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  }
}