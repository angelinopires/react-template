const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

// eslint-disable-next-line func-names
module.exports = function (_env, argv) {
  const isProduction = argv.mode === 'production'
  const isDevelopment = !isProduction

  return {
    devServer: {
      compress: true,
      historyApiFallback: true,
      hot: true,
      port: 3000,
    },
    devtool: isDevelopment && 'cheap-module-source-map',
    entry: './src/index.jsx',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? 'production' : 'development',
            },
          },
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: `
                  @import "src/shared/scss/variables.scss";
                  @import "src/shared/scss/mixins.scss";
                `,
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico|webp)$/i,
          type: 'asset',
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              comparisons: false,
            },
            mangle: {
              safari10: true,
            },
            output: {
              comments: false,
              ascii_only: true,
            },
            warnings: false,
          },
        }),
        new CssMinimizerPlugin(),
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.sharpMinify,
            options: {
              encodeOptions: {
                jpeg: {
                  // https://sharp.pixelplumbing.com/api-output#jpeg
                  quality: 50,
                },
                webp: {
                  // https://sharp.pixelplumbing.com/api-output#webp
                  lossless: true,
                },
                avif: {
                  // https://sharp.pixelplumbing.com/api-output#avif
                  lossless: true,
                },
                // png by default sets the quality to 100%, which is same as lossless
                // https://sharp.pixelplumbing.com/api-output#png
                png: {},
                // gif does not support lossless compression at all
                // https://sharp.pixelplumbing.com/api-output#gif
                gif: {},
              },
            },
          },
        }),
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        maxInitialRequests: 10,
        maxAsyncRequests: 10,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module, chunks, cacheGroupKey) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )

              if (!packageName) return ''

              return `${cacheGroupKey}.${packageName[1].replace('@', '')}`
            },
          },
          common: {
            minChunks: 2,
            priority: -10,
          },
        },
      },
      runtimeChunk: 'single',
    },
    output: {
      filename: 'js/[name].[contenthash:8].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      isProduction &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].chunk.css',
        }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        inject: true,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          isProduction ? 'production' : 'development'
        ),
      }),
    ].filter(Boolean),
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    watchOptions: {
      ignored: ['dist', 'node_modules'],
    },
  }
}
