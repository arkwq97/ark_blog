<template>
  <div id="theArticle">
    <v-container id="article" grid-list-xl>
      <div id="title">
        <h1>{{ article.title }}</h1>
      </div>
      <div id="content" v-html="compiledMarkdown">{{ compiledMarkdown }}</div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
#theArticle {
  min-height: 100%;
  width: 100%;
  padding-top: 84px;
  background-image: url("../assets/background/homebg.jpg");
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
}
#article {
  min-height: 200px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 25px;
  box-shadow: 2px 2px 5px #5a5a5a;
  line-height: 2;
  padding: 30px 50px 30px 50px;
}
#title {
  text-align: center;
}
#content {
  text-align: left;
}
</style>

<script>
import marked from "marked";

var rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

export default {
  name: "theArticle",
  data: () => ({
    article: {
      id: 2,
      type: "vue",
      title: "vue入门",
      author: "Arkwq",
      content:
        "# JavaScript之闭包 \r ### 概念 \r 先举例，因为JavaScript的变量的读取是逐层向外查找的所以可以写出这样的代码：\r # JavaScript之闭包 \r ### 概念 \r 先举例，因为JavaScript的变量的读取是逐层向外查找的所以可以写出这样的代码：\r # JavaScript之闭包 \r ### 概念 \r 先举例，因为JavaScript的变量的读取是逐层向外查找的所以可以写出这样的代码：\r # JavaScript之闭包 \r ### 概念 \r 先举例，因为JavaScript的变量的读取是逐层向外查找的所以可以写出这样的代码：\r # JavaScript之闭包 \r ### 概念 \r 先举例，因为JavaScript的变量的读取是逐层向外查找的所以可以写出这样的代码：\r # JavaScript之闭包 \r ### 概念 \r 先举例，因为JavaScript的变量的读取是逐层向外查找的所以可以写出这样的代码：\r # JavaScript之闭包 \r ### 概念 \r 先举例，因为JavaScript的变量的读取是逐层向外查找的所以可以写出这样的代码：\r # JavaScript之闭包 \r ### 概念 \r 先举例，因为JavaScript的变量的读取是逐层向外查找的所以可以写出这样的代码：\r # JavaScript之闭包 \r ### 概念 \r 先举例，因为JavaScript的变量的读取是逐层向外查找的所以可以写出这样的代码：",
      introduction:
        "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介",
      addTime: "1997-09-06",
      updateTime: "1997-09-06",
      viewCount: 0,
    },
  }),
  computed: {
    compiledMarkdown: function () {
      return marked(this.article.content, { sanitize: true });
    },
  },
};
</script>
