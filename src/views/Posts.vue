<template>
  <div class="home">
    <Header :isSelected="true"/>
    <div class="container">
      <Title title="Post"/>
      <BlogCard :blogs="blogs"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header';
import Title from '../components/SectionTitle'
import BlogCard from '../components/BlogCard';
import Blogs from '../contents/blogs.js';
import Footer from '../components/Footer';

export default {
  name: "Home",
  components: {
    Header,Title,BlogCard,Footer,
  },
  data(){
    return {
      blogs: Blogs
    }
  }
};
</script>
