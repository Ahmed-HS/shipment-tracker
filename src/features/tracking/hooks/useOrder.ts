import { useQuery } from '@tanstack/react-query'
import { api } from '@services/api'
import { mapOrder } from '../model/order'
export function useOrder(trackingNumber: string) {
    return useQuery({
        enabled: trackingNumber.length > 0,
        queryKey: ['order', trackingNumber],
        queryFn: () => fetchOrder(trackingNumber)
    })
}

async function fetchOrder(trackingNumber: string) {
    const response = await api.get(`/${trackingNumber}`)
    return mapOrder(response)
}
