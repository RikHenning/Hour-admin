<template>
  <div>
    <Header />
    <router-link to="/invoicingPage">Go to MyComponent</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
import Header from './components/Header.vue';



export default {
    name: "App",
    components: { Header }
};
</script>
