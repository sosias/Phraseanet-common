// Webpack config for development
import webpack from 'webpack';
import path from 'path';
import config from '../config';

module.exports = {
    cache: true,
    output: {},
    module: {
  		rules: [{
              test: /\.js$/,
              enforce: 'post',
              include: path.resolve('src/'),
              loader: 'istanbul-instrumenter-loader'
          },
          {
              test: /\.js?$/,
              exclude: /node_modules/,
              use: ['babel-loader']
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    externals: {
        jquery: 'jQuery',
        humane: 'humane'
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
          debug: true
      }),
    ],
    devServer: {
       hot: true
    }
};