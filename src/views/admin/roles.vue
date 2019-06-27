<template>
  <div class="mpage">
    <h3>角色管理</h3>
    <p>测试sass</p>
  </div>
</template>

<script>
export default {
  name: 'admin-layout',
  data() {
    return {
      name: 'vapour'
    }
  },
  mounted() {
    console.log(this.helper.toJson({ name: 'vapour', desc: 'pddd' }))
  }
}
</script>

<style lang="scss">
.mpage{
  h3{
    color:blue;
  }
  p{
    color:#999;
  }
}
</style>
