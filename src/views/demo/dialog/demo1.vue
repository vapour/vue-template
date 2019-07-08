<template>
  <el-dialog
    title="普通dialog"
    :visible.sync="visible"
    width="30%"
    @closed="reject">
    <h3>我是普通dialog</h3>
    <p>关闭后，当前组件会销毁</p>
    <el-form :model="form" label-width="100px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="reject">取 消</el-button>
      <el-button type="primary" @click="resolve">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'dialog-demo1',
  data() {
    return {
      form: {
        name: null,
        region: null
      }
    }
  }
}
</script>
