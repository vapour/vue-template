const path = require('path')
const apis = require('./config/apis.js')
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')

const ENV = process.env
let NODE_ENV = ENV.NODE_ENV

// https://cli.vuejs.org/config/
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: config => {
    let ret = {
      performance: {
        // 1m
        maxEntrypointSize: 1024000,
        // 1M
        maxAssetSize: 1024000
      },
      // 外部已经加载的全局变量
      externals: [
        function (context, request, callback) {
          if (['jQuery'].includes(request)) {
            return callback(null, 'window ' + request)
          }
          callback()
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

    config.plugin('themeColorReplace')
      .use(new ThemeColorReplacer({
        // colors array for extracting css file
        matchColors: [
          ...forElementUI.getElementUISeries('#409EFF')
        ],
        externalCssFiles: ['./node_modules/element-ui/lib/theme-chalk/index.css'],
        changeSelector: forElementUI.changeSelector,
        fileName: 'css/theme-colors-[contenthash:8].css', //optional. output css file name, suport [contenthash] and [hash].
        // optional, String or string array. Set external css files (such as cdn css) to extract colors.
        // externalCssFiles: ['./node_modules/element-ui/lib/theme-chalk/index.css'],
        // optional. Inject css text in js file, not need to download `theme-colors-xxx.css` any more.
        injectCss: true,
        isJsUgly: process.env.NODE_ENV !== 'development'
      }))

    // 默认svg处理规则中排除svg图标
    // 这样可兼容iconfont图标和svg-sprite图标
    config.module
      .rule('svg')
      .exclude
      .add(resolve('src/assets/svg'))
      .end()

    if (NODE_ENV !== 'development') {
      config.module
        .rule('webpack-strip-block')
        .test(/\.js$/)
        .pre()
        .include
          .add(resolve('src'))
        .end()
        .use('webpack-strip-block')
        .loader('webpack-strip-block')
        .options({
          start: 'dev-block-start',
          end: 'dev-block-end'
        })
    }

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
    // 可设置成其它host, 注意绑定到127.0.0.1
    host: 'dev.joinf.com',
    // serve static
    contentBase: './',
    // 不检查Host是否正确
    disableHostCheck: true,
    // 文件改变后，默认不刷新页面
    liveReload: false,
    // 启用hmr
    hot: true,
    // 默认不开启https，
    // 如果要开启，设置成true, 然后运行 npm run https
    // 如果host有修改，修改后运行 npm run https
    https: false,
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
  lintOnSave: NODE_ENV !== 'production',
  // 是否支持独立构建, 支持template
  runtimeCompiler: false,
  pluginOptions: {
    // https://github.com/webpack-contrib/webpack-bundle-analyzer
    webpackBundleAnalyzer: {
      // 开发环境不开启
      analyzerMode: NODE_ENV === 'development' ? 'disalbed' : 'static',
      openAnalyzer: false,
      // https://webpack.js.org/configuration/stats/
      statsOptions: {
        excludeModules: (moduleSource) => {
          if (moduleSource) {
            // 分析时排除svg图标目录
            return moduleSource.match(/assets\/svg\//)
          }
        }
      }
    }
  }
}
