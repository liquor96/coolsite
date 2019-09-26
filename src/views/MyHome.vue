<template>
  <div id="container" class="myhome"></div>
</template>

<script>
// @ is an alias to /src
import MyHome from '../components/MyHome/myhome'
export default {
  name: "MyHome",
  data(){
      return {}
  },
  mounted(){
      let self = this;
      self.myhome = new MyHome(document.getElementById('container'));
      self.myhome.init();
      self.render();
  },
  methods:{
      render(){
          this.myhome.render();
          this.myhome.controls.update()
          requestAnimationFrame(this.render);
      }
  }
}
</script>

<style scoped>
.myhome{
  position: absolute;
  height: 100vh;
  width: 100vw;
}
</style>