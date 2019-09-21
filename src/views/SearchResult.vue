
<template>
  <a-tabs @change="callback" type="card">
    <a-tab-pane tab="百度" key="1">
      <iframe :src="baiduUrl" frameborder="0" class="iframecotainer"></iframe>
    </a-tab-pane>
    <a-tab-pane tab="谷歌" key="2">
      <iframe :src="googleUrl" frameborder="0" class="iframecotainer"></iframe>
    </a-tab-pane>
    <a-tab-pane tab="必应" key="3">
      <iframe :src="bingUrl" frameborder="0" class="iframecotainer"></iframe>
    </a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  name: "SearchResult",
  data() {
    return {
      baiduUrl: "https://www.baidu.com/s?wd=" + this.$route.query.q,
      bingUrl: "https://cn.bing.com/search?q=" + this.$route.query.q,
      googleUrl: "https://g.lijianm.in/search?q=" + this.$route.query.q,
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  }
};
</script>

<style scope>
.iframecotainer {
  width: 100%;
  height: calc(90vh);
}
</style>