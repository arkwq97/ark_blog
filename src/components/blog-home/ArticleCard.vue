<template>
  <v-col xs="12" md="4" @click="toArticle(articleInfo.id)">
    <v-hover v-slot:default="{ hover }">
      <v-card class="mx-auto" dark height="350" href="#!">
        <v-img :src="require('@/assets/background/sky.jpg')" height="100%">
          <v-expand-transition>
            <div
              v-if="hover"
              class="
                d-flex
                transition-fast-in-fast-out
                darken-2
                v-card--reveal
                display-3
                white--text
              "
            >
              <span style="font-size: 15px; line-height: 20px">{{
                articleInfo.introduction
              }}</span>
            </div>
          </v-expand-transition>

          <v-layout fill-height wrap style="text-align: right !important" ma-0>
            <v-flex xs12>
              <v-chip
                label
                class="mx-0 mb-2 text-uppercase"
                color="primary"
                text-color="white"
                small
              >
                {{ articleInfo.type }}
              </v-chip>

              <h2 class="title mb-2">
                {{ articleInfo.title }}
              </h2>

              <div class="caption">
                {{ articleInfo.author }}
              </div>

              <div class="caption">
                {{ articleInfo.addTime }}
              </div>
              <div class="caption">
                <v-icon small left>far fa-eye</v-icon>
                {{ articleInfo.viewCount }}
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
  opacity: 0.7;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
  

<script>
export default {
  name: "articleCard",
  props: {
    articleInfo: Object,
  },
  methods: {
    toArticle: function (articleId) {
      this.$router.push(`/article/${articleId}`);
    },
  },
};
</script>