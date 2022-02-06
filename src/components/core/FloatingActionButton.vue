<template>
  <v-speed-dial
    id="fab"
    bottom
    right
    fixed
    direction="top"
    open-on-hover
    transition="slide-y-reverse-transition"
    v-bind:style="scrollUp"
  >
    <template v-slot:activator>
      <v-btn dark fab id="main-button">
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </template>
    <v-btn fab dark>
      <v-icon color="rgb(240, 101, 43)">fab fa-html5</v-icon>
    </v-btn>
    <v-btn fab dark>
      <v-icon color="rgb(25, 118, 210)">fab fa-css3</v-icon>
    </v-btn>
    <v-btn fab dark>
      <v-icon color="rgb(65, 184, 131)">fab fa-vuejs</v-icon>
    </v-btn>
    <v-btn fab dark>
      <v-icon color="rgb(252, 212, 0)">fab fa-js-square</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  name: "floatingActionButton",
  data() {
    return {
      screenHeight: "",
      scrollUp: {
        marginBottom: "0px",
      },
    };
  },
  computed: {
    isBottom: function () {
      return document.body.scrollHeight - this.screenHeight - 90;
    },
  },
  methods: {
    listenerFunction() {
      document.addEventListener("scroll", this.handleScroll, true);
    },
    // 上浮悬浮按钮
    handleScroll() {
      if (window.pageYOffset >= this.isBottom) {
        this.scrollUp.marginBottom = "90px";
      } else {
        this.scrollUp.marginBottom = "0px";
      }
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
  created() {
    this.listenerFunction();
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.listenerFunction);
  },
};
</script>

<style lang="scss" scoped>
#fab {
  transition: 0.5s;
}
#main-button {
  background-image: linear-gradient(45deg, #7a88ff, #7affaf);
}
</style>