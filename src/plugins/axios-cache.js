import axios from 'axios'
import LCU from 'lru-cache'

const adapter = axios.defaults.adapter

export default {
  create () {
    const cache = new LCU({max:100})
    const getUri = this.buildURL

    return function axiosAdapterCache (config) {
      const {method, forceUpdate} = config
      const uri = getUri(config)

      if (method === 'get' && config.cache) {
        let responsePromise = cache.get(uri)
        if (!responsePromise || forceUpdate) {
          // 缓存不存在，或强制刷新
          responsePromise = (async () => {
            try {
              return await adapter(config)
            } catch (err) {
              cache.del(uri)
              throw err
            }
          })()
          cache.set(uri, responsePromise)
        }
        return responsePromise
      }
      return adapter(config)
    }
  },
  buildURL ({url, params}) {
    let arr = []
    Object.keys(params).forEach(key => {
      // 排除_xid选项，_xid每次不一样
      if (key !== '_xid') {
        arr.push(key + '=' + encode(params[key]))
      }
    })
    if (arr.length) {
      let search = arr.join('&')
      if (url.indexOf('?') !== -1) {
        return url + '&' + search
      } else {
        return url + '?' + search
      }
    } else {
      return url
    }
  }
}

function encode (val) {
  return encodeURIComponent(val)
    .replace(/%40/gi, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}