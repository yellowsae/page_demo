
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  // 使用 webpack-dev-server 
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },    
    compress: true,  // 开启Gzip压缩
    port: 8080,
    hot: true,
    open: true  // 自动打开浏览器
  },
  performance: {
    // 警告提示出现 包体积过大时， 取消提示
    hints: false
  },
  module: {
    rules: [
      // 规则
      {
        test: /\.ts$/,
        use: [
          // 配置babel
          {
            loader: 'babel-loader',
            // 配置babel 
            options: {
              // 设置预定的环境
              presets: [
                [
                  // 指定的环境
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的浏览器
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    // 指定corejs 的版本
                    "corejs": "3",
                    // 使用 corejs 的方式,  "usage" 表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]                  
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      // CSSloader
      {
        test: /\.(s[ac]|le|c)ss$/i, //匹配所有的 sass/scss/css 文件
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',  // 在 postcss.config.js  和  .browserslistrc 已经配置
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '贪吃蛇',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css'
    })
  ],

  resolve: {
    // 省略引入的扩展名
    extensions: ['.js', '.jsx', '.ts']
  },
  devtool: 'eval-cheap-module-source-map',
  // webpack5 开启缓存
  cache: {
    type: 'filesystem',  //  type: 'filesystem' 文件缓存
  },
}


/**
 * {
 *  loader: 'babel-loader',
 *  presets: [
 *    "@babel/preset-env"
 *  ]
 * }
 */