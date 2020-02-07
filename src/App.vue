<template>
  <div id="app">
    <blog-topbar />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import blogTopbar from './components/core/BlogTopbar'

export default {
  name: 'app',
  components: {
    blogTopbar
  }
}
</script>
