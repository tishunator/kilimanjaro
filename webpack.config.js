const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // даже пустой файл нужен
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // пустой JS, можно не использовать
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: { pretty: true } // читаемый HTML
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pug/pages/index.pug' // главная Pug-страница
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist') // теперь Dev Server видит HTML
    },
    hot: true,
    open: true
  },
  mode: 'development'
};