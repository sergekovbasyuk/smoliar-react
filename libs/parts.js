const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const cssnano = require('cssnano');
const flexbugs = require('postcss-flexbugs-fixes');
const cssnext = require('postcss-cssnext');
const rucksack = require('rucksack-css');

exports.devServer = function(options) {
  return {
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,

      // Unlike the cli flag, this doesn't set
      // HotModuleReplacementPlugin!
      hot: true,
      inline: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: options.host, // Defaults to `localhost`
      port: options.port // Defaults to 8080
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
};

exports.setupCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
          include: paths
        }
      ]
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('[name].[chunkhash].css', {
        allChunks: true
      })
    ],
    postcss: function () {
        return [
          precss,
          cssnext,
          cssnano,
          flexbugs,
          rucksack
        ];
    }
  };
};

exports.minify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        compress: {
          warnings: false,
          drop_console: true
        },
        mangle: {
          except: ['$'],
          screw_ie8 : true,
          keep_fnames: true
        }
      })
    ]
  };
};

exports.setFreeVariable = function(key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
};

exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  };
};

exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
      })
    ]
  };
};

exports.extractImage = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(jpg|png)$/,
          loader: 'file-loader?name=img/[name].[ext]',
          include: paths
        }
      ]
    }
  };
};

exports.babel = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          include: paths
        }
      ]
    }
  };
};

exports.svg = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.svg$/,
          loaders: ['raw-loader'],
          include: paths
        }
      ]
    }
  };
};

exports.json = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json'
        }
      ]
    }
  };
};
