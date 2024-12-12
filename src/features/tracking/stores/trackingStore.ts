import { create } from 'zustand'

export interface TrackingStore {
    trackingNumberQuery: string
    setTrackingNumberQuery: (trackingNumber: string) => void
}

export const useTrackingStore = create<TrackingStore>((set) => ({
    trackingNumberQuery: '',
    setTrackingNumberQuery: (trackingNumber: string) =>
        set({ trackingNumberQuery: trackingNumber })
}))
