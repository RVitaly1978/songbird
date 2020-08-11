const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const APP_DIR = path.resolve(__dirname, '..', 'src');
const BUILD_DIR = path.resolve(__dirname, '..', 'dist');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const entry = path.join(APP_DIR, 'index.tsx');
const output = { path: BUILD_DIR, filename: 'bundle.js' };

module.exports = {
  entry,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg|mp3)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src', // prevent display of src/ in filename
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: path.join(PUBLIC_DIR, 'favicon.png'),
      template: path.join(APP_DIR, 'index.html'),
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
