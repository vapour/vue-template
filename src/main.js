import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'
import './plugins/vant'
import components from './components'
import filters from './utils/filters'
import directives from './utils/directives'
import helper from './utils/helper.js'
// import badjs from './utils/badjs.js'
import badjs from '@joinf-global/badjs'
const NODE_ENV = process.env.NODE_ENV
import Bridge from './utils/bridge'


// 初始化对象 防止ios覆盖原生变量
window.JoinfNative = window.JoinfNative || {}

Vue.prototype.$bridge = new Bridge('JoinfNative')

// 全局组件
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})

// 全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
// 全局指令
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key])
})

Vue.config.productionTip = NODE_ENV !== 'production'

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
  offlineLog: true,
  offlineLogAuto: true
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

// 公共方法
Vue.prototype.helper = helper

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
