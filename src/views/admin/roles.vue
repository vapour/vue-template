<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="date"
      :placeholder="$t('test.calender')">
    </el-date-picker>
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
