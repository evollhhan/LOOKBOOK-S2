const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//
// CONST
// ---
const PATH = p => path.resolve(__dirname, p);
const PATH_DOC = PATH('./doc');
const PATH_SRC = PATH('./src');
const PATH_OUTPUTHTML = PATH('./doc/index.html');
const PATH_TEMPLATE = PATH('./index.html');

//
// DevServer
// ----
const devServer = {
  host: '0.0.0.0',
  port: 3000,
  open: true,
  disableHostCheck: true,
  contentBase: PATH_DOC,
  clientLogLevel: 'error',
  overlay: {
    warnings: false,
    errors: true
  },
  quiet: true,
  watchOptions: {
    poll: false
  }
};

//
// Rules
// ----
const rules = (IS_PROD) => [
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }]
  },
  {
    test: /\.js$/,
    use: [{
      loader: 'babel-loader'
    }],
    include: [
      PATH_SRC,
      PATH('node_modules/webpack-dev-server/client')
    ]
  },
  {
    test: /\.(scss|css)$/,
    oneOf: [
      {
        resourceQuery: /raw/,
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:4]'
            },
          },
          'sass-loader'
        ]
      }
    ]
  }
];

//
// Plugins
// ---
const plugins = (IS_PROD) => {
  const list = [
    new HtmlWebPackPlugin({
      template: PATH_TEMPLATE,
      filename: PATH_OUTPUTHTML,
      chunks: ['app']
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': IS_PROD ? JSON.stringify('production') : JSON.stringify('development')
    })
  ];

  if (IS_PROD) {

  } else {
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  }

  return list;
}

module.exports = (env, argv) => {
  // Build Env
  const IS_PROD = argv.mode === 'production';
  // Export Config
  return {
    entry: {
      app: './src/index.ts'
    },
    mode: argv.mode,
    output: {
      path: PATH_DOC,
      filename: '[name].bundle.js',
      publicPath: './'
    },
    devtool: IS_PROD ? '' : 'source-map',
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.json']
    },
    devServer,
    module: {
      rules: rules(IS_PROD)
    },
    plugins: plugins(IS_PROD),
    node: {
      setImmediate: false,
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    }
  }
};