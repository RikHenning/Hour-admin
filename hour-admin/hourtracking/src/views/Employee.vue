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

    <EmployeeList :employees="employees" />
  </div>
</template>

<script>
import AvailabilityTable from '@/components/AvailabilityTable.vue';
import EmployeeList from "@/components/EmployeeList.vue";
import mitt from 'mitt'; // Add this import statement

// Create Mitt event emitter instance
const emitter = mitt();

export default {
  name: 'EmployeePage',
  components: { 
    AvailabilityTable,
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
    async closeModal() {
      this.isModalOpen = false;
    },
    handleEmployeeCreated(employeeData) {
      this.employees.push(employeeData);
    },
  },
  watch: {
    employees: {
      handler(newEmployees) {
        // Do something when employees array changes
        console.log('Employees changed:', newEmployees);
      },
      deep: true,
    },
  },
  created() {
  // Listen for the 'employee-created' event emitted by AvailabilityTable
  emitter.on('employee-created', this.handleEmployeeCreated);
  // Listen for the 'close' event emitted by AvailabilityTable to close the modal
  emitter.on('close', this.closeModal);
},
beforeUnmount() {
  // Remove event listeners to prevent memory leaks
  emitter.off('employee-created', this.handleEmployeeCreated);
  emitter.off('close', this.closeModal);
},

};
</script>
