<template>
    <button
      :class="`${typeClasses[type]} rounded p-3 disabled:cursor-not-allowed disabled:opacity-50`"
    >
      <slot></slot>
    </button>
</template>

<script setup>
import { isButtonTypeValid } from '../validators'

defineProps({
  type: {
    default: BUTTON_TYPE_NEUTRAL,
    tyupe: String,
    validator: isButtonTypeValid
  }
})

</script>

<script>
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL } from '../constants'

const typeClasses = {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
  [BUTTON_TYPE_DANGER]: 'bg-red-500 p-3 enabled:hover:bg-red-600 text-white'
}
</script>