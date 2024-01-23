<template>

  
<div class="container">
  <Header msg="HeaderMsg"/>
  <TimeTable msg="TimeTableMsg"/>
</div>
  
</template>

<script>
import Header from './components/Header.vue';
import TimeTable from './components/TimeTable.vue';



export default {
  name: 'App',
  components: {
    Header,
    TimeTable,
}
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
</style>
