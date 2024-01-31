<template>
  <div>
    <div class="container">
      <HeaderMsg msg="HeaderMsg"/>
      <TimeTable msg="TimeTableMsg"/>
      
    </div>
    <h1 v-if="showWelcome">Welcome to the Home page!</h1>
  </div>
</template>


<script>
import HeaderMsg from '../components/Header.vue';
import TimeTable from '../components/TimeTable.vue';



export default {
  name: 'App',
  components: {
    HeaderMsg,
    TimeTable,
  },
  data() {
    return {
      showWelcome: true, 
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container h1 {
  display: block;
  z-index: 1;
}
</style>
