const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = lg => {
  const prodWebpackConfig = merge(baseWebpackConfig(lg), {
    module: {
      rules: utils.styleLoaders({
        sourceMap: config.build.productionSourceMap,
        extract: true
      })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
      path: config.build.assetsRoot,
      // filename: utils.assetsPath('js/[name].' + lg + '.[chunkhash].js'),
      // chunkFilename: utils.assetsPath('js/[id].' + lg + '.[chunkhash].js')
      filename: utils.assetsPath('js/[name].' + lg + '.js'),
      chunkFilename: utils.assetsPath('js/[id].' + lg + '.js')
    },
    plugins: [
      // http://vuejs.github.io/vue-loader/en/workflow/production.html
      new webpack.DefinePlugin({
        'process.env': process.env.NODE_ENV === 'testing'
          ? require('../config/test.env')
          : config.build.env
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: true
      }),
      // extract css into its own file
      new ExtractTextPlugin({
        // filename: utils.assetsPath('css/[name].[contenthash].css')
        filename: utils.assetsPath('css/[name].css')
      }),
      // Compress extracted CSS. We are using this plugin so that possible
      // duplicated CSS from different components can be deduped.
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      }),
      // generate dist index.html with correct asset hash for caching.
      // you can customize output by editing /index.html
      // see https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: process.env.NODE_ENV === 'testing'
          ? 'index.html'
          : config.build.index,
        template: 'index.html',
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
      }),
      new FaviconsWebpackPlugin({
        logo: utils.resolve('resources/logo/beverages-js.inkscape.svg'),
        // prefix: config.build.assetsSubDirectory + '/icons-[hash]/',
        prefix: config.build.assetsSubDirectory + '/icons/',
        title: 'Beverages.js',

        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }),
      // split vendor js into its own file
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module, count) {
          // any required modules inside node_modules are extracted to vendor
          return (
            module.resource
            && /\.js$/.test(module.resource)
            && module.resource.indexOf(
              path.join(__dirname, '../node_modules')
            ) === 0
          )
        }
      }),
      // extract webpack runtime and module manifest to its own file in order to
      // prevent vendor hash from being updated whenever app bundle is updated
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        chunks: ['vendor']
      }),
      // copy custom static assets
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../static'),
          to: config.build.assetsSubDirectory,
          ignore: ['.*']
        }
      ])
    ]
  })

  if (config.build.productionGzip) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')

    prodWebpackConfig.plugins.push(
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.('
          + config.build.productionGzipExtensions.join('|')
          + ')$'
        ),
        threshold: 10240,
        minRatio: 0.8
      })
    )
  }

  if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    prodWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
  }

  return prodWebpackConfig
}
