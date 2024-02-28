<template>
  <h2>Employee List</h2>
  <div class="container">
    <table class="custom-table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Total Hours</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.firstName }} {{ employee.lastName }}</td>
          <td>{{ employee.totalHours }}</td>
          <td>
            <button @click="removeEmployee(employee.id)" class="btn btn-danger removeButton">Remove</button>
            <button @click="editEmployee(employee.id)" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'EmployeeList',
  props: {
    employees: Array,
    employeeToEdit: Object,
  },
  emits: ['remove', 'edit'],
  methods: {
    removeEmployee(employeeId) {
      this.$emit('remove', employeeId);
    },
    editEmployee(employeeId) {
      const employeeToEdit = this.employees.find(employee => employee.id === employeeId);
      this.$emit('edit', employeeToEdit);
    },
  },
  watch: { 
    employeeToEdit: {
      handler(newVal) {
        if (newVal) {
          this.firstName = newVal.firstName;
          this.lastName = newVal.lastName;
          this.totalHours = newVal.totalHours;
          this.times = { ...newVal.times };
        }
      },
      immediate: true,
    },
  },
};
</script>


<style scoped>
.custom-table {
  background-color: transparent;
  border-width: 3px;
  border-color: black;
  border-style: solid;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 15px;
}

td {
  background-color: transparent;
  border-width: 2px;
  border-color: black;
  border-style: solid;
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px
} 
.container {
  display: flex;
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
}
.removeButton {
  margin-right: 6px;
}
</style>
