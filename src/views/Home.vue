<template>
  <div class="home">
    <Header/>
    <BlogCard/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import BlogCard from '../components/BlogCard.vue';

export default {
  name: "Home",
  components: {
    Header,BlogCard
  }
};
</script>
