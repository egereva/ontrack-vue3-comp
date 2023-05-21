<template>
    <div class="mt-7">
        <ul>
            <TimelineItem  v-for="timelineItem in timelineItems" :key="timelineItem.hour" 
            :timelineItem="timelineItem" 
            :activitySelectOptions="activitySelectOptions"/>
        </ul>
    </div>
</template>

<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { validateTimelineItems, validateSelectOptions } from '../validators'
defineProps({
    timelineItems: {
        required: true,
        type: Array,
        validator: validateTimelineItems
    },
    activitySelectOptions: {
        type: Array,
        requered: true,
        validator: validateSelectOptions
    }
})
</script>