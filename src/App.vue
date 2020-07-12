<template>
  <v-app id="app">
    <blog-topbar />
    <router-view />
    <blog-footer />
  </v-app>
</template>

<style lang="scss">
html,body{
    height:100%;
    width: 100%;

}
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
import blogFooter from './components/core/BlogFooter'

export default {
  name: 'app',
  components: {
    blogTopbar,
    blogFooter
  }
}
</script>
