import { getUserInfo } from '@/actions'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            setUser: (user) => set({ user }),
            setToken: (token) => set({ token }),
            logout: () => {
                set({ token: null })
            },
            login: async (values) => {
                try {
                    const response = await fetch(`/api/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(values)
                    })
                    const result = await response.json()
                    set({ token: result.response.access })
                    return result
                } catch (error) {
                    return error
                }
            },
            fetchProfile: async () => {
                const { token } = get()

                if (!token) return
                try {
                    const userInfo = await getUserInfo()
                    console.log('38: ', userInfo)
                    set({ user: userInfo.data })
                } catch (error) {
                    console.error('Failed to fetch profile:', error)
                    throw error
                }
            }
        }),
        {
            name: 'auth-storage'
        }
    )
)

