import { defineStore } from 'pinia';

const useDisplayNavMenuStore = defineStore('displayNavMenu', {
  state: () => ({ displayNavMenu: false }),
  actions: {
    show() {
      this.displayNavMenu = true;
    },
    hide() {
      this.displayNavMenu = false;
    },
    switch() {
      this.displayNavMenu = !this.displayNavMenu;
    },
  },
});

export default useDisplayNavMenuStore;
