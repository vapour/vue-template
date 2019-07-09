/**
 * @module utils/helper/modal
 * @desc 全局公共方法
 *
 */
import Vue from 'vue'

let cache = {}
let map = {}
const getConstructor = (mod) => {
  const name = mod.name
  if (!name) {
    throw new Error('组件名称不存在')
  }
  if (!cache[name]) {
    cache[name] = Vue.extend(mod)
  }
  return cache[name]
}
const mixin = {
  data() {
    return {
      visible: true
    }
  },
  methods: {
    resolve(result) {
      this.midResolve(result)
      this.destroy()
    },
    reject(err) {
      this.midReject(err)
      this.destroy()
    },
    destroy(force = false) {
      this.visible = false
      if (force === false && this.midKeepAlive === true) {
        // 支持缓存dialog
        return
      }
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}

export default {
  /**
   * 打开el-dialog
   * @param {Object} mod vue组件对象
   * @param {Object} [options.propsData] props对象
   * @param {Object} [options.data] data对象
   * @param {Object} [options.parent] 继承关系, 需要在el-dialog内使用$store时设置 parent:this
   * @param {Boolean} [config.keepAlive=false] 缓存组件
   * @param {Boolean} [config.forceUpdate=false] 缓存组件, 刷新data, props
   * @return {Promise}
   *
   */
  open(mod, options = {}, { keepAlive = false, forceUpdate = false } = {}) {
    if (options === null) {
      options = {}
    }
    if (keepAlive) {
      let cacheInstance = map[mod.name]
      if (cacheInstance) {
        return new Promise((resolve, reject) => {
          // const mergeOptions = Vue.util.mergeOptions
          // 重置data, props
          if (forceUpdate && options.data) {
            Object.assign(cacheInstance.$data, options.data)
          }
          if (forceUpdate && options.propsData) {
            Object.assign(cacheInstance.$props, options.propsData)
          }
          cacheInstance.visible = true
          cacheInstance.midResolve = resolve
          cacheInstance.midReject = reject
        })
      }
    }
    if (options.mixins) {
      options.mixins.push(mixin)
    } else {
      options.mixins = [mixin]
    }
    const Constructor = getConstructor(mod)
    let instance = new Constructor(options)

    // $mount()如果没有提供 elementOrSelector 参数，模板将被渲染为文档之外的的元素
    // 并且你必须使用原生 DOM API 把它插入文档中
    // 这个方法返回实例自身，因而可以链式调用其它实例方法。
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)

    if (keepAlive) {
      // 当前组件可缓存，需要手动清除
      instance.midKeepAlive = true
      map[mod.name] = instance
    }

    return new Promise((resolve, reject) => {
      instance.midResolve = resolve
      instance.midReject = reject
    })
  },
  /**
   * 删除缓存指定对象
   * @param {String} name 组件名称
   * @return {Void}
   *
   */
  destroy(name) {
    let instance = map[name]
    if (instance) {
      // 强制销毁, 忽略keepAlive
      instance.destroy(true)
      delete map[name]
    }
  }
}
