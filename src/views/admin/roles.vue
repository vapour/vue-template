<template>
  <div>角色管理22444</div>
</template>

<script>
export default {
  name: 'admin-layout',
  data() {
    return {
      name: 'vapour2'
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
