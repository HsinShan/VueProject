<template>
  <div id="app">
    <blogadd></blogadd>
  </div>
</template>

<script>
import blogadd from './components/blogadd.vue';
export default {
  components:{
    'blogadd':blogadd
  },
  data () {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
