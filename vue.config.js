const path = require('path')
const apis = require('./apis.js')

const ENV = process.env
let NODE_ENV = ENV.NODE_ENV

// https://cli.vuejs.org/config/
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: config => {
    let ret = {
      // 外部已经加载的全局变量
      externals: [
        function (context, request, callback) {
          if (['jQuery'].includes(request)) {
            return callback(null, 'window ' + request)
          }
          callback();
        }
      ]
    }
    return ret
  },
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    // remove the prefetch plugin
    config.plugins.delete('prefetch')

    // 删除默认svg处理规则
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // https://cli.vuejs.org/guide/webpack.html#chaining-advanced
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('components', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: NODE_ENV !== 'development',
  devServer: {
    // serve static
    contentBase: './',
    // 不检查Host是否正确
    disableHostCheck: true,
    hot: true,
    setup: (app, server) => {
      // 前端模拟接口
      apis.forEach(item => {
        app[item.method || 'get'](item.url, item.callback)
      })
    },
    // https://github.com/chimurai/http-proxy-middleware#proxycontext-config
    // 代理到后端服务器、线上、开发机
    proxy: {
      '^/erp/': {
        target: 'http://www.mangoerp.com',
        changeOrigin: true
      }
    },
    // 页面上显示错误和警告
    overlay: {
      warnings: true,
      errors: true
    }
  },
  // 保存时，语法检查
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 是否支持独立构建, 支持template
  runtimeCompiler: true
}
