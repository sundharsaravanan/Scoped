<template>
  <div id="app">
<!--    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <transition name="slide">
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  font-family: 'Arvo', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*{
  box-sizing: border-box;
}
.image-placeholder{
  overflow: hidden;
  line-height: 0; 
}
.mouse{
  cursor: pointer;
}
h2{
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: bold;
}
.slide-enter-active,
.slide-leave-active{
  transition: opacity 0.2s ease-in-out, transform 0.2s ease;
}
.slide-enter-active{
  transition-delay: 0.2s;
}
.slide-enter,
.slide-leave-to{
  opacity: 0;
  transform: translateX(100%);
}
.slide-enter-to,
.slide-leave{
  opacity: 1;
  transform: translateX(0px);
}
</style>
