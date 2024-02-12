<template>
  <div>
    <NavBar/>
        <RouterView class="activePage"></RouterView>
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
    RouterView,
  },
};
</script>

<style>
.activePage {
  margin-top: 88px;
}

</style>