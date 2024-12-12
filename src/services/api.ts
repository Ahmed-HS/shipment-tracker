import axios from 'axios'
import { QueryClient } from '@tanstack/react-query'
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

api.interceptors.request.use((config) => {
    config.headers['x-requested-by'] = 'Bosta'
    return config
})
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false
        }
    }
})

export { api, queryClient }
