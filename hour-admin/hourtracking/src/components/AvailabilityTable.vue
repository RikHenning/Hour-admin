  <template>
    <div>
      <div class="dayAvailability">
        <div class="weekColumn">
          <div class="week">Week</div>
          <div class="total-hours">
            Total Hours: {{ calculateTotalHours }}
          </div>
        </div>
  
        <!-- Additional divs with gaps -->
        
  
        <!-- Individual day details -->
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
  
      <!-- Additional divs with gaps -->
      <div class="gap"></div>
      <div class="employeeDetails">
        <div class="totalHours">
          <label for="totalHours">Total Hours:</label>
          <input type="number" v-model="totalHours" id="totalHours" />
        </div>
        <label for="firstName">First Name:</label>
        <input type="text" v-model="firstName" id="firstName" />
        <label for="lastName">Last Name:</label>
        <input type="text" v-model="lastName" id="lastName" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'availabilityTable',
    data() {
      return {
        selectedDate: new Date().toISOString().substr(0, 10),
        week: "",
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
        name: "",
      };
    },
    methods: {
        updateWeek() {
        const date = new Date(this.selectedDate);
        const options = { weekday: "long" };
        this.week = new Intl.DateTimeFormat("en-UK", options).format(date);
      },
      calculateTotalHours() {
        let total = 0;
        for (const day in this.times) {
          const start = new Date(`2000-01-01 ${this.times[day].start}`);
          const finish = new Date(`2000-01-01 ${this.times[day].finish}`);
          total += (finish - start) / (1000 * 60 * 60);
        }
        return total.toFixed(2);
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
