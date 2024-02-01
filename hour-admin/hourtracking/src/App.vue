<template>
  <div>
    <NavBar />
  </div>
</template>

<script>
import NavBar from './components/Header.vue';

export default {
    name: "App",
    components: { NavBar }
};
</script>

<style>
#app {
  font-family: 'Dancing Script', cursive;
  font-weight: 1800;
  font-size: 1.8rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
  height: 100vh;
  background: radial-gradient(
    circle at calc(100% - 61.8%) calc(100% - 61.8%),
    #f5f2da,
    #9acca4);
}

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');

.container h1 {
  display: block;
  z-index: 1;
}
</style>
