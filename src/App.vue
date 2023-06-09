<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timelineItems="timelineItems" :activitySelectOptions="activitySelectOptions"
                :activities="activities"
                @set-timeline-item-activity="setTimelineItemActivity"/>
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES"
                   :activities="activities"
                   @delete-activity="deleteActivity"
                   @create-activity="createActivity" 
                  @set-activity-seconds-to-complete="setActivitySecondsToComplete" />
    <TheProgress  v-show="currentPage === PAGE_PROGRESS"/>
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)"/>
</template>

<script setup>
import { ref, computed } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import {
  normalizePageHash,
  generateTimeLineItems,
  generateActivitySelectOptions,
  generateActivities
} from './functions'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'

const timelineItems = ref(generateTimeLineItems())

const activities = ref(generateActivities())

const currentPage = ref(normalizePageHash())

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

function goTo(page) {
  currentPage.value = page
}

function deleteActivity(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function createActivity (activity) {
  activities.value.push(activity)
}

function setTimelineItemActivity({timelineItem, activity}) {
  timelineItem.activityId = activity?.id || null
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}
</script>
