<template>
  <div class="home">
    <div>测试显示<span v-color="'red'">指令</span></div>
    <div>指令测试{{text | hello}}</div>
    svg图标<Icon type="js"></Icon>
    <hr />
    <router-link to="/erp">erp系统</router-link>

    <router-link to="/admin">admin系统</router-link>
  </div>
</template>

<script>
// 直接使用外部变量，例如通过<script>引入
import * as jQuery2 from 'jQuery'

export default {
  name: 'home',
  data() {
    return {
      text: '开始测试'
    }
  },
  mounted() {
    console.log('test3', jQuery2)

    this.$axios.get('/code/fresh').then(({ data: res }) => {
      console.log(res)
    })
  }
}
</script>
