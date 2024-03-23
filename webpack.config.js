// ? bring the path module by setting entry

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // ? set the plugins under the module

module.exports = {

  mode: 'development',
  /* you can make this multiple entry point by setting it as an object
  and do code-splitting
  */
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][next]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  /*configure the loaders so that any file that ends with this scss
  will be replied by this loaders
  */
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader', 'css-loader', 'sass-loader'
      ],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
    {
      test: /\.(png|svg|jpeg|jpg|gif)$/i,
      type: 'asset/resource',
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html',
    })
  ]
}