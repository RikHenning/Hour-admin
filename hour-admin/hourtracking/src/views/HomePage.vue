<template>
  <div>
    <div class="container">
      <NavBar />
      <TimeTable msg="TimeTableMsg"/>
      
    </div>
    <h1>Welcome to Panda Movers!</h1>
    <p>This is the Home Page.</p>
  </div>
</template>


<script>
import NavBar from '../components/Header.vue';
import TimeTable from '../components/TimeTable.vue';



export default {
  name: 'App',
  components: {
    NavBar,
    TimeTable,
  },
}
</script>


