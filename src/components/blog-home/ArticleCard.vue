<template>
  <v-col
    xs="12"
    md="4"
  >
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        dark
        height="350"
        href="#!"
      >
        <v-img
          :src="require('@/assets/background/sky.jpg')"
          height="100%"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text"
            >
              <span style="font-size: 15px; line-height: 20px;">{{ article.introduction }}</span>
            </div>
          </v-expand-transition>

          <v-layout
            fill-height
            wrap
            style="text-align: right!important;"
            ma-0
          >
            <v-flex xs12>
              <v-chip
                label
                class="mx-0 mb-2 text-uppercase"
                color="primary"
                text-color="white"
                small
              >
                {{ article.type }}
              </v-chip>

              <h3 class="title font-weight-bold mb-2">
                {{ article.title }}
              </h3>

              <div class="caption">
                {{ article.author }}
              </div>

              <div class="caption">
                {{ article.addTime }}
              </div>
            </v-flex>
          </v-layout>
        </v-img>
      </v-card>
    </v-hover>
  </v-col>
</template>

<style lang="scss" scoped>
.v-card--reveal {
  padding: 0px 15px 0 15px;
  align-items: center;
  bottom: 0;
  justify-content: left;
  opacity: .7;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
  

<script>
export default {
  name: 'articleCard',
  data: () => ({
    article: {
      id: 1,
      type: 'vue',
      title: 'vue入门',
      author: 'Arkwq',
      content: 'vuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevue',
      introduction: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
      addTime: '2016-1-23',
      updateTime: '2016-1-23',
      viewCount: 0,
    }
  })
}
</script>