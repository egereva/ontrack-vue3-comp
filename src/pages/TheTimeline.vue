<template>
    <div class="mt-7">
        <ul>
            <TimelineItem  v-for="timelineItem in timelineItems" :key="timelineItem.hour" 
            :timelineItem="timelineItem"
            :activities="activities" 
            :activitySelectOptions="activitySelectOptions"
            @selectActivity="emit('setTimelineItemActivity', {timelineItem, activity: $event})"/>
        </ul>
    </div>
</template>

<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { 
    validateTimelineItems, 
    validateSelectOptions, 
    validateActivites, 
    isTimelineItemValid, 
    isActivityValid,
    isNull 
} from '../validators'
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
    },
    activities: {
        requered: true,
        type: Array,
        validator: validateActivites
    }
})

const emit = defineEmits({
    setTimelineItemActivity({timelineItem, activity}) {
        return [
            isTimelineItemValid(timelineItem),
            isNull(activity) || isActivityValid(activity)
        ].every(Boolean)
    }
})
</script>