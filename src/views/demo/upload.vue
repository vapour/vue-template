<template>
  <div class="about">
    <h1>el-uploader按顺序上传</h1>
    <p>将auto-upload设置成false</p>
    <hr />
    <el-upload
      ref="uploader"
      action="/upload"
      multiple
      :on-change="onChange"
      :auto-upload="false">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>

export default {
  mounted() {
    // 选择文件后，自动开始上传逻辑
    this.autoUpload = this.helper.debounce(() => {
      console.log('auto start upload')
      this.upload()
    }, 50)
  },
  methods: {
    upload() {
      let uploader = this.$refs.uploader
      // 每次只上传一个，循环上传
      let uploading = uploader.uploadFiles.find(item => item.status === 'uploading')
      if (uploading) {
        // 还在上传中的文件时，返回
        // 避免并发上传
        return
      }
      let file = uploader.uploadFiles.find(item => item.status === 'pending')
      if (file) {
        file.status = 'ready'
        uploader.submit()
      } else {
        console.log('uploader complete')
      }
    },
    onChange(file) {
      let status = file.status
      switch (status) {
        case 'ready':
          file.status = 'pending'
          this.autoUpload()
          break
        case 'success':
        case 'fail':
          // 完成后，继续上传
          setTimeout(() => {
            // 这里可以不延时
            this.upload()
          }, 300)
          break
        default:
          break
      }
    }
  }
}
</script>
