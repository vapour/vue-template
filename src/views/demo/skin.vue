<template>
  <div>
    <h2>换肤测试</h2>
    <el-button @click="hello">默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>
import replacer from 'webpack-theme-color-replacer/client'
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
export default {
  methods: {
    hello() {
      replacer.changer.changeColor({
        newColors: [
          ...forElementUI.getElementUISeries('#D938D6')
        ]
      }, Promise).then(() => {
        console.log('Theme colors changed!')
      })
    }
  }
}
</script>
