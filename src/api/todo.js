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
