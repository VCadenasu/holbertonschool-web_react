const path = require('path');

const rueleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const rules = [rueleForStyles]

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: { rules }
};
