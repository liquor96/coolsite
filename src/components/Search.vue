<template>
  <a-input-search
    placeholder="输入搜索内容"
    @search="onSearch"
    class="searchInput"
  />
</template>

<script>
export default {
  name: "search",
  props: {
    msg: String
  }
};
</script>

<style scope>
.searchInput {
  position: absolute;
  height: 50px;
  width: 25%;
  top: 30%;
  left: 5%;
  right: 5%;
  margin: auto;
  padding: 0;
}
</style>