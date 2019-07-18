const fs = require('fs')
const path = require('path')
const forge = require('node-forge')
const axios = require('axios')

const config = require('../../vue.config.js')
// 读取webpackDevServerPath
require('webpack-dev-server/package.json')

const caCertPath = path.join(__dirname, './cert/f2e.ca.crt')
const caKeyPath = path.join(__dirname, './cert/f2e.ca.key.pem')


const pki = forge.pki

exports.createCA = function() {
  
  console.log('CA证书开始创建')
  const keys = pki.rsa.generateKeyPair(2046)
  const cert = pki.createCertificate()
  cert.publicKey = keys.publicKey
  cert.serialNumber = new Date().getTime() + ''
  // 证书有效期
  cert.validity.notBefore = new Date()
  cert.validity.notBefore.setFullYear(cert.validity.notBefore.getFullYear() - 5)
  cert.validity.notAfter = new Date()
  cert.validity.notAfter.setFullYear(cert.validity.notAfter.getFullYear() + 20)

  const attrs = [{
    name: 'commonName',
    value: 'f2e'
  }, {
    name: 'countryName',
    value: 'CN'
  }, {
    shortName: 'ST',
    value: 'ZheJiang'
  }, {
    name: 'localityName',
    value: 'HangZhou'
  }, {
    name: 'organizationName',
    value: 'f2e'
  }, {
    shortName: 'OU',
    value: 'https://github.com/vapour'
  }]
  cert.setSubject(attrs)
  cert.setIssuer(attrs)
  cert.setExtensions([{
    name: 'basicConstraints',
    critical: true,
    cA: true
  }, {
    name: 'keyUsage',
    critical: true,
    keyCertSign: true
  }, {
    name: 'subjectKeyIdentifier'
  }])

  // self-sign certificate
  cert.sign(keys.privateKey, forge.md.sha256.create())

  const certPem = pki.certificateToPem(cert)
  const keyPem = pki.privateKeyToPem(keys.privateKey)

  fs.writeFileSync(caCertPath, certPem)
  fs.writeFileSync(caKeyPath, keyPem)
  console.log('CA证书创建成功')
}

exports.initCA = async function () {
  try {
    // 如果证书已经存在，直接返回
    fs.accessSync(caCertPath, fs.F_OK)
    fs.accessSync(caKeyPath, fs.F_OK)
    console.log('CA证书已经存在')
    return
  } catch (e) {
  }
  console.log('CA证书开始获取')
  await getRemoteFile('https://raw.githubusercontent.com/vapour/vue-template/master/scripts/tls/cert/f2e.ca.crt', caCertPath)
  await getRemoteFile('https://raw.githubusercontent.com/vapour/vue-template/master/scripts/tls/cert/f2e.ca.key.pem', caKeyPath)
  console.log('CA证书获取完成')
}

let createFakeCertificateByDomain = exports.createFakeCertificateByDomain = function (domain) {
  const caKeyPem = fs.readFileSync(caKeyPath)
  const caCertPem = fs.readFileSync(caCertPath)
  caCert = pki.certificateFromPem(caCertPem)
  caKey = pki.privateKeyFromPem(caKeyPem)

  const keys = pki.rsa.generateKeyPair(2046)
  const cert = pki.createCertificate()
  cert.publicKey = keys.publicKey

  cert.serialNumber = new Date().getTime() + ''
  cert.validity.notBefore = new Date()
  cert.validity.notBefore.setFullYear(cert.validity.notBefore.getFullYear() - 1)
  cert.validity.notAfter = new Date()
  cert.validity.notAfter.setFullYear(cert.validity.notAfter.getFullYear() + 3)
  const attrs = [{
    name: 'commonName',
    value: domain
  }, {
    name: 'countryName',
    value: 'CN'
  }, {
    shortName: 'ST',
    value: 'ZheJiang'
  }, {
    name: 'localityName',
    value: 'HangZhou'
  }, {
    name: 'organizationName',
    value: 'f2e'
  }, {
    shortName: 'OU',
    value: 'https://github.com/vapour'
  }]

  cert.setIssuer(caCert.subject.attributes)
  cert.setSubject(attrs)

  cert.setExtensions([{
    name: 'basicConstraints',
    critical: true,
    cA: false
  }, {
    name: 'keyUsage',
    critical: true,
    digitalSignature: true,
    contentCommitment: true,
    keyEncipherment: true,
    dataEncipherment: true,
    keyAgreement: true,
    keyCertSign: true,
    cRLSign: true,
    encipherOnly: true,
    decipherOnly: true
  }, {
    name: 'subjectAltName',
    altNames: [{
      type: 2,
      value: domain
    }]
  }, {
    name: 'subjectKeyIdentifier'
  }, {
    name: 'extKeyUsage',
    serverAuth: true,
    clientAuth: true,
    codeSigning: true,
    emailProtection: true,
    timeStamping: true
  }, {
    name: 'authorityKeyIdentifier'
  }])
  cert.sign(caKey, forge.md.sha256.create())

  return {
    key: keys.privateKey,
    cert: cert
  }
}

exports.updateWebpackCert = function () {
  const host = config.devServer.host || 'localhost'

  console.log(`开始生成证书: ${host}`)
  const {key, cert} = createFakeCertificateByDomain(host)
  const certPem = pki.certificateToPem(cert)
  const keyPem = pki.privateKeyToPem(key)

  console.log('证书生成成功')
  // 获取webpack-dev-server模块路径
  const webpackDevServerPath = getWebpackDevServerPath()
  // 更新默认证书文件
  fs.writeFileSync(path.join(webpackDevServerPath, './ssl/server.pem'), keyPem + certPem)
  console.log('证书更新成功')

  function getWebpackDevServerPath() {
    const cache = require.cache
    const name = Object.keys(cache).find(key => key.includes('webpack-dev-server' + path.sep + 'package.json'))
    return path.dirname(cache[name].filename)
  }
}

// 读取远程文件
function getRemoteFile(url, filePath) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      responseType: 'stream'
    }).then(response => {
      let stream = fs.createWriteStream(filePath)
      stream.on('close', resolve)
      response.data.pipe(stream)
    }, reject)
  })
}

