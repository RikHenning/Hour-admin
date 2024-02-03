<template>
  <div>
    <NavBar />
    <RouterView v-if="selectedView"></RouterView>
    <div v-else>
      <h1>Welcome to Panda Movers!</h1>
      <p>This is the default message.</p>
    </div>
  </div>
</template>

<script>
import NavBar from './components/Header.vue';
import { RouterView } from 'vue-router';

export default {
  name: "App",
  components: { 
    NavBar, 
    RouterView,
  },
  data() {
    return {
      selectedView: false,
    };
  },
  watch: {
    $route() {
      this.selectedView = true;
    },
  },
};
</script>
