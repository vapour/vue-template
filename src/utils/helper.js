/**
 * @module utils/helper
 * @desc 全局公共方法
 *
 */
import modal from './modal.js'

export default {
  /**
   * 将对象转换为字符串
   * @param {object} json 对象
   * @return {string}
   * @example this.helper.toJson({age:23, name:'vapour'})
   */
  toJson(json) {
    return JSON.stringify(json)
  },
  debounce(func, wait, immediate) {
    let timeout
    return function delayFunc() {
      let context = this
      let args = arguments
      let later = function later() {
        timeout = null
        if (!immediate) {
          func.apply(context, args)
        }
      }
      let callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) {
        func.apply(context, args)
      }
    }
  },
  modal
}
