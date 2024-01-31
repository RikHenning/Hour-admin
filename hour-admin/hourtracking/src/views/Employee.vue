<template>
    <div class="container">
      <HeaderMsg msg="Hello Panda Movers!"/>
      <TimeTable msg="TimeTableMsg"/>
      <h1>Welcome to the Employee page!</h1>
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
}
}
</script>