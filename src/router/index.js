import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from '../contents/blogs.js';
import Blog from '../views/Blog';
import Posts from '../views/Posts';
Vue.use(VueRouter);

const blogRoutes = Blogs.map((blog) => {
  var route =  {
    path: '/blog/'+blog.id,
    name: blog.id,
    component: Blog,
    props: {
      blog: blog
    }
  }
  return route
})
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: Posts
  },
  ...blogRoutes
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
