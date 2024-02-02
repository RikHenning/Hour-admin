  <template>
    <div>
      <div class="header-row">
        <!-- Week display -->
        <div class="week">Week {{number}}</div>
  
        <!-- Days display -->
        <div class="days">
          <div v-for="day in days" :key="day" class="day">
            {{ day }}
          </div>
        </div>
      </div>
  
      <!-- Two rows of divs -->
      <div class="content-row">
        <div class="time-section">
          <!-- Total hours display -->
          <div class="total-hours">
            Total Hours: {{ calculateTotalHours }}
          </div>
        </div>
  
        <!-- Additional divs with gaps -->
        <div class="additional-div">
          <label for="totalHours">Total Hours:</label>
          <input type="number" v-model="totalHours" id="totalHours" />
        </div>
  
        <!-- Individual day details -->
        <div v-for="day in days" :key="day" class="day-details">
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
      <div class="additional-div">
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" />
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
        this.week = new Intl.DateTimeFormat("en-US", options).format(date);
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
  .header-row,
  .week {
    display: flex;
    justify-content: space-between;
    border: 1px solid #006400; /* Dark green border color */
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .days {
    display: flex;
  }
  
  .day {
    flex: 1;
    text-align: center;
  }
  
  .content-row {
    display: flex;
    justify-content: space-between;
  }
  
  .day-details {
    flex: 1;
    margin-left: 10px;
  }
  
  
  .row,
  .day,
  .time-section,
  .total-hours,
  .additional-div {
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .gap {
    height: 10px;
  }
  </style>
  