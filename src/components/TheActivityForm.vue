<template>
    <form class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
          @submit.prevent="submit">
        <input type="text"
               v-model="name"
               class="w-full rounded border px-4 text-xl"
               placeholder="Activity name">
        <BaseButton :disabled = "name.trim() === ''">
            <PlusIcon class="h-8" />
        </BaseButton>
    </form>
</template>
<script setup>
import BaseButton from "./BaseButton.vue";
import {PlusIcon} from "@heroicons/vue/24/outline";
import {isActivityValid} from "../validators";
import {nextTick, ref} from "vue";
import {id} from "../functions"
import{SECONDS_IN_HOUR} from "../constants"

const emit = defineEmits({
    submit: isActivityValid
})

async function submit() {
    emit('submit', {
            id: id(),
            name: name.value,
            secondsToComplete: 0 * SECONDS_IN_HOUR
        })
    name.value = ''

    await nextTick(() => {
        window.scrollTo(0, document.body.scrollHeight)
    })
}

const name = ref('')
</script>
