<template>
  <div class="home">
    <Header/>
    <div class="container">
      <Title title="Post"/>
      <BlogCard :blogs="blogs"/>
      <AboutMe/>
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
import AboutMe from '../components/AboutMe'

export default {
  name: "Home",
  components: {
    Header,Title,BlogCard,AboutMe,Footer,
  },
  data(){
    return {
      blogs: Blogs
    }
  }
};
</script>
