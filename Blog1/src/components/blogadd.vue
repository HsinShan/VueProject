<template>
  <div id="blog-add">
    <h1>New Blog Post</h1>
    <form>
       <label for="title">Blog title:</label>
       <input type="text" v-model.lazy="name" required><br>
       <label for="content">Blog content</label>
       <textarea v-model.lazy="content"></textarea>
    </form>
    <div id="preview">
        <h2>Preview</h2>
        <p>Blog title:{{name}}</p>
        <p>Blog content:</p>
        <p>{{content}}</p>
    </div>
    
  </div>
  
</template>

<script>
export default {
  data() {
      return {
        name:"",
        content:""
      }
  }
};
</script>

<style scoped>
#blog-add *{
    box-sizing: border-box;
}
#blog-add{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px;
}
input[type="text"],textarea{
    width: 100%;
    display: block;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px #ddd solid;
    margin: 20px auto;
}
</style>
