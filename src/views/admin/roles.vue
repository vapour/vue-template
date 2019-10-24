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
    <hr />
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label">
          <el-tooltip :content="$t('tab.basic')" placement="top" effect="dark">
            <i class="el-icon-date"></i> 我的行程
          </el-tooltip>
        </span>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <el-tooltip :enterable="false" :open-delay="300" :content="$t('tab.address')" placement="top" effect="dark">
            <i class="el-icon-date"></i> 我的行程
          </el-tooltip>
        </span>
        消息中心
      </el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
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
