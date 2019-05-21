/**
 * 全局指令
 * @module utils/directives
 *
 */
module.exports = {
  color: {
    bind(el, binding) {
      // eslint-disable-next-line
      el.style.color = binding.value
    }
  }
}
