<!-- src/components/LocalStorageExample.vue -->
<template>
    <div>
      <h1>{{ message }}</h1>
      <button @click="saveToLocalStorage">Save to Local Storage</button>
      <button @click="loadFromLocalStorage">Load from Local Storage</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Hello, Local Storage!",
      };
    },
    methods: {
      saveToLocalStorage() {
        // Save data to Local Storage
        localStorage.setItem("myData", JSON.stringify(this.message));
      },
      loadFromLocalStorage() {
        // Load data from Local Storage
        const storedData = localStorage.getItem("myData");
        if (storedData) {
          this.message = JSON.parse(storedData);
        } else {
          alert("No data found in Local Storage");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your component styles go here */
  </style>
  