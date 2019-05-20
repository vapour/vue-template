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
    this.$axios.get('/erp/common/shop', {
      globalLoading: false
    }).then(({ data: res }) => {
      console.log(res)
    })

    const fd = new FormData()
    fd.append('id', 'MGP923432424')
    this.$axios.post('/erp/order/data/globalSearch.json', fd).then(({ data: res }) => {
      console.log(res)
    })

    this.$axios.post('/erp/order/data/globalSearch.json', { id: 'MGP923432424' }).then(({ data: res }) => {
      console.log(res)
    })
  }
}
</script>
