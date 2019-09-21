<template>
  <div>
    <a-row type="flex" justify="center" align="middle" id="col-search">
      <a-col :xs="18" :sm="16" :md="12" :lg="8" :xl="6">
        <router-view></router-view>
      </a-col>
    </a-row>
    <Liquor msg="" />
  </div>
</template>

<script>
// @ is an alias to /src
import Liquor from "@/components/Home/Liquor.vue";

export default {
  name: "Home",
  components: {
    Liquor
  }
};
</script>

<style scoped>
#col-search{
  margin-top: 10%;
}
</style>
