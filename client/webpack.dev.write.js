const path = require ('path');
const webpack = require ('webpack');
const merge = require ('webpack-merge');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const WriteFilePlugin = require ('write-file-webpack-plugin');
const CleanWebpackPlugin = require ('clean-webpack-plugin');
const BundleAnalyzerPlugin = require ('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const common = require ('./webpack.common.js');

// the path(s) that should be cleaned
let pathsToClean = ['dist/*.js', 'dist/*.map'];

// the clean options to use
let cleanOptions = {
  verbose: true,
  dry: false,
  beforeEmit: true,
};

const config = {};

config.mode = 'development';

config.module = {
  rules: [
    {
      test: /\.(sass|scss|css)$/,
      use: ExtractTextPlugin.extract ({
        fallback: 'style-loader',
        use: [
          {loader: 'css-loader'},
          // use minimize or OptimizeCSSAssets
          // { loader: 'css-loader', options: { minimize: true } },
          {loader: 'postcss-loader'},
          {loader: 'sass-loader'},
        ],
      }),
    },
  ],
};

config.devServer = {
  contentBase: './src/public',
  historyApiFallback: true,
  open: true,
  overlay: true,
  stats: 'minimal',
};

//config.devtool = 'cheap-module-eval-source-map';
config.devtool = 'source-map';

config.plugins = [
  new CleanWebpackPlugin (pathsToClean, cleanOptions),
  // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
  // inside your code for any environment checks; UglifyJS will automatically
  // drop any unreachable code.
  new webpack.DefinePlugin ({
    'process.env': {
      NODE_ENV: JSON.stringify ('development'),
    },
  }),
  new ExtractTextPlugin ({filename: 'css/[name].css'}),
  new WriteFilePlugin (),
  // new BundleAnalyzerPlugin (),
];

module.exports = merge (common, config);
