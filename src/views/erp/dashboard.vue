<template>
  <div class="about">
    <h1>erp控制台页面</h1>
  </div>
</template>

<script>
import apiTodo from 'api/todo'

export default {
  data() {
    return {
      name: 'vapour',
      tableData: []
    }
  },
  mounted() {
    // 分页获取
    apiTodo.list({ page: 1 }).then(({ data: res }) => {
      console.log(res.data.list)
    })

    // 获取单个
    apiTodo.show('444444').then(({ data: res }) => {
      console.log(res.data)
    })
  }
}
</script>
