<template>
  <ul class="blogs">
    <li class="blog-card" v-for="blog in blogs" :key="blog.id">
      <router-link :to="'/blog/'+blog.id">
        <div class="image-placeholder">
          <img :src="getImage(blog.id)" alt="post thumbnail" style="width:100%">
        </div>
        <div class="heading">{{blog.title}}</div>
        <div class="info-desc">{{blog.info}}</div>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props:{
    blogs:{
      type: Array,
      required: true,
    }
  },
  methods:{
    getImage(id) {
      return require('../assets/images/'+id+'/thumbnail.jpg')
    }
  }
}
</script>>
<style scoped>
@media (min-width: 768px){
  .blogs{
    list-style-type: none;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    display: grid;
    padding: 0px;
  }
  .blog-card{
    width: 30rem;
  }
}
.blogs{
    list-style-type: none;
    padding: 0px;
}
.blog-card{
    width: 30rem;
    margin-bottom: 2rem;
}
.post{
  text-align: left;
  margin: 20px 10px 20px 10px;
}
.heading{
    margin-top: 10px;
    font-size: 25px;
    text-align: left;
    font-weight: bold;
}
.blog-card>a{
  color: black;
  text-decoration: none;
}
.blog-card>a:hover .heading{
  color: blue;
}
.info-desc{
  margin-top: 5px;
  font-size: 17px;
  text-align: left;
  color: #767676;
}
img{
  height: 18rem;
}
</style>