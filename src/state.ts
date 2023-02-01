/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import type { CartStateInterface } from './type';

const useCartState = create<CartStateInterface>((set, get) => ({
  cartState: [],

  addCartItem: (product) => {
    const { cartState } = get();
    set({ cartState: [...cartState, { ...product, cart: 1 }] });
  },

  removeCartItem: (productId) => {
    const { cartState } = get();
    set({ cartState: cartState.filter((cartItem) => cartItem.id !== productId) });
  },

  getCartParams: () => {
    const { cartState } = get();
    return cartState.reduce(
      (acc, item) => {
        acc.cartSize += item.cart;
        acc.cartSum += item.cart * item.price;
        return acc;
      },
      { cartSize: 0, cartSum: 0 }
    );
  },

  isCartItem: (productId) => {
    const { cartState } = get();
    return cartState.some((cartItem) => cartItem.id === productId);
  },

  getCartItemNumber: (productId) => {
    const { cartState } = get();
    const currentItem = cartState.find((cartItem) => cartItem.id === productId);
    return currentItem ? currentItem.cart : 0;
  },

  updateCartItemNumber: (productId, step) => {
    const { cartState } = get();
    const newCartState = cartState.map((cartItem) => {
      if (cartItem.id === productId) {
        cartItem.cart += step;
      }
      return cartItem;
    });
    set({ cartState: newCartState.filter((cartItem) => cartItem.cart !== 0) });
  },
}));

export default useCartState;
