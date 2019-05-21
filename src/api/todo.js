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
   * @property {object} params  请求参数
   * @property {number} [params.page] 当前页数
   * @property {number} params.pageSize 分页大小
   * @return {Promise}
   */
  list(params) {
    return axios.get(url, { params })
  },
  /**
   * 新建数据
   * @property {object} params  请求参数
   * @property {string} params.name 事项名称
   * @property {string} params.content 详细描述
   * @return {Promise}
   *
   */
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
