const path = require('path');

module.exports = {
  entry: './assets/js/flatpickr.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

