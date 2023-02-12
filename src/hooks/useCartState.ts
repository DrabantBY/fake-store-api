import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import getDiscount from '@helpers/getDiscount';
import type { CartStateInterface, PersistStore } from '@/types';

const useCartState = create<CartStateInterface>(
  (persist as PersistStore<CartStateInterface>)(
    (set, get) => ({
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
            acc.discountSum += getDiscount(item.cart * item.price, item.discountPercentage);
            return acc;
          },
          { cartSize: 0, cartSum: 0, discountSum: 0 }
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
            const value = cartItem.cart + step;
            const newCartItem = { ...cartItem, cart: value };
            return newCartItem;
          }
          return cartItem;
        });
        set({ cartState: newCartState.filter((cartItem) => cartItem.cart !== 0) });
      },

      clearCart: () => set({ cartState: [] }),
    }),
    { name: 'cart-store' }
  )
);

export default useCartState;
