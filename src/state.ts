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
}));

export default useCartState;
