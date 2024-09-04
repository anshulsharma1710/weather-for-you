const path = require('path');

module.exports = {
  entry: './app/page.tsx',  // Change this to your entry file
  output: {
    path: path.resolve(__dirname, 'dist'),  // Change this to your desired output directory
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // For transpiling ES6+ syntax
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
};
