<template>
  <div class="searchDiv">
    <a-input-search 
    placeholder="输入搜索内容" 
    style="width: 400px;height: 50px" 
    @search="onSearch" 
    class="searchInput" />
  </div>
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
.searchDiv {
    position: absolute;
    height: 50%;
    left:0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}
</style>