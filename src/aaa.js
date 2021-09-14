const path = require('path')
 
module.exports = {
 publicPath: './', // 基本路径,打包时加上.
 outputDir: process.env.outputDir, // 输出文件目录
 lintOnSave: false, // eslint-loader 是否在保存的时候检查
 // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
 // webpack配置
 chainWebpack: (config) => {
   config.resolve.symlinks(true)
 },
 
 configureWebpack: (config) => {
   if (process.env.VUE_APP_MODE === 'production') {
     // 为生产环境修改配置...
     config.mode = 'production'
   } else {
       // 为开发环境修改配置...
       config.mode = 'development'
   }
   Object.assign(config, {
     // 开发生产共同配置
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
         '@c': path.resolve(__dirname, './src/components'),
         '@p': path.resolve(__dirname, './src/views')
       } // 别名配置
     }
   })
 },
 productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
 // css相关配置
 css: {
   // extract: true, // 是否使用css分离插件 ExtractTextPlugin
   sourceMap: false, // 开启 CSS source maps?
   loaderOptions: {
     css: {}, // 这里的选项会传递给 css-loader
     less: {
       modifyVars: {
         // less vars，customize ant design theme
 
         // 'primary-color': '#F5222D',
         // 'link-color': '#F5222D',
         // 'border-radius-base': '4px'
       },
       // DO NOT REMOVE THIS LINE
       javascriptEnabled: true
     },
     postcss: {
       plugins: [
         // 把px单位换算成rem单位
         require('postcss-pxtorem')({
          //  rootValue: 75, // 换算的基数(设计图750的根字体为32)
           rootValue: 75, // 换算的基数(设计图750的根字体为32)
           selectorBlackList: ['.van-'], // 要忽略的选择器并保留为px。
           propList: ['*'], // 可以从px更改为rem的属性。
           minPixelValue: 2 // 设置要替换的最小像素值。
         }),
         require('autoprefixer')
       ]
       // plugins: [
       //   require('autoprefixer')
       // ]
     } // 这里的选项会传递给 postcss-loader
   }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
   // modules: false, // 启用 CSS modules for all css / pre-processor files.
   requireModuleExtension: true
 },
 parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
 pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
 // webpack-dev-server 相关配置
 devServer: {
   open: false, // 自动打开浏览器
   host: '0.0.0.0', // 允许外部ip访问
   port: 8000, // 端口
   https: false, // 启用https
   overlay: {
     warnings: true,
     errors: true
   }, // 错误、警告在页面弹出
   // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
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
 },
 // 第三方插件配置
 pluginOptions: {}
}
