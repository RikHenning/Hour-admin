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
  name: 'EmployeeList',
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    this.loadEmployeesFromLocalStorage();
    window.addEventListener('storage', this.handleStorageChange);
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.handleStorageChange);
  },
  methods: {
    loadEmployeesFromLocalStorage() {
      try {
        const employeesString = localStorage.getItem('employees');
        if (employeesString) {
          this.employees = JSON.parse(employeesString);
        }
      } catch (error) {
        console.error('Error loading employees from Local Storage:', error);
      }
    },
    handleStorageChange(event) {
      if (event.key === 'employees') {
        this.loadEmployeesFromLocalStorage();
      }
    },
  },
};
</script>


<style scoped>

</style>
