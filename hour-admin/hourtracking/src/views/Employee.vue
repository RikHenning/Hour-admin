<template>
    <div class="container">
        <h1>Welcome to Panda Movers!</h1>
        <p>This is the Employee Page.</p>
    </div> 
    <AvailabilityTable />
</template>
    
<script>
import AvailabilityTable from '@/components/AvailabilityTable.vue';

export default {
    name: 'EmployeePage',
    components: { AvailabilityTable }
}
</script>