  <template>
    <div class="createNewEmployee">
      <div class="dayAvailability">
        <div class="weekColumn">
          <div class="week">Week</div>
          <div class="empty">
            
          </div>
        </div>
        <div v-for="day in days" :key="day" class="dayColumns">
          <div class="day">{{ day }}</div>
          <div class="time-section">
            <label>Start Time:</label>
            <input type="time" v-model="times[day].start" step="900" />
            <label>Finish Time:</label>
            <input type="time" v-model="times[day].finish" step="900" />
          </div>
        </div>
      </div>
      <div class="gap"></div>
      <div class="employeeDetails">
        <div class="totalHours">
          <label for="totalHours">Total Hours:</label>
          <input type="number" v-model="totalHours" id="totalHours" required />
        </div>
        <label for="firstName">First Name:</label>
        <input type="text" v-model="firstName" id="firstName" required />
        <label for="lastName">Last Name:</label>
        <input type="text" v-model="lastName" id="lastName" required />
      </div>
      <button class='button-styling' type="submit" @click="submitAndCloseModal">Create new Employee</button>
    </div>
  </template>
  
  <script>
export default {
  name: 'availabilityTable',
  props: {
    mode: String,
    employeeToEdit: Object,
  },
  data() {
    return {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      times: {
        Mon: { start: "07:30", finish: "18:30" },
        Tue: { start: "07:30", finish: "18:30" },
        Wed: { start: "07:30", finish: "18:30" },
        Thu: { start: "07:30", finish: "18:30" },
        Fri: { start: "07:30", finish: "18:30" },
        Sat: { start: "07:30", finish: "18:30" },
        Sun: { start: "07:30", finish: "18:30" },
      },
      totalHours: 40,
      firstName: "",
      lastName: "",
    };
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
  methods: {
    submitAndCloseModal() {
      const id = Date.now();
      const employeeData = {
        id,
        firstName: this.firstName,
        lastName: this.lastName,
        totalHours: this.totalHours,
        times: { ...this.times },
      };
      let employees = JSON.parse(localStorage.getItem('employees')) || [];
      employees.push(employeeData);
      console.log(employees);
      localStorage.setItem('employees', JSON.stringify(employees));
      this.$emit('employee-created');    
      this.$emit('close');
      window.location.reload();
    },
  },
};
</script>

  
 <style scoped>
.dayAvailability {
  display: flex;
  flex-wrap: wrap;
}

.weekColumn,
.dayColumns,
.employeeDetails {
  flex: 1;
  border: 3px solid #006400; /* Dark green border color */
  border-radius: 16px;
  padding: 10px;
  margin: 0 5px 10px 0; /* Adjust margin for spacing between divs */
}

.week {
  text-align: center;
}

.day, .week {
  text-align: center;
  border-bottom: 3px solid #006400; /* Border between day and time-section */
  padding-bottom: 10px; /* Add padding for spacing between the border and content */
}

.time-section {
  font-size: small;
  font-weight: bold; 
}

.total-hours {
  font-size: medium;
  font-weight: bold; 
}

.gap {
  height: 10px;
  flex: 1;
  margin: 0 5px 10px 0; /* Adjust margin for spacing between divs */
}

.employeeDetails label,
.employeeDetails input {
  margin-bottom: 4px;
}

.employeeDetails label:nth-child(3),
.employeeDetails input:nth-child(4) {
  margin-top: 4px;
}
</style>
