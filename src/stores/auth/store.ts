import { create } from 'zustand'

interface IAuth {
  accessToken: null | string
  loading: boolean
  setLoading: (load: boolean) => void
}

export const useAuthStore = create<IAuth>(set => ({
  accessToken: null,
  loading: false,
  setLoading: load => set({ loading: load }),
}))
