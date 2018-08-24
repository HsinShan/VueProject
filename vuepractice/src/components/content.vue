<template>
  <div class="ninjas" >
    <div v-for="item in ninjas" :key="item.id" @click="item.show=!item.show">
        <h3>{{item.name}}</h3>
        <p v-show="item.show">{{item.speciality}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ]
    };
  },
  
};
</script>

<style scoped>
.ninjas{
    width: 90%;
    margin:100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.ninjas div{
    width:300px;
    height:200px;
    padding-top: 100px;
    border: 1px rgb(68, 96, 148) solid;
    margin: 30px;
    text-align: center;
    cursor: pointer;
    transition: all 50ms;
    border-radius: 10px;
}
.ninjas div:hover{
    transform: scale(1.2);
    background: rgb(138, 46, 46);
    color: #FFF;
}
</style>
