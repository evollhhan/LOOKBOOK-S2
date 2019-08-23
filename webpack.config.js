const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
//
// CONST
// ---
const PATH = p => path.resolve(__dirname, p);
const PATH_DOC = PATH('./docs');
const PATH_SRC = PATH('./src');

//
// DevServer
// ----
const devServer = {
  host: '0.0.0.0',
  port: 3000,
  open: false,
  disableHostCheck: true,
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
    use: ['babel-loader'],
    include: [PATH_SRC, PATH('node_modules/webpack-dev-server/client')]
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
              modules: {
                localIdentName: IS_PROD ? '[hash:base64]' : '[hash:base64:4]_[local]'
              }
            },
          },
          'sass-loader'
        ]
      }
    ]
  },
  // {
  //   test: /\.(png)$/,
  //   use: [{
  //     loader: 'url-loader',
  //     options: {
  //       name: '[name]-[hash:4].min.[ext]',
  //       limit: 3000
  //     }
  //   }]
  // },
  {
    test: /\.(ttf|png)$/,
    use: [{
      loader: 'file-loader'
    }]
  }
];

//
// Plugins
// ---
const plugins = (IS_PROD) => {
  const list = [
    new HtmlWebPackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': IS_PROD ? '"production"' : '"development"'
    }),
    new FriendlyErrorsPlugin()
  ];

  if (IS_PROD) {
    list.push(
      new MiniCssExtractPlugin({
        filename: '[name].[hash:4].css'
      })
    )
    // list.push(
    //   new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // )
  } else {
    list.push(new webpack.HotModuleReplacementPlugin());
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
      filename: IS_PROD ? '[name].[hash:4].js' : '[name].js',
      publicPath: IS_PROD ? '/LOOKBOOK-S2/' : ''
    },
    devtool: '#cheap-eval-source-map',
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.json']
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    devServer,
    module: {
      rules: rules(IS_PROD)
    },
    plugins: plugins(IS_PROD)
  }
};