import type { LandPadItemType, ViewModeType } from 'lib/types';
import { get, writable } from 'svelte/store';

let filterBy = writable('');
let viewMode = writable<ViewModeType>('list');
let initialLadingPadsData = writable<LandPadItemType[]>([]);
let ladingPadsData = writable<LandPadItemType[]>([]);

initialLadingPadsData.subscribe((newData) => {
  console.log("load")
  ladingPadsData.set(newData)
});

filterBy.subscribe((filterValue) => {

  console.log(filterValue)

  const filteredData = filterValue
    ? get(initialLadingPadsData).filter((item) => item.status === filterValue)
    : get(initialLadingPadsData);
  ladingPadsData.set(filteredData);
});

const handleViewMode = (value: ViewModeType) => {
  viewMode.set(value);
}

const handleFilter = (value: string) => {
  filterBy.set(value);
}

export const landingPadsStore = {
  filterBy,
  viewMode,
  initialLadingPadsData,
  ladingPadsData,
  handleViewMode,
  handleFilter
}


