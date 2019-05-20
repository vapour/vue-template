import Vue from 'vue'
import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui'

let counter = 0

const loading = {
  start() {
    counter += 1
    store.dispatch('showLoading')
  },
  end() {
    counter -= 1
    if (counter <= 0) {
      store.dispatch('hideLoading')
    }
  }
}
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const http = axios.create({
  // 默认post提交格式:application/json;charset=UTF-8
  // form表单提交: application/x-www-form-urlencoded;charset=UTF-8, 需要自己序列化对象qs
  /*
  transformRequest: [(data, headers) => {
    return data
  }],
  */
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // Check cross-site Access-Control
  // withCredentials: true,
  // 60秒超时, 阿里云SLB默认60秒
  timeout: 50 * 1000
})

http.interceptors.request.use((config) => {
  if (config.globalLoading !== false) {
    loading.start()
  }
  return config
}, (error) => {
  if (error.config.globalLoading !== false) {
    loading.start()
  }
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use((response) => {
  let config = response.config
  if (config.globalLoading !== false) {
    loading.end()
  }
  // 全局错误处理
  let res = response.data
  if (config.autoHandleError !== false && res.success !== true) {
    const message = (res.code ? '[' + res.code + '] ' : '') + (res.msg || '未知错误')
    Message({ type: 'error', message, duration: 8000 })
    return Promise.reject(new Error(message))
  }
  return response
}, (error) => {
  let config = error.config
  if (config.globalLoading !== false) {
    loading.end()
  }
  if (config.autoHandleError !== false) {
    const message = error.message || '未知错误'
    Message({ type: 'error', message, duration: 8000 })
  }
  return Promise.reject(error)
})

Vue.axios = http
Vue.prototype.axios = http
Vue.prototype.$axios = http

export default http
