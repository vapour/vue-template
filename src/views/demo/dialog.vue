<template>
  <div class="about">
    <h1>el-dialog使用方法</h1>
    <el-button @click="showDialog1">普通</el-button>
    <el-button @click="showDialog1WithData">传递数据</el-button>
    <hr />
    <el-button @click="showDialog2">可缓存</el-button>
    <el-button @click="removeDialog2">删除缓存</el-button>
  </div>
</template>

<script>
import DialogDemo1 from './dialog/demo1.vue'
import DialogDemo2 from './dialog/demo2.vue'

export default {
  methods: {
    showDialog1() {
      this.helper.modal.open(DialogDemo1).then((result) => {
        this.$message({
          message: '确定',
          type: 'success'
        })
        console.log('result ok', result)
      }, (err) => {
        this.$message({
          message: '关闭'
        })
        console.log('cancel', err)
      })
    },
    showDialog1WithData() {
      this.helper.modal.open(DialogDemo1, {
        /*
        // prop数据
        propsData: {
        }
        */
        data: {
          form: {
            name: '前端分享'
          }
        }
      })
    },
    showDialog2() {
      this.helper.modal.open(DialogDemo2, null, { keepAlive: true }).then((result) => {
        this.$message({
          message: '确定',
          type: 'success'
        })
        console.log('result ok', result)
      }, (err) => {
        this.$message({
          message: '关闭'
        })
        console.log('cancel', err)
      })
    },
    removeDialog2() {
      this.helper.modal.destroy(DialogDemo2.name)
    }
  }
}
</script>
