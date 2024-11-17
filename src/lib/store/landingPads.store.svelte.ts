import type { LandPadItemType, ViewModeType } from 'lib/types';

export function landingPadsStore() {

  let filterBy = $state('');
  let viewMode = $state<ViewModeType>('list');
  let ladingPadsData = $state<LandPadItemType[]>([]);

  console.log("store >>>", viewMode, ladingPadsData)

  return {
    get filterBy() {
      return filterBy;
    },
    set filterBy(newValue: string) {
      filterBy = newValue;
    },

    get viewMode() {
      return viewMode;
    },
    set viewMode(newValue: ViewModeType) {
      viewMode = newValue;
    },

    get ladingPadsData() {
      return ladingPadsData;
    },
    set ladingPadsData(newValue: LandPadItemType[]) {
      ladingPadsData = newValue;
    },
  }
}


