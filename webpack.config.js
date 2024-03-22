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