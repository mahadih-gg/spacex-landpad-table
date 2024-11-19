import type { LandPadItemType, ViewModeType } from 'lib/types';
import { writable } from 'svelte/store';

let filterBy = writable('');
let viewMode = writable<ViewModeType>('list');
let ladingPadsData = writable<LandPadItemType[]>([]);

const handleViewMode = (value: ViewModeType) => {
  viewMode.set(value)
}

const handleFilter = (value: string) => {
  filterBy.set(value)
}

export const landingPadsStore = {
  filterBy,
  viewMode,
  ladingPadsData,
  handleViewMode,
  handleFilter
}


