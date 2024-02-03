<template>
    <div>
      <h2>Employee List</h2>
      <ul>
        <li v-for="employee in employees" :key="employee.id">
          {{ employee.firstName }} {{ employee.lastName }} - Total Hours: {{ employee.totalHours }}
          <button @click="removeEmployee(employee.id)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        employees: [],
      };
    },
    mounted() {
      this.loadEmployeesFromLocalStorage();
    },
    methods: {
      loadEmployeesFromLocalStorage() {
        // Iterate through Local Storage keys and retrieve employee data
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith("employee-")) {
            const employeeDataString = localStorage.getItem(key);
            if (employeeDataString) {
              const employeeData = JSON.parse(employeeDataString);
              this.employees.push(employeeData);
            }
          }
        }
      },
      removeEmployee(employeeId) {
        // Remove employee data from Local Storage and update the list
        localStorage.removeItem(`employee-${employeeId}`);
        this.employees = this.employees.filter(employee => employee.id !== employeeId);
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  