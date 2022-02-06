<template>
  <div class="blogHome">
    <v-container class="homeContent" grid-list-xl>
      <home-banner :bannerInfo="blogInfo.bannerInfo" />
      <floating-action-button />
      <article-list :articleList="blogInfo.articleList" />
    </v-container>
  </div>
</template>

<style lang="scss" scope>
.blogHome {
  min-height: 100%;
  width: 100%;
  padding-top: 84px;
  background-image: url("../assets/background/homebg.jpg");
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
}
.homeContent {
  min-height: 100%;
}
</style>

<script>
import homeBanner from "../components/blog-home/HomeBanner";
import articleList from "../components/blog-home/ArticleList";
import floatingActionButton from "../components/core/FloatingActionButton";

export default {
  name: "home",
  data: () => ({
    blogInfo: {
      bannerInfo: {
        title: "Ark's Blog",
        content: "人们总说时间会改变一切，但事实上你得自己来",
      },
      articleList: [
        {
          id: 2,
          type: "vue",
          title: "vue入门",
          author: "Arkwq",
          introduction:
            "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介",
          addTime: "1997-09-06",
          viewCount: 0,
        },
        {
          id: 3,
          type: "vue",
          title: "vue入门",
          author: "Arkwq",
          content:
            "vuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevue",
          introduction:
            "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介",
          addTime: "1997-09-06",
          updateTime: "1997-09-06",
          viewCount: 0,
        },
      ],
    },
  }),
  components: {
    homeBanner,
    articleList,
    floatingActionButton,
  },
};
</script>