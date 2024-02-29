<template>
    <div class="edit-employee" v-if="employee">
        <h2>Edit Employee</h2>
        <div class="form-group">
            <label for="editFirstName">First Name:</label>
            <input type="text" id="editFirstName" v-model="editedEmployee.firstName">
        </div>
        <div class="form-group">
            <label for="editLastName">Last Name:</label>
            <input type="text" id="editLastName" v-model="editedEmployee.lastName">
        </div>
        <div class="form-group">
            <label for="editTotalHours">Total Hours:</label>
            <input type="number" id="editTotalHours" v-model="editedEmployee.totalHours">
        </div>
        <div class="dayAvailability">
            <div class="weekColumn">
                <div class="week">Week</div>
                <div class="empty"></div>
            </div>
        <div v-for="day in days" :key="day" class="dayColumns">
            <div class="day">{{ day }}</div>
                <div class="time-section">
                    <label>Start Time:</label>
                    <input type="time" :id="'editStartTime_' + day" v-model="editedEmployee.times[day].start" step="900" />
                    <label>Finish Time:</label>
                    <input type="time" :id="'editFinishTime_' + day" v-model="editedEmployee.times[day].finish" step="900" />
                </div>
            </div>
        </div>
        <button @click="saveChanges" class="btn btn-primary">Save Changes</button>
    </div>
</template>

<script>
export default {
    name: 'EditEmployee',
    props: {
        employee: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            editedEmployee: {}
        };
    },
    mounted() {
        this.editedEmployee = { ...this.employee };
        console.log(this.employee)
    },
    methods: {
        saveChanges() {
            this.$emit('save', this.editedEmployee);
        }
    }
};
</script>


<style scoped>
.form-group {
margin-bottom: 15px;
}
</style>
