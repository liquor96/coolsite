<template>
  <div class="searchDiv">
    <a-input-search 
    placeholder="输入搜索内容" 
    style="width: 25%;height: 50px" 
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
    top: 0px;
    bottom: 0px;
    left:2%;
    right: 2%;
    margin: auto;
    padding: 0;
}
</style>