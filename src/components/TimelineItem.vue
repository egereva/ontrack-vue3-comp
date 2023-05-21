<template>
    <li class="relative fle flex-col gap-2 border-t border-gray-200 py-10 px-4">
        <TimelineHour :hour="timelineItem.hour"/>

        <BaseSelect :selected="selectedActivityId" 
                    :options="activitySelectOptions" placeholder="Rest" 
                    @select="selectedActivityId = $event"/>
    </li>
</template>

<script setup>
import {ref} from 'vue'
import BaseSelect from '../components/BaseSelect.vue'
import TimelineHour from '../components/TimelineHour.vue'   
import { isTimelineItemValid, validateSelectOptions } from '../validators'
defineProps({
    timelineItem: {
        type: Object,
        requered: true,
        validator: isTimelineItemValid
    },
    activitySelectOptions: {
        type: Array,
        requered: true,
        validator: validateSelectOptions
    }
})

const selectedActivityId = ref(0)
</script>