<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
        <XMarkIcon class="h-8"></XMarkIcon>
    </BaseButton>
    <select class="text-2x1 w-full truncate rounded bg-gray-100 px-2" 
            @change="emit('select', +$event.target.value)">
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { validateSelectOptions, isUndefinedOrNull, isNumberOrNull } from '../validators'

const props = defineProps({
    selected: Number,
    options: {
        type: Array,
        required: true,
        validator: validateSelectOptions
    },
    placeholder: {
        type: String,
        required: true
    }
})

const emit = defineEmits({
  select: isNumberOrNull
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>
