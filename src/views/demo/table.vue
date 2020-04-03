<template>
  <div>
    <el-table
      max-height="300"
      :data="list"
      row-key="id"
      @on-load-more="load"
      style="width: 100%">
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column prop="id" label="id">
      </el-table-column>
      <el-table-column prop="title" label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Mock from 'mockjs'
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      let { list } = Mock.mock({
        'list|50': [{
          id: '@guid',
          'title|+1': '@ctitle'
        }]
      })
      const id = Date.now()
      performance.mark(id + '-start')
      this.list.push(...list)
      this.$nextTick(() => {
        performance.mark(id + '-end')
        // 计算节点之间的精确时间，可以chrome开发工具performance选项卡中查看
        performance.measure(id, id + '-start', id + '-end')
        console.log(Date.now() - id)
      })
    }
  }
}
</script>
