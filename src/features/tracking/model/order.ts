import { AxiosResponse } from 'axios'

export interface Step {
    date: Date
    code: number
}

export interface Order {
    trackingNumber: string
    currentStep: Step
    steps: Step[]
}

export function mapOrder(order: AxiosResponse): Order {
    const data = order.data
    const currentStatus = data.CurrentStatus
    const steps = data.TransitEvents
        ? data.TransitEvents.map((step: Record<string, string>) => ({
              description: step.state,
              date: new Date(step.timestamp),
              code: step.code
          })).reverse()
        : []
    return {
        trackingNumber: data.TrackingNumber,
        currentStep: {
            date: new Date(currentStatus.timestamp),
            code: currentStatus.code
        },
        steps: steps
    }
}
