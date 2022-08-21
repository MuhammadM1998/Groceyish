import { defineStore, acceptHMRUpdate } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => {
    return { products: [] };
  },

  actions: {
    addProduct(product, quantity) {
      const newProduct = { ...product, quantity };
      this.products.push(newProduct);
      this.updateLocalStorage();
    },

    removeProduct(product) {
      const productIndex = this.products.indexOf(product);
      if (productIndex > -1) this.products.splice(productIndex, 1);
      this.updateLocalStorage();
    },

    updateLocalStorage() {
      localStorage.setItem('products-list', JSON.stringify(this.products));
    },

    loadLocalStorage() {
      if (localStorage.getItem('products-list'))
        this.products = JSON.parse(localStorage.getItem('products-list'));
    },
  },

  getters: {
    productsList: (state) => state.products,
    productsNumber: (state) => state.products.length,
    totalPrice: (state) => {
      let totalAmount = 0;
      state.products.forEach((product) => {
        const unitPrice = product.attributes.Price_Current;
        const total = unitPrice * product.quantity;
        totalAmount += total;
      });
      return totalAmount;
    },
  },
});

// Vite HMR
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
