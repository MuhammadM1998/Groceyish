import { acceptHMRUpdate, defineStore } from 'pinia';

export const useCart = defineStore('cart', {
  state: () => ({}),

  getters: {},

  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCart, import.meta.hot));
}
