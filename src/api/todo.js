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
   * @param {object} params  请求参数
   * @param {number} [params.page] 当前页数
   * @param {number} params.pageSize 分页大小
   * @return {Promise}
   */
  list(params) {
    return axios.get(url, { params })
  },
  /**
   * 新建数据
   * @param {object} params  请求参数
   * @param {string} params.name 事项名称
   * @param {string} params.content 详细描述
   * @return {Promise}
   */
  create(params) {
    return axios.post(url, params)
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
   * @param {object} params  更新数据对象
   * @param {string} params.name 事项名称
   * @param {string} params.content 详细描述
   * @return {Promise}
   */
  update(id, params) {
    return axios.put(url + '/' + id, params)
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
