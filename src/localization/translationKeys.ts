import { DeliveryState } from '@features/tracking/model/deliveryState'
export const tk = {
    search: {
        heading: 'search.heading',
        subheading: 'search.subheading',
        placeholder: 'search.placeholder',
        error: 'search.error'
    },
    order: {
        heading: 'order.heading',
        state: {
            pickedUp: {
                label: 'order.state.pickedUp.label',
                short: 'order.state.pickedUp.short',
                long: 'order.state.pickedUp.long'
            },
            processing: {
                label: 'order.state.processing.label',
                short: 'order.state.processing.short',
                long: 'order.state.processing.long'
            },
            outForDelivery: {
                label: 'order.state.outForDelivery.label',
                short: 'order.state.outForDelivery.short',
                long: 'order.state.outForDelivery.long'
            },
            delivered: {
                label: 'order.state.delivered.label',
                short: 'order.state.delivered.short',
                long: 'order.state.delivered.long'
            },
            rescheduled: {
                label: 'order.state.rescheduled.label',
                short: 'order.state.rescheduled.short',
                long: 'order.state.rescheduled.long'
            },
            preparingForDelivery: {
                label: 'order.state.preparingForDelivery.label',
                short: 'order.state.preparingForDelivery.short',
                long: 'order.state.preparingForDelivery.long'
            },
            cancelled: {
                label: 'Cancelled',
                short: 'Cancelled',
                long: 'order.state.cancelled.long'
            }
        },
        deliveryTime: 'order.deliveryTime',
        trackingDetails: 'order.trackingDetails'
    },
    modifiers: {
        short: '.short',
        long: '.long',
        label: '.label'
    }
}

export const stateToTranslationKey: {
    [key: number]: string
} = {
    [DeliveryState.PickedUp]: 'order.state.pickedUp',
    [DeliveryState.Processing]: 'order.state.processing',
    [DeliveryState.OutForDelivery]: 'order.state.outForDelivery',
    [DeliveryState.PreparingForDelivery]: 'order.state.preparingForDelivery',
    [DeliveryState.Delivered]: 'order.state.delivered',
    [DeliveryState.Resceduled]: 'order.state.rescheduled',
    [DeliveryState.Cancelled]: 'order.state.cancelled'
}
