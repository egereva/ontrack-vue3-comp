import {PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGHT_HOUR, SECONDS_IN_HOUR} from './constants';
import { isPageValid, isNull } from './validators';

export function normalizePageHash() {
    const page = window.location.hash.slice(1)

    if (isPageValid(page)) {
      return page
    }

    window.location.hash = PAGE_TIMELINE

    return PAGE_TIMELINE
  }

  export function normalizeSelectValue(value) {
    return isNull(value) || isNaN(value) ? value : +value
  }

  export function generateActivities() {
    return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
      id: id(),
      name,
      secondsToComplete: hours * SECONDS_IN_HOUR
    }))
  }

  export function generateTimeLineItems() {
    const timelineItems = []

    for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
        timelineItems.push({
          hour,
          activityId: null
        })
    }

    return timelineItems
  }

  export function generateActivitySelectOptions(activities) {
    return activities.map((activity) => ({ label: activity.name, value: activity.id}))
  }

  export function  id() {
    return Date.now().toString(36) + Math.random().toString().substring(2)
  }
