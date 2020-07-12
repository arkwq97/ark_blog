<template>
  <div id="blogHome">
    <v-container class="homeContent" grid-list-xl>
      
      <v-card id="homeBanner">
        <v-img
          height="400"
          src="../assets/background/ark.jpg"
        >
          <v-layout
            fill-height
            align-center
            pa-3
          >
            <v-flex
              xs12
              md7
              offset-md4
            >
              <h1 class="display-3 font-weight-light" style="color: white; margin: 15px">
                {{banner.title}}
              </h1>

              <div class="subheading text-uppercase pl-4 mb-5" style="color: white; font-size: 20px">
                {{banner.content}}
              </div>
            </v-flex>
          </v-layout>
        </v-img>
      </v-card>
     

      <v-row>
        <article-card
          v-for = "i in 10"
          :key = "i"
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
    </v-container>
  </div>
</template>

<style lang="scss" scope>
#blogHome {
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
import articleCard from '../components/blog-home/ArticleCard'

export default {
  name: 'home',
  data: () => ({
    banner: {
      title: 'ARK的博客',
      content: '我想呼风唤雨',
    },
    page: 1,
  }),
  components: {
    articleCard,
  }
}
</script>
