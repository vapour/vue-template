<template>
  <div class="mpage">
    <h3>角色管理</h3>
    <p>使用角色管理人员权限</p>
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
    color:red;
  }
  p{
    color:grey;
  }
}
</style>
