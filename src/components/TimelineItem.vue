<template>
    <li class="relative fle flex-col gap-2 border-t border-gray-200 py-10 px-4">
        <TimelineHour :hour="timelineItem.hour"/>

        <BaseSelect :selected="timelineItem.activityId" 
                    :options="activitySelectOptions" placeholder="Rest" 
                    @select="selectActivity"/>
    </li>
</template>

<script setup>
import BaseSelect from '../components/BaseSelect.vue'
import TimelineHour from '../components/TimelineHour.vue'   
import { 
    isActivityValid, 
    isNull, 
    isTimelineItemValid, 
    validateActivites, 
    validateSelectOptions } from '../validators'
const props = defineProps({
    timelineItem: {
        type: Object,
        requered: true,
        validator: isTimelineItemValid
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
    selectActivity(activity) {
        return isNull(activity) || isActivityValid
    }
})


function selectActivity(id) {
    emit('selectActivity', 
    props.activities.find((activity) => activity.id === id) || null)
}
</script>