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
      localStorage.removeItem(`employee-${employeeId}`);
      this.employees = this.employees.filter(employee => employee.id !== employeeId);
    },
    handleStorageChange(event) {
      if (event.key && event.key.startsWith("employee-")) {
        this.loadEmployeesFromLocalStorage();
        // this.$emit('local-storage-updated');
      }
    },
  },
};
</script>

<style scoped>

</style>
