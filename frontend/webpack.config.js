const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: "url-loader",
        }
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        use: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias:{
      modules: __dirname+'/node_modules'
    }
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'app.js'
  },
  plugins: [
   new webpack.HotModuleReplacementPlugin(),
   new MiniCssExtractPlugin({
      filename: "app.css"
    })
  ],
  devServer: {
    port: 8080,
    contentBase: './public',
    hot: true
  }
};