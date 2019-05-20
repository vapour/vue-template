<template>
  <div id="app" v-loading="loading">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    loading() {
      return this.$store.state.app.loading
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
