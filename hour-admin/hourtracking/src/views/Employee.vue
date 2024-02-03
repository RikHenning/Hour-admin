<template>
    <div class="container">
      <h1>Welcome to Panda Movers!</h1>
      <p>This is the Employee Page.</p>
  
      <button @click="toggleModal" class="button-styling" style="font-size: medium;">
        {{ isModalOpen ? 'Close Availability Table Modal' : 'Open Availability Table Modal' }}
      </button>
  
      <vue-final-modal v-if="isModalOpen" @close="closeModal">
        <AvailabilityTable @close="closeModal" />
      </vue-final-modal>
  
        <LocalStorageExample />
        <EmployeeList />
    </div>
  </template>
  
  <script>
  import AvailabilityTable from '@/components/AvailabilityTable.vue';
  import LocalStorageExample from "@/components/LocalStorageExample.vue";
  import EmployeeList from "@/components/EmployeeList.vue";
  
  export default {
    name: 'EmployeePage',
    components: { 
        AvailabilityTable,
        LocalStorageExample,
        EmployeeList,
     },
    data() {
      return {
        isModalOpen: false,
        employees: [],
      };
    },
    mounted() {
      this.loadEmployeesFromLocalStorage();
    },
    methods: {
      loadEmployeesFromLocalStorage() {
        try {
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
        } catch (error) {
          console.error('Error loading employees from Local Storage:', error);
        }
      },
      removeEmployee(employeeId) {
        localStorage.removeItem(`employee-${employeeId}`);
        this.employees = this.employees.filter(employee => employee.id !== employeeId);
      },
      toggleModal() {
        this.isModalOpen = !this.isModalOpen;
      },
      closeModal() {
        this.isModalOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  