<template>
<div class="container">
  <div class="post">
    <h4>Posts</h4>
  </div>
<div class="posts">
    <div class="blog-card">
    <div class="img">
      <img src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="Card image" style="width:100%">
  </div>
  <div class="heading">
  <a href="">Vuex state maintance in vue js</a>
  </div>
  <div class="info-desc">
    What is state maintanance ? why we use vuex ? how to use vuex.
  </div>
</div>
  <div class="blog-card">
    <div class="img">
      <img src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="Card image" style="width:100%">
  </div>
  <div class="heading">
  <a href="">Vuex state maintance in vue js</a>
  </div>
  <div class="info-desc">
    What is state maintanance ? why we use vuex ? how to use vuex.
  </div>
</div>
<div class="blog-card">
    <div class="img">
      <img src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="Card image" style="width:100%">
  </div>
  <div class="heading">
  <a href="">Vuex state maintance in vue js</a>
  </div>
  <div class="info-desc">
    What is state maintanance ? why we use vuex ? how to use vuex.
  </div>
</div>
</div>
</div>
</template>
<style scoped>
.blog-card{
  width: 450px;
}
.post{
  text-align: left;
  margin: 20px 10px 20px 10px;
  font-family: 'Arvo', serif;
}
.heading{
    font-family: 'Arvo', serif;
    margin-top: 10px;
    font-size: 25px;
    text-align: left;
    font-weight: bold;
}
.heading>a{
  color: black;
}
.heading>a:hover{
  text-decoration: none;
  color: blue;
}
.info-desc{
  font-family: 'Arvo', serif;
  margin-top: 5px;
  font-family: 'Arvo', serif;
  font-size: 17px;
  text-align: left;
}
.posts{
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 20px;
    display: grid;
}
</style>