<template>
  <div class="container">
    <h1>Welcome to Panda Movers!</h1>
    <p>This is the Employee Page.</p>

    <button type="button" class="btn btn-primary button-styling" data-bs-toggle="modal" data-bs-target="#exampleModal"  @click="toggleModal" style="font-size: medium;">
      {{ isModalOpen ? 'Close Availability Table Modal' : 'Open Availability Table Modal' }}
    </button>
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <AvailabilityTable @close="toggleModal" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    
    <EmployeeList :employees="employees" @remove="handleRemoveEmployee" />
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
    handleRemoveEmployee(employeeId) {
      this.employees = this.employees.filter(employee => employee.id !== employeeId);
      localStorage.setItem('employees', JSON.stringify(this.employees));
      window.location.reload();
    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
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
<style  scoped>
.container {
  position: relative;
}

.btn {
  margin: 10px;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  background-color: #9acca4;
  border: 1px solid #72a482;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #72a482;
  color: #fff;
}
</style>