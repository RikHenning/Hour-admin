<template>
  <div>
    <NavBar />
    <RouterView v-if="selectedView" style="padding-top: headerHeight + 'px'"></RouterView>
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
      headerHeight: 0,
    };
  },
  watch: {
    $route() {
      this.selectedView = true;
    },
  },
  mounted() {
    this.setHeaderHeight();
    window.addEventListener('resize', this.setHeaderHeight);
    this.selectedView = true;
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setHeaderHeight);
  },
  methods: {
    setHeaderHeight() {
      this.$nextTick(() => {
        this.headerHeight = this.$refs.header.clientHeight;
      });
    },
  },
};
</script>

<style>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
</style>