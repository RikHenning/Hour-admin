<template>

  
    <div class="container">
      <HeaderMsg msg="Hello Panda Movers!"/>
      <TimeTable msg="TimeTableMsg"/>
      <h1>Welcome to the Invoicing page!</h1>
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
    
    