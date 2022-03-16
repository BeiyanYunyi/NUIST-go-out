import { defineStore } from 'pinia';

const useDisplayBottomSheetStore = defineStore('displayBottomSheet', {
  state: () => ({ displayBottomSheet: false }),
  actions: {
    show() {
      this.displayBottomSheet = true;
    },
    hide() {
      this.displayBottomSheet = false;
    },
  },
});

export default useDisplayBottomSheetStore;
