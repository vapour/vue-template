// https://github.com/nuysoft/Mock/wiki/Getting-Started
// https://github.com/nuysoft/Mock/wiki/Syntax-Specification
const Mock = require('mockjs')

module.exports = [{
  // 获取验证码
  url: '/code/fresh',
  method: 'get',
  callback (req, res) {
    res.json(success(Mock.mock({code:/\d{4}/})))
  }
}, {
  // 获取列表
  url: '/todo',
  method: 'get',
  callback (req, res) {
    res.json(success(Mock.mock({
      totalItems: 240,
      'list|10': [{
        'id': '@guid',
        'name|+1': '@ctitle'
      }]
    })))
  }
}, {
  // 新建
  url: '/todo',
  method: 'post',
  callback (req, res) {
    res.json(success(Mock.mock({
      'id': '@guid'
    })))
  }
}, {
  // 获取
  url: '/todo/:id',
  method: 'get',
  callback (req, res) {
    res.json(success(Mock.mock({
      'id': '@guid',
      'name': '@ctitle',
      'content': '@cparagraph(3)'
    })))
  }
}, {
  // 修改
  url: '/todo/:id',
  method: 'put',
  callback (req, res) {
    res.json(success({}))
  }
}, {
  // 删除
  url: '/todo/:id',
  method: 'delete',
  callback (req, res) {
    res.json(success({}))
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
