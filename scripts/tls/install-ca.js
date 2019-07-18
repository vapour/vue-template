/*
 * 创建CA证书, 并导入系统
 *
 */
const os = require('os')
const path = require('path')
const spawn = require('child_process').spawn
const util = require('./util.js')
const platform = os.platform()

util.initCA().then(async () => {
  // 将网站证书更新到webpack-dev-server配置中
  util.updateWebpackCert()

  const exist = await checkSystemCert(platform)
  if (exist) {
    console.log('成功')
    return
  }
  let child
  switch (platform) {
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
})

// 检测CA证书是否需要导入到系统
function checkSystemCert(platform) {
  if (platform === 'darwin') {
    return new Promise((resolve, reject) => {
      // 返回指定名称证书
      let child = spawn('security', ['find-certificate', '-c', 'f2e'])
      child.stdout.on('data', data => {
        resolve(true)
      })
      child.stderr.on('data', err => {
        resolve(false)
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      // 返回了所有证书
      let child = spawn('certmgr.exe', ['-c', '-s', 'root'], {cwd:path.join(__dirname, 'cert')})
      let txt = ''
      child.stdout.on('data', data => {
        txt += data.toString()
      })
      child.on('exit', () => {
        resolve(txt.includes('f2e') && txt.includes('https://github.com/vapour'))
      })
    })
  }
}

