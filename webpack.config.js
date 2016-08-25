var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './index',
  output: {
    path: __dirname + '/dist',
    filename: '[chunkhash].js',
  },
  resolve: {
    modulesDirectories: ['vendor'],
  },
  module: {
    noParse: /remark\.js/,
    loaders: [
      {
        test: /.*\.md/,
        loader: 'markdown-image-loader'
      },
      {
        test: /remark/,
        loader: 'exports-loader?remark'
      },
      {
        test: /.*\.(png|jpg|gif|mp4)/,
        loader: 'file-loader'
      }
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: '!!raw-loader!./index.html',
    }),
  ],
};
