# 前端规范

## 代码风格
* [eslint:recommended](https://eslint.org/docs/rules/)
* [airbnb:legacy](https://github.com/airbnb/javascript)
* [Vue风格](https://cn.vuejs.org/v2/style-guide/)

## 目录
![Vue目录规范](https://ws3.sinaimg.cn/large/006tNc79gy1g38ru1imgkj30hb0nrq4a.jpg)

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


## el-dialog
### 普通方法
```
<template>
  <div>
    <dialog1></dialog1>
    <dialog2></dialog2>
    <dialog3></dialog3>
  </div>
</template>
```
页面中引入并初始化了所有需要的dialog，这些dialog都会运行。引起不必要的性能消耗
### 推荐方法
```
import Dialog1 from './dialog/demo1.vue'
import Dialog2 from './dialog/demo2.vue'

export default {
  methods: {
    showDialog1() {
      this.helper.modal.open(DialogDemo1).then((result) => {
        console.log('result ok', result)
      }, (err) => {
        console.log('cancel', err)
      })
    },
    showDialog1WithData() {
    	// 打开时，自定义data数据、props
      this.helper.modal.open(DialogDemo1, {
        // prop数据
        propsData: {
          title: '请确认'
        }
        data: {
          form: {
            name: '前端分享'
          }
        }
      })
    }
  }
}
```
通过helper.modal.open实现了按需加载，关闭时会主动销毁dialog。

### 使用说明
使用`helper.modal.open`打开dialog时，混入(mixin)了以下特性:

* **visible**属性，控制显示隐藏
* **resolve**和**reject**方法，支持promise
* **destroy**方法，关闭dialog时，自动销毁组件。不需要用户调用
* **keepAlive**属性，支持关闭dialog时，不销毁组件。当缓存dialog时，页面离开前需要主动调用`this.helper.modal.destroy(modName)`来销毁组件
* **forceUpdate**属性，刷新缓存组件的数据状态。适用于data/props修改后，需要缓存组件即时响应

```
// 最基本的el-dialog示例
<template>
  <el-dialog 
    title="普通dialog"
    <!-- 内置visible -->
    :visible.sync="visible"
    <!-- 内置reject -->
    @closed="reject">
    <h3>我是普通dialog</h3>
    <span slot="footer" class="dialog-footer">
      <el-button @click="reject">取 消</el-button>
      <el-button type="primary" @click="resolve">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  // 名称必须有，且全局唯一
  name: 'dialog-demo1'
}
</script>
```
详细使用方法，可查看`src/views/demo/dialog.vue`

## 打包分析
运行`npm run build`后会生成一个**dist/report.html**文件，可查看打包模块详细
![chunk-vendors.js](https://ws1.sinaimg.cn/large/006tNc79gy1g39vqloed9j31160l0grl.jpg)