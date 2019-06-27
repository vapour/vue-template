<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>
        <switch-language></switch-language>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import SwitchLanguage from './components/switch-language.vue'

export default {
  name: 'admin-layout',
  components: { SwitchLanguage },
  data() {
    return {
      name: 'vapour'
    }
  }
}
</script>

<style>
.el-main{
  line-height:auto;
}
</style>
