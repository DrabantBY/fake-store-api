import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LoginStateInterface, PersistStore, UserLoginInterface } from '../types';

const useLoginState = create<LoginStateInterface>(
  (persist as PersistStore<LoginStateInterface>)(
    (set, get) => ({
      user: null,
      error: null,
      loading: false,
      getUserLoginData: async (formData) => {
        set({ loading: true });
        if (get().error) set({ error: null });

        const options = {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(formData),
        };

        try {
          const response = await fetch('https://dummyjson.com/auth/login', options);
          if (!response.ok) throw new Error(`Authentication error`);
          const user = (await response.json()) as UserLoginInterface;
          set({ user });
        } catch (err) {
          set({ error: (err as Error).message });
        } finally {
          set({ loading: false });
        }
      },
      clearUserLoginData: () => set({ user: null }),
      isUser: () => Boolean(get().user),
      removeError: () => set({ error: null }),
    }),
    { name: 'login-store' }
  )
);

export default useLoginState;
