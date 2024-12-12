import { Steps } from 'antd'
import { Order, Step } from '../model/order'
import { DeliveryState } from '../model/deliveryState'
import { ShortDate } from '@components/ShortDate'
import { stateToTranslationKey } from '@localization/translationKeys'
import { tk } from '@localization/translationKeys'
export function OrderSteps({ order }: { order: Order }) {
    const {t} = useTranslation()
    const completedSteps = getCompletedSteps(order.steps)
    const orderDelivered = order.currentStep.code === DeliveryState.Delivered
    const allStates = [
        DeliveryState.PickedUp,
        DeliveryState.Processing,
        DeliveryState.OutForDelivery,
        DeliveryState.Delivered
    ]
    const allSteps = allStates.map((code) => {
        const step = completedSteps.get(+code)
        return {
            title: t(stateToTranslationKey[code] + tk.modifiers.label),
            description: step && <ShortDate date={step.date} />,
            status:
                step || orderDelivered
                    ? ('finish' as const)
                    : ('wait' as const),
            icon:
                step || orderDelivered ? (
                    <IconAntDesignCheckCircleFilled />
                ) : (
                    <IconLucideCircle />
                )
        }
    })

    return (
        <Steps
            className="lg:px-16"
            labelPlacement="vertical"
            items={allSteps}
        />
    )
}

function getCompletedSteps(steps: Step[]): Map<number, Step> {
    const completedSteps = new Map<number, Step>()
    const resetSteps = new Set([DeliveryState.Resceduled])
    for (let i = steps.length - 1; i >= 0; i--) {
        const step = steps[i]
        if (resetSteps.has(step.code)) {
            completedSteps.delete(DeliveryState.OutForDelivery)
        } else {
            completedSteps.set(step.code, step)
        }
    }
    return completedSteps
}
