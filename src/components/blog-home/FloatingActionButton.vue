<template>
  <v-speed-dial
    id='fab'
    bottom
    right
    fixed
    direction="top"
    open-on-hover
    transition="slide-y-reverse-transition"
    v-bind:style="scrollUp"
  > 
    <template v-slot:activator>
      <v-btn
        color="blue darken-2"
        dark
        fab
      >
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      dark
      small
      color="green"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="indigo"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="red"
    >
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  name: 'floatingActionButton',
  data() {
    return {
      screenHeight: '',
      scrollUp: {
        marginBottom: '0px'
      },
    }
  },
  computed: {
    isBottom: function() {
      return document.body.scrollHeight - this.screenHeight - 90
    }
  },
  methods: {
    listenerFunction() {
      document.addEventListener('scroll', this.handleScroll, true)
    },
    // 上浮悬浮按钮
    handleScroll () {
      if(window.pageYOffset >= this.isBottom) {
        this.scrollUp.marginBottom = '90px'
      } else {
        this.scrollUp.marginBottom = '0px'
      }
      window.console.log(window.pageYOffset)
      window.console.log(this.isBottom)
      window.console.log(this.scrollUp.marginBottom)
    },
  },
  mounted() {
    this.screenHeight = document.body.clientHeight;
    // 监听窗口高度变化
    window.onresize = () => {
      return (() => {
        this.screenHeight = document.body.clientHeight;
      })();
    };
  },
  created () {
    this.listenerFunction()
  },
  beforeDestroy () {
    document.removeEventListener("scroll", this.listenerFunction)
  },
}
</script>

<style lang="scss" scoped>
#fab {
  transition: 0.5s;
}
</style>