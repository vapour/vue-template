<template>
  <div>角色管理</div>
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
