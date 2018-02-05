const webpack = require('webpack');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const { Config } = require('webpack-config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
const isProd = process.env.NODE_ENV === 'production';

const config = new Config();

/**
 * Common
 */
config.merge({
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  context: path.resolve(__dirname),
  bail: isProd,
  resolve: {
    extensions: ['.css', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              camelCase: true,
              localIdentName: '[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMaps: true,
              plugins: () => [
                precss,
                autoprefixer()
              ]
            }
          },
          {
            loader: 'sass-loader',
            // options: {
            //   includePaths: ['absolute/path/a', 'absolute/path/b']
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: process.env.NODE_ENV }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      inject: 'body'
    }),
  ]
});


/**
 * Development
 */
if (isDev) {
  config.merge({
    output: {
      pathinfo: true
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      publicPath: '/',
      hot: true,
      inline: true,
      historyApiFallback: true,
      stats: {
        colors: true,
        chunks: false,
        'errors-only': true
      },
      headers: { 'Access-Control-Allow-Origin': '*' },
      open: true,
      port: 8090,
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          secure: false
        }
      },
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}


/**
 * Production
 */
if (isProd) {
  config.merge({
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new CleanWebpackPlugin(['dist'], {
        root: __dirname,
        verbose: false,
        dry: false
      }),
      new CopyWebpackPlugin([
        { from: 'public' }
      ])
    ]
  });
}

module.exports = config;
