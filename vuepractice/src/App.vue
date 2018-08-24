<template>
  <div>
    <h1>{{title}}</h1>
    <skill></skill>
    <copy></copy>
  </div>
</template>

<script>
import Content from "./components/content.vue"
export default {
  components:{
    "skill":Content
  },
  data () {
    return {
      title:"My Vue APP"
    }
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
h1{
  width: 100%;
  text-align: center;
  color: #2c3e50;
  background: #78afe6;
  padding: 20px 0;
  margin: 0;
  position: absolute;
  top:0;
  left:0;
}
</style>
