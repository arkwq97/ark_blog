<template>
    <v-app-bar
      app
      dark
      elevate-on-scroll
      scroll-target
      data-app
    >
      <v-divider vertical inset></v-divider>

      <v-toolbar-title id="topbarTitle">Ark's Blog</v-toolbar-title>
      
      <v-divider vertical inset></v-divider>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>fa-heart</v-icon>
          </v-btn>
        </template>

        <span>如果您喜欢这个blog，请点击给与鼓励</span>
      </v-tooltip>

      <v-btn icon>
        <v-icon>fa-ellipsis-v</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<style lang="scss" scoped>
#topbarTitle {
  margin-left: 10px;
  margin-right: 10px;
}
</style>

<script>
export default {
  name: 'blogTopbar'
}
</script>