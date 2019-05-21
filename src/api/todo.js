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
