import { atom } from 'nanostores'

export const isHeaderNavigationOpen = atom(false);

export function toggleHeaderNavigation() {
  isHeaderNavigationOpen.set(!isHeaderNavigationOpen.get());
}
