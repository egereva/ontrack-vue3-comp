<template>
    <div>
        <ul class="divide-y">
            <ActivityItem v-for="activity in activities" :key="activity" :activity="activity" />
        </ul>
    </div>
</template>

<script setup>
import ActivityItem from '../components/ActivityItem.vue';
import {validateActivites} from '../validators'

defineProps({
    activities: {
        required: true,
        type: Array,
        validator: validateActivites
    }
})
</script>