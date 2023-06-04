<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
        <XMarkIcon class="h-8"></XMarkIcon>
    </BaseButton>
    <select class="text-2x1 w-full truncate rounded bg-gray-100 px-2 py-1"
            @change="select($event.target.value)">
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
import { validateSelectOptions, isUndefinedOrNull, isSelectValueValid } from '../validators'
import { BUTTON_TYPE_NEUTRAL } from '../constants'
import {normalizeSelectValue} from '../functions'

const props = defineProps({
    selected: [Number, String],
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
  select: isSelectValueValid
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select(value) {
  emit('select', normalizeSelectValue(value))
}
</script>
