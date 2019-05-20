// 全局指令
module.exports = {
  color: {
    bind(el, binding) {
      // eslint-disable-next-line
      el.style.color = binding.value
    }
  }
}
