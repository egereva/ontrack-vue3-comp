<template>
    <li class="flex flex-col gap-2 p-4">
                <div class="flex items-center gap-2">
                    <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
                        <TrashIcon class="h-8"></TrashIcon>
                    </BaseButton>
                    <span class="truncate text-x1">{{ activity.name }}</span>
                </div>
                <div>
                    <BaseSelect class="font-mono"
                                placeholder="h:mm"
                                :selected="activity.secondsToComplete || null"
                                :options="PERIOD_SELECTED_OPTIONS"
                                @select="emit('setSecondsToComlete', $event || 0)"/>
                </div>
            </li>
</template>

<script setup>
import BaseSelect from '../components/BaseSelect.vue';
import BaseButton from '../components/BaseButton.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { PERIOD_SELECTED_OPTIONS, BUTTON_TYPE_DANGER } from '../constants'
import { isActivityValid, isUndefined, isNumber } from '../validators'

const emit = defineEmits({
    delete: isUndefined,
    setSecondsToComlete: isNumber
})

defineProps({
    activity: {
        required: true,
        type: Object,
        validator: isActivityValid
    }
})
</script>
