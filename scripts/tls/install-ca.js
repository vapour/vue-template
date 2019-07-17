/*
 * 创建CA证书, 并导入系统
 *
 */
const os = require('os')
const path = require('path')
const spawn = require('child_process').spawn
const util = require('./util.js')

console.log('CA证书开始创建')
util.createCA()
console.log('CA证书创建成功')

switch (os.platform()) {
  case 'darwin':
    // macOS
    const child = spawn('sh', ['./cert/install-mac.sh', path.join(__dirname, './cert/f2e.ca.crt')], {cwd:__dirname})
    child.stdout.on('data', data => {
      console.log(data.toString())
    })
    break
}

// 将网站证书更新到webpack-dev-server配置中
util.updateWebpackCert()
