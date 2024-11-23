const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'Index Page',
      template: path.resolve(__dirname, './src/pages/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'About Page',
      template: path.resolve(__dirname, './src/pages/about.html'),
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Blog Page',
      template: path.resolve(__dirname, './src/pages/blog.html'),
      filename: 'blog.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Rozklad Page',
      template: path.resolve(__dirname, './src/pages/rozklad.html'),
      filename: 'rozklad.html',
    }),
    new HtmlWebpackPlugin({
      title: 'News Page',
      template: path.resolve(__dirname, './src/pages/news.html'),
      filename: 'news.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Photo Page',
      template: path.resolve(__dirname, './src/pages/photo.html'),
      filename: 'photo.html',
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images'),
          to: 'assets/images',
        },
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    port: 8080,
    open: true,
    hot: true,
    watchFiles: ['src/**/*'],
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
