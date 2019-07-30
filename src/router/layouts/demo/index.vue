<template>
  <el-container style="height:100%;">
    <el-aside width="200px">
      <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" style="height:100%;">
        <el-menu-item index="1">
          <router-link slot="title" :to="{name: 'dialog'}">el-dialog</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link slot="title" :to="{name: 'upload'}">el-uploader按序上传</router-link>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main style="line-height:1.8;">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'demo-layout'
}
</script>

<style>
.el-menu-item a{
  color:#fff;
}
</style>
