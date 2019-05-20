let loadingTimer

export default {
  state: {
    // 全局加载
    loading: false
  },
  mutations: {
    showLoading(state) {
      state.loading = true
    },
    hideLoading(state) {
      state.loading = false
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
