<template>
  <a-input-search size="large" placeholder="输入搜索内容" @search="onSearch"/>
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

</style>