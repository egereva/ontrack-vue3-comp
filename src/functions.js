import { PAGE_TIMELINE, NAV_ITEMS } from './constants';

export function normalizePageHash() {
    const hash = window.location.hash.slice(1)
  
    if (Object.keys(NAV_ITEMS).includes(hash)) {
      return hash
    }
  
    window.location.hash = PAGE_TIMELINE
  
    return PAGE_TIMELINE
  }