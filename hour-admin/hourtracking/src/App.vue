<template>
  <div>
    <NavBar />
    <div data-bs-spy="scroll" class="activePage" id="scrollspy">
      <RouterView></RouterView>
    </div>
    <!-- <HomePage /> -->
  </div>
</template>

<script>
import NavBar from './components/Header.vue';
// import HomePage from './views/HomePage.vue';
import { RouterView } from 'vue-router';

export default {
  name: "App",
  components: {
    NavBar,
    // HomePage
    RouterView
},

};
</script>

<style>
.activePage {
  position: relative;
}

.nav-bar {
  margin-bottom: 100px;
  width: 100%;
}

.router-view {
  margin-top: 100px;
  transition: padding-top 0.6s ease;
}
</style>