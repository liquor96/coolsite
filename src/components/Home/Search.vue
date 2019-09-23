<template>
  <a-input-search size="large" placeholder="输入搜索内容" @search="onSearch" id="searchdiv"/>
</template>

<script>
export default {
  name: "search",
  methods: {
    onSearch (value) {
      if( value != ""){
        this.$router.push({ path: '/searchResult', query: { q: value } })
      }
    },
  }
};
</script>

<style scope>
#searchdiv{
  background: rgba(255, 255, 255,0);
  color: #ffffff;
}
</style>