<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timelineItems="timelineItems" :activitySelectOptions="activitySelectOptions"/>
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" @delete-activity="deleteActivity"/>
    <TheProgress  v-show="currentPage === PAGE_PROGRESS"/>
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)"/>
</template>

<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import { normalizePageHash, generateTimeLineItems, generateActivitySelectOptions } from './functions'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'

const timelineItems = generateTimeLineItems()

const activities = ['Copding', 'Reading', 'Traning']

const currentPage = ref(normalizePageHash())

const activitySelectOptions = generateActivitySelectOptions(activities)

function goTo(page) {
  currentPage.value = page
}

function deleteActivity(activity) {
  activities.splice(activities.indexOf(activity), 1)
}
</script>