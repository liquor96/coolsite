
<template>
  <a-tabs @change="callback" type="card">
    <a-tab-pane tab="百度" key="1">{{this.$route.query.q}}</a-tab-pane>
    <a-tab-pane tab="谷歌" key="2">
        <iframe src="https://www.baidu.com/s?wd=你好" frameborder="0" width="100%" height="600px"></iframe>
    </a-tab-pane>
    <a-tab-pane tab="必应" key="3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  name: 'SearchResult',
  data () {
    return {
    }
  },
  methods: {
    callback (key) {
      console.log(key)
    },
  },
}
</script>

<style scope>

</style>