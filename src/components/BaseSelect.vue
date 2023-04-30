<template>
  <div class="flex gap-2">
    <BaseButton>
        <XMarkIcon class="h-8"></XMarkIcon>
    </BaseButton>
    <select class="text-2x1 w-full truncate rounded bg-gray-100 px-2">
      <option disabled value="">{{ placeholder }}</option>
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
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

defineProps({
    selected: Number,
    options: {
        type: Array,
        required: true,
        validator(options) {
            return options.every(({ value, label }) => typeof value === 'number' && typeof label === 'string')
        }
    },
    placeholder: {
        type: String,
        required: true
    }
})
</script>
