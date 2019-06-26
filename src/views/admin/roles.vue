<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="date"
      :placeholder="$t('test.calender')">
    </el-date-picker>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: 'admin-layout',
  data() {
    return {
      value1: null
    }
  }
}
</script>
