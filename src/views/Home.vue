<template>
  <div class="home">
    <router-view/>
    <Liquor msg="cool site!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Liquor from '@/components/Liquor.vue'

export default {
  name: 'home',
  components: {
    Liquor
  }
}
</script>
