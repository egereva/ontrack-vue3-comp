<template>
    <div class="flex flex-col grow">
        <ul v-if="activities.length" class="divide-y grow">
            <ActivityItem v-for="activity in activities" :key="activity.id" :activity="activity" @delete="emit('deleteActivity', activity)" />
        </ul>

        <TheActivitiesEmptyState v-else />

        <TheActivityForm @submit="emit('createActivity', $event)" />
    </div>
</template>

<script setup>
import ActivityItem from '../components/ActivityItem.vue';
import TheActivityForm from '../components/TheActivityForm.vue';
import TheActivitiesEmptyState from '../components/TheActivitiesEmptyState.vue';
import {isActivityValid, validateActivites} from '../validators'

defineProps({
    activities: {
        required: true,
        type: Array,
        validator: validateActivites
    }
})

const emit = defineEmits({
    deleteActivity: isActivityValid,
    createActivity: isActivityValid
})
</script>
