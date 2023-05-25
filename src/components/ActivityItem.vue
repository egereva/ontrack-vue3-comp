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
                                :selected="secondsToCompete"
                                :options="PERIOD_SELECTED_OPTIONS"
                                @select="secondsToCompete= $event"/>
                </div>
            </li>
</template>

<script setup>
import {ref} from 'vue'
import BaseSelect from '../components/BaseSelect.vue';
import BaseButton from '../components/BaseButton.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import {PERIOD_SELECTED_OPTIONS, BUTTON_TYPE_DANGER} from '../constants'
import {isActivityValid, isUndefined } from '../validators'

const emit = defineEmits({
    delete: isUndefined
})

defineProps({
    activity: {
        required: true,
        type: Object,
        validator: isActivityValid
    }
})

const secondsToCompete = ref(null)
</script>
