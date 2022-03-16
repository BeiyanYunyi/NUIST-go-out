import { defineStore } from 'pinia';

const useDisplayHeaderStore = defineStore('displayHeader', {
  state: () => ({ displayHeader: true }),
  actions: {
    show() {
      this.displayHeader = true;
    },
    hide() {
      this.displayHeader = false;
    },
  },
});

export default useDisplayHeaderStore;
