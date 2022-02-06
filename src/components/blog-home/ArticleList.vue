<template>
  <div>
    <v-row>
      <article-card
        v-for="articleInfo in articleList"
        :key="articleInfo.id"
        :articleInfo="articleInfo"
      />
    </v-row>
    <v-container class="max-width">
      <v-pagination
        v-model="page"
        dark
        class="my-4"
        :length="15"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
import articleCard from "./ArticleCard";

export default {
  name: "articleList",
  data: () => ({
    page: 1,
  }),
  props: {
    articleList: Array,
  },
  components: { articleCard },
};
</script>
