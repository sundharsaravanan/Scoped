<template>
<div>
<ul class="blog-header">
    <li class="header-content">
        <div class="post-info">{{blog.date}} - <a href="https://twitter.com/SundharSaravan2" target="_blank">Sundhar Saravanan</a></div>
        <div class="heading">
            {{blog.title}}
        </div>
        <div class="info-desc">
            {{blog.info}}
        </div>
    </li>
    <li class="header-img">
        <img :src="getImage(blog.id)" alt="post main"/>
    </li>
</ul>
</div>
</template>
<script>
export default {
    props:{
        blog: {
            type: Object,
            required: true
        }
    },
    methods:{
        getImage(id) {
            return require('../assets/images/'+id+'/main.jpg')
        }
  }

}
</script>
<style scoped>
ul{
    list-style-type: none;
}
@media (min-width: 768px){
    .blog-header{
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        display: grid;
        align-items: center;
        justify-items: center;
    }
    .header-content{
        margin-left: auto;
        padding: 2.4rem 5rem 2.4rem 5rem;
    }
}
img{
    width: 100%;
}
.heading{
    margin-top: 10px;
    font-size: 30px;
    text-align: left;
    font-weight: bold;
}
.info-desc{
  margin-top: 5px;
  font-family: 'Arvo', serif;
  font-size: 17px;
  text-align: left;
  color: #767676;
}
.post-info{
    font-size: 15px;
    text-align: left;
}
</style>