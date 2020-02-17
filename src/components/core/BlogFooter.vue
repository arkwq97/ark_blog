<template>
  <v-footer
    id="blogFooter"
    app
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="py-2">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>


        <v-tooltip
          top 
          v-for="faIcon in icons"
          :key="faIcon.link"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              class="mx-4"
              dark
              icon
            >
              <v-icon size="24px" v-on="on">{{ faIcon.link }}</v-icon>
            </v-btn>
          </template>
          <span>{{ faIcon.name }}</span>
        </v-tooltip>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} - <strong>Ark</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style lang="scss" scoped>
#blogFooter {
  position: relative;
}
</style>

<script>
  export default {
    data: () => ({
      icons: [
        {link: 'fab fa-qq', name: 'QQ'},
        {link: 'fab fa-weixin', name: 'WeChat'},
        {link: 'fab fa-facebook', name: 'Facebook'},
        {link: 'fab fa-twitter', name: 'Twitter'},
        {link: 'fab fa-instagram', name: 'Instagram'},
        {link: 'fab fa-github', name: 'GitHub'},
      ],
    }),
  }
</script>