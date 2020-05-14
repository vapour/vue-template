# 前端规范

## 代码风格
* [eslint:recommended](https://eslint.org/docs/rules/)
* [airbnb:legacy](https://github.com/airbnb/javascript)
* [Vue风格](https://cn.vuejs.org/v2/style-guide/)

## 目录
![Vue目录规范](https://ws3.sinaimg.cn/large/006tNc79gy1g38ru1imgkj30hb0nrq4a.jpg)

## npm命令
1. `npm run serve/dev` 启动开发环境
2. `npm run build` 生产环境打包
3. `npm run doc` 根据注释生成帮助文档，参考**注释规范**
4. `npm run https` 配置https环境，参考**https**
5. `npm run inspect` 导出当前项目webpack配置

## 图标

图标使用[svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader)技术，将svg格式图标放入**assets/svg**目录。

### 使用方法
自定义全局组件**Icon**

```
<Icon type="iconName" color="red" :size="14" :class-name="my-icon"></Icon>
```

## Vant
统一使用[Vant](https://youzan.github.io/vant/#/zh-CN/)框架，可在**plugins/vant.js**中配置用到的组件
默认引入了全部组件，可删除不使用的组件，可减少打包体积

## CSS
使用[scss](https://sass-lang.com/)

## Alias
资源解析的别名
```
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
```
在 html 或者 scss 中 使用别名的时候 需要在开头 加上 ~
```
      <img src="~assets/img/reg-top.png" alt="">
``` 

## Store 依赖
使用[store](https://www.npmjs.com/package/store) 代替 localStorage

## Native 通信
可以查看 **utils/bridge.js**

```
  // 全局监听云盘文件的上传
  vm.$bridge.register('cloudUpdateSuccess', async data => {
      let { url, size, filename: code, catalogueId, uploadType: type } = data
      let name = /\/[^\/]+$/.exec(code)[0].substr(1),
          suffix = /\.[^\.]+$/.exec(code)[0].substr(1)
      size = ~~size
      // 上传成功后执行保存到云盘操作
      let res = await DiskApi.uploadCloudFileCallback({
          catalogueId,
          code,
          name,
          size,
          suffix,
          type
      })
      if (!res.data.success) {
          return vm.$message(res.data.errMsg)
      }
      vm.$bus.$emit('cloudUpdateSuccess') // 通知组件更新ui
      vm.$message(`${name}上传成功`)
  })

```

## axios封装
**plugins/axios.js**对axios进行了简单封装，可根据需要进行修改
### autoHandleError
默认进行了全局错误处理。请求时可设置```autoHandleError = false```取消默认错误处理

```
this.$axios.get('/erp/common/shop', {
  autoHandleError: false
}).then(({ data: res }) => {
  if (res.success) {
    console.log(res)
  } else {
    // 自定义错误处理
  }
})
```

### globalLoading
根据ajax请求实现了全局loading封装。

```
<template>
  <div id="app" v-loading="loading">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    loading() {
      return this.$store.state.app.loading
    }
  }
}
</script>
```
请求时，可设置```globalLoading = false```来禁止loading

```
this.$axios.get('/erp/common/shop', {
  globalLoading: false
}).then(({ data: res }) => {
})
```

## 接口管理
可将ajax服务在**api**目录以业务为分类统一管理

以下是**api/todo.js**内容

```
/**
 * 待办事项ajax服务
 * @module api/todo
 *
 */
import axios from '@/plugins/axios'

const url = '/todo'

// 待办事项服务接口
export default {
  /**
   * 分页获取
   * @param {object} param  请求参数
   * @param {number} [param.page] 当前页数
   * @param {number} param.pageSize 分页大小
   * @return {Promise}
   */
  list(param) {
    return axios.get(url, { param })
  },
  /**
   * 新建数据
   * @param {object} param  请求参数
   * @param {string} param.name 事项名称
   * @param {string} param.content 详细描述
   * @return {Promise}
   */
  create(param) {
    return axios.post(url, param)
  },
  /**
   * 获取详情
   * @param {string} id
   * @return {Promise}
   */
  show(id) {
    return axios.get(url + '/' + id)
  },
  /**
   * 更新单个数据
   * @param {string} id  数据id
   * @param {object} param  更新数据对象
   * @param {string} param.name 事项名称
   * @param {string} param.content 详细描述
   * @return {Promise}
   */
  update(id, param) {
    return axios.put(url + '/' + id, param)
  },
  /**
   * 删除单个数据
   * @param {string} id
   * @return {Promise}
   */
  delete(id) {
    return axios.delete(url + '/' + id)
  }
}

```

## 模拟请求
**apis.js**文件中支持使用[expressjs](http://expressjs.com/)和[mockjs](http://mockjs.com/)注册模拟接口

```
const Mock = require('mockjs')

module.exports = [{
  // 获取验证码
  url: '/code/fresh',
  method: 'get',
  callback (req, res) {
    res.json(success(Mock.mock({code:/\d{4}/})))
  }
}]


function success (data) {
  return {
    success: true,
    data
  }
}
function error (msg = '未知错误', code) {
  return {
    success: false,
    msg,
    code
  }
}
```

## 代理
开发代理服务[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)

```
proxy: {
  '^/erp/': {
    target: 'http://www.mangoerp.com',
    changeOrigin: true
  }
}
```

## 前端监控
内置了错误上报系统：[badjs](http://badjs.mangoerp.com/index.html)

```
// http://badjs.mangoerp.com/index.html
badjs.init({
  // 项目id, 需要申请
  id: 2,
  // 用户名或用户id，可从cookie中获取
  uin: 'test4444',
  // 错误上报概率，1表示100%上报
  random: 1,
  // 不监听window.onerror错误
  windowOnError: false,
  // 是否开启离线日志
  offlineLog: false,
  offlineLogAuto: false
})
// 全局错误处理
Vue.config.errorHandler = function errorHandler(err, vm, cause) {
  if (cause) {
    err.cause = cause
  }
  console.error(err)
  if (NODE_ENV !== 'development') {
    badjs.report(err)
  }
}
```

## 说明文档
代码注释规范使用[jsdoc](https://jsdoc.app/)

运行以下命令，根据注释生成说明文档

```
npm run doc
```

### vue组件注释
```
/**
 * @module components/Counter
 * @author 杜伟坡 <dovapour@qq.com>
 * @desc 计数器组件
 * @example <Counter :counter-initor="5" :step="2"></Counter>
 * @vue-prop {Number} conterInitor - 计数器初始值
 * @vue-prop {Number} [step=1] - 增加步长
 * @vue-data {Number} counter - 计数器当前值
 * @vue-computed {String} message
 * @vue-event {Number} increment - 计数器增加后，触发事件
 * @vue-event {Number} decrement - 计数器减小后，触发事件
 */

```

## i18n
多语言支持，可查看[branch:i18n](https://github.com/vapour/vue-template/tree/i18n)


## 开发阶段代码
通过`webpack-strip-code`实现测试代码只在开发阶段运行，打包上线时会自动删除

### 规则
符合以下规范的代码，打包时会自动删除

```
/* dev-block-start */
// 只在development环境运行，其它环境自动删除
alert('这里的代码只在开发阶段运行')
/* dev-block-end */
```

### vscode代码片断

```
"development code": {
 	"scope": "javascript,typescript,vue",
 	"prefix": "devcode",
 	"body": [
		"/* dev-block-start */",
		"// 只在development环境运行，其它环境自动删除",
 		"$1",
 		"/* dev-block-end */"
 	],
 	"description": "只在开发阶段运行代码"
}
```


## https
开启步骤：

1. `vue.config.js`中 `devServer.https`选项设置成`true`
2. 运行`npm run https`安装证书

window上运行时，会有以下确认窗口。选择【是】，安装完成
![](http://ww2.sinaimg.cn/large/006tNc79gy1g541y80l12j30dq0bb3ze.jpg)

> 修改devServer.host后，需要重新运行`npm run https`

### 效果

![](http://ww1.sinaimg.cn/large/006tNc79gy1g5421n8h93j30ez0a03z4.jpg)

## 打包分析
运行`npm run build`后会生成一个**dist/report.html**文件，可查看打包模块详细
![chunk-vendors.js](https://ws1.sinaimg.cn/large/006tNc79gy1g39vqloed9j31160l0grl.jpg)

## 目录结构
```
vue-template
├── README.md
├── babel.config.js   // babel 配置
├── config
│   ├── apis.js
│   ├── inspect.js
│   └── jsdoc.json
├── jsconfig.json 
├── other
│   └── 性能优化.md
├── package-lock.json
├── package.json   
├── postcss.config.js   // css 差插件设置 
├── project.code-workspace 
├── public
│   └── index.html
├── scripts
│   └── tls
│       ├── cert
│       ├── install-ca.js
│       └── util.js
├── src
│   ├── App.vue
│   ├── api           // 请求接口描述
│   │   └── todo.js     
│   ├── assets       // 资源文件
│   │   ├── img
│   │   └── svg
│   ├── components   // 自定义的全剧组件
│   │   ├── icon.vue   // icon组件 使用svg
│   │   └── index.js
│   ├── main.js
│   ├── plugins
│   │   ├── axios.js   // axios 插件 拦截
│   │   └── vant.js    // vant-ui 按需引入
│   ├── router
│   │   ├── index.js   // router配置
│   │   └── layouts
│   ├── store
│   │   ├── index.js   // vuex配置
│   │   └── module
│   ├── utils
│   │   ├── badjs.js   // badjs 性能监控
│   │   ├── bridge.js   // native 原生通信
│   │   ├── constants.js  // 全局常量 检验正则
│   │   ├── directives.js // 全局 directives
│   │   ├── filters.js  // 全局 filters
│   │   ├── helper.js 
│   │   └── modal.js
│   └── views   // page模块
│       ├── Home.vue
│       └── login
└── vue.config.js


```

