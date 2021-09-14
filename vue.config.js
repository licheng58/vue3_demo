const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve(dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
// see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
 // webpack配置
  publicPath: './',// 基本路径,打包时加上.
  outputDir: process.env.outputDir, // 输出文件目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // assetsDir: 'assets',

  configureWebpack: config => {
    // 生产环境取消 console.log
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },

  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
    }
    config
      .plugin('ignore')
      .use(
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/)
      )
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@layout', resolve('src/layout'))
      .set('@static', resolve('src/static'))
      .set('@mobile', resolve('src/modules/mobile'))
    // .set('@ant-design/icons/lib/dist$', resolve('src/icons.js'))

    // 生产环境，开启js\css压缩
    if (process.env.NODE_ENV === 'production') {
      config.plugin('compressionPlugin').use(new CompressionPlugin({
        test: /\.js$|.\css|.\less/, // 匹配文件名
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false // 不删除源文件
      }))
    }
    // 配置 webpack 识别 markdown 为普通的文件
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use()
      .loader('file-loader')
      .end()
    config
      .when(process.env.NODE_ENV != 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              minSize: 30000, // 字节 引入的文件大于30kb才进行分割
              maxSize: 500000, // 50kb，尝试将大于50kb的文件拆分成n个50kb的文件
              minChunks: 1, // 模块至少使用次数
              maxAsyncRequests: 5, // 同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
              maxInitialRequests: 3, // 首页加载的时候引入的文件最多3个
              automaticNameDelimiter: '~', // 缓存组和生成文件名称之间的连接符
              name: true,
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                antDesignVue: {
                  name: 'chunk-antDesignVue', //
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?ant-design-vue(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  },

  // css相关配置
  css: {
    // extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      css: {}, // 这里的选项会传递给 css-loader
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */
          'primary-color': '#6D83BE',
          'link-color': '#6D83BE',
          'border-radius-base': '4px'
        },
        javascriptEnabled: true
      }
    },
    // requireModuleExtension: true
  },

  devServer: {
    open: true, // 自动打开浏览器
    host: '0.0.0.0', // 允许外部ip访问
    port: 8000, // 端口
    https: false, // 启用https
    // proxy: {
    //   '/jeecg-boot': {
    //     target: 'http://121.36.241.150:4001',
    //     // target: 'http://192.168.1.155:8991', // 本地
    //     ws: false,
    //     changeOrigin: true
    //   }
    // },
    proxy: {
      '/api': {
          target: '<url>',
          ws: true,
          changeOrigin: true
      },
      '/foo': {
          target: '<other_url>'
      }
      },  // 配置多个代理
    overlay: {
      warnings: true,
      errors: true
    }, // 错误、警告在页面弹出
  },
 // 第三方插件配置
  pluginOptions: {}
}
