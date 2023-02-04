import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import type { CartStateInterface, LoginStateInterface, UserLoginInterface } from './type';

type PersistStore<T> = (config: StateCreator<T>, options: PersistOptions<T>) => StateCreator<T>;

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
            const value = cartItem.cart + step;
            const newCartItem = { ...cartItem, cart: value };
            return newCartItem;
          }
          return cartItem;
        });
        set({ cartState: newCartState.filter((cartItem) => cartItem.cart !== 0) });
      },
    }),
    { name: 'cart-store' }
  )
);

const useLoginState = create<LoginStateInterface>(
  (persist as PersistStore<LoginStateInterface>)(
    (set) => ({
      user: null,

      // loading: false,

      error: null,

      getUserLoginData: async (formData) => {
        // set({ loading: true });
        const options = {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(formData),
        };
        try {
          const response = await fetch('https://dummyjson.com/auth/login', options);
          if (!response.ok) throw new Error('Authentication error');
          const user = (await response.json()) as UserLoginInterface;
          set({ user });
        } catch (err) {
          set({ error: (err as Error).message });
        }
        // finally {
        //   set({ loading: false });
        // }
      },
      clearUserLoginData: () => set({ user: null }),
    }),
    { name: 'login-store' }
  )
);

export { useCartState, useLoginState };
