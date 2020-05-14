<template>
  <div class="home">
    <!-- <div>测试显示<span v-color="'red'">指令</span></div>
    <div>指令测试{{text | hello}}</div>
    svg图标<Icon type="js"></Icon>
    <hr />
    <ul>
      <li><router-link to="/demo">测试用例</router-link></li>
      <li><router-link to="/erp">erp系统</router-link></li>
      <li><router-link to="/admin">admin系统</router-link></li>
    </ul> -->
    <div class="container">
      <img src="~assets/img/reg-top.png" alt="">
      <van-form class="form" @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[
            {required: true, message: '请填写用户名'},
            {pattern: LOGIN_NAME_REG, message: '格式错误'}
          ]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[
            {required: true, message: '请填写密码'},
            {pattern: PWD_REG, message: '格式错误'}
          ]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { LOGIN_NAME_REG, PWD_REG } from '@/utils/constants'
export default {
  name: 'home',
  data() {
    return {
      username: '',
      password: '',
      LOGIN_NAME_REG,
      PWD_REG
    }
  },
  mounted() {
  },
  methods: {
    onSubmit() {
      this.$axios.get('/code/fresh').then(({ data: res }) => {
        console.log('登录成功,接口返回：', res)
        this.$router.push('/home')
      }).catch((err) => {
        console.log('接口调用失败：', err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  height: 100vh;
  background: #ebf2f6;
  div.container{
    img {
      width: 100%;
    }
    .form{
      background: #fff;
      margin: 0 10px;
      padding: 20px;
      position: relative;
      top: -120px;
      box-shadow: 2px 2px 4px #c0d8e8;
      border-radius: 8px;
    }
  }
}
</style>
