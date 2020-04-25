<template>
<div class="home">
<header class="header">
  <div class="container header-content">
    <router-link to="/" class="header-link">Scoped</router-link>
    <router-link to="/blog" :class="getSelected">Posts</router-link>
  </div>
</header>
</div>
</template>
<script>
export default {
  props:{
    isSelected:{
      type: Boolean,
      default: false
    }
  },
  computed:{
    getSelected(){
      return this.isSelected ? 'post-link selected' : 'post-link not-selected'; 
    }
  }
}
</script>
<style scoped>
.header{
    background-color: white;
    width: 100%;
    height: 4rem;
    font-family: 'Arvo', serif;
    display: flex;
    align-items: center;
    text-align: left;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);
    background-color: #fff;
}
.header-link{
  text-decoration: none;
  color: blue;
  font-weight: bold;
  font-size: 20px;
}
.header-link:hover{
  color: lightskyblue;
}
.header-content{
  display: flex;
  justify-content: space-between;
}
.post-link{
  font-weight: bold;
  font-size: 18px;
}
.selected{
    color: lightskyblue;
}
.not-selected{
    color: blue;
}
</style>