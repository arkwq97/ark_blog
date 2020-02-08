<template>
  <v-footer
    id="blogFooter"
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

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
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
        'fab fa-qq',
        'fab fa-weixin',
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-instagram',
      ],
    }),
  }
</script>