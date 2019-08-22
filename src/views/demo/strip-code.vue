<template>
  <div>
    <h2>开发阶段code</h2>
    <pre style="text-align:left">
      /* dev-block-start */
      // 打包到线上时，会被自动删除
      alert('这里的代码只在开发阶段运行')
      /* dev-block-end */
    </pre>
  </div>
</template>

<script>
export default {
  created() {
    /* dev-block-start */
    this.$msgbox('只在开发阶段运行')
    /* dev-block-end */
  }
}
</script>
