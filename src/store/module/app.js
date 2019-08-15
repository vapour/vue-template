import Cookies from 'js-cookie'
import { getLanguage } from '@/lang/index'
let loadingTimer

export default {
  state: {
    // 全局加载
    loading: false,
    // 默认语言
    language: getLanguage()
  },
  mutations: {
    showLoading(state) {
      state.loading = true
    },
    hideLoading(state) {
      state.loading = false
    },
    setLanguage(state, language) {
      state.language = language
      Cookies.set('language', language, {
        // 设置在主域, 多应用共享
        domain: '.joinf.com',
        // 过期时间1年
        expires: 365
      })
    }
  },
  actions: {
    showLoading(context) {
      if (loadingTimer) {
        clearTimeout(loadingTimer)
      }
      context.commit('showLoading')
    },
    hideLoading(context) {
      if (loadingTimer) {
        clearTimeout(loadingTimer)
      }
      loadingTimer = setTimeout(() => {
        context.commit('hideLoading')
      }, 300)
    }
  }
}
