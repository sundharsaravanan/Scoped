<template>
<div class="home">
<!-- <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="/">Scoped</a>
    </li>
  </ul>
</nav> -->
<header class="header">
  <div class="container">
    <a href="/" class="header-link">Scoped</a>
  </div>
</header>
</div>
</template>
<style scoped>
nav{
    font-family: 'Arvo', serif;
    font-size: 20px;
}
.header{
    position: fixed;
    background-color: white;
    width: 100%;
    height: 4rem;
    font-family: 'Arvo', serif;
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
}
.header-link{
  text-decoration: none;
  color: blue;
  font-weight: bold;
}
.header-link:hover{
  color: lightskyblue;
}
</style>