const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./libs/parts');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  images: path.join(__dirname, 'src/img')
};

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.ejs',
      title: 'Aleksei Smoliar',
      appMountId: 'app',
      inject: false,
      mobile: true,
      favicon: 'favicon.ico'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      {
        // devtool: 'source-map',
        output: {
          path: PATHS.build,
          // publicPath: 'github.com/sergekovbasyuk/webpack-demo/',
          filename: '[name].[chunkhash].js',
          // This is used for require.ensure. The setup
          // will work without but this is useful to set.
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react', 'react-dom', 'jquery', 'fullpage.js']
      }),
      parts.minify(),
      parts.setupCSS(PATHS.app),
      parts.extractImage(PATHS.images),
      parts.svg(PATHS.app),
      parts.babel(PATHS.app),
      parts.json(PATHS.app)
    );
    break;

  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.setupCSS(PATHS.app),
      parts.extractImage(PATHS.images),
      parts.svg(PATHS.app),
      parts.babel(PATHS.app),
      parts.json(PATHS.app),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
}

module.exports = validate(config);
