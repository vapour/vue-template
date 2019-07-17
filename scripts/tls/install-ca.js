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

let child
switch (os.platform()) {
  case 'darwin':
    // macOS
    child = spawn('sh', ['./cert/install-mac.sh', path.join(__dirname, './cert/f2e.ca.crt')], {cwd:__dirname})
    
    break
  case 'win32':
    child = spawn('install-win.bat', {cwd:path.join(__dirname, 'cert')})
    break
}
if (child) {
  child.stdout.on('data', data => {
    console.log('out', data.toString('utf-8'))
  })
}

// 将网站证书更新到webpack-dev-server配置中
util.updateWebpackCert()
