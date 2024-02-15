<template>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example" class="container">
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
      const employeesString = localStorage.getItem('employees');
      if (employeesString) {
        this.employees = JSON.parse(employeesString);
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
    reloadPage() {
      window.location.reload();
    },
  },
  created() {
  this.$emit('employee-created', this.loadEmployeesFromLocalStorage);
  this.$emit('close', this.closeModal, this.reloadPage);
  },

};
</script>
<style>
.container {
  position: relative;
}
</style>