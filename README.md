# 前端规范

## 代码风格
* [eslint:recommended](https://eslint.org/docs/rules/)
* [airbnb:legacy](https://github.com/airbnb/javascript)
* [Vue风格](https://cn.vuejs.org/v2/style-guide/)

## 目录
![Vue目录规范](https://ws2.sinaimg.cn/large/006tNc79gy1g37lr9nxi9j30gl0momyd.jpg)

## 图标

图标使用[svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader)技术，将svg格式图标放入**assets/svg**目录。

### 使用方法
自定义全局组件**Icon**

```
<Icon type="iconName" color="red" :size="14" :class-name="my-icon"></Icon>
```

## Element
统一使用[element](https://element.eleme.cn/#/zh-CN/component/installation)框架，可在**plugins/element.js**中配置用到的组件
默认引入了全部组件，可删除不使用的组件，可减少打包体积

## CSS
和element一致，使用[scss](https://sass-lang.com/)



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
import axios from '@/plugins/axios'

const url = '/todo'

// 待办事项服务接口
export default {
  // 分页获取
  list(params) {
    return axios.get(url, { params })
  },
  // 新建
  create(params) {
    return axios.post(url, params)
  },
  // 获取详情
  show(id) {
    return axios.get(url + '/' + id)
  },
  // 更新
  update(id, params) {
    return axios.put(url + '/' + id, params)
  },
  // 删除
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