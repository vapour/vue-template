/**
 * @module utils/helper
 * @desc 全局公共方法
 *
 */
module.exports = {
  /**
   * 将对象转换为字符串
   * @param {object} json 对象
   * @return {string}
   * @example this.helper.toJson({age:23, name:'vapour'})
   */
  toJson(json) {
    return JSON.stringify(json)
  }
}
