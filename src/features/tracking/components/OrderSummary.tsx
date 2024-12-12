import { Card } from 'antd'
import { Order } from '../model/order'
import { ShortDate } from '@components/ShortDate'
import { DeliveryState } from '../model/deliveryState'
import { OrderSteps } from './OrderSteps'
import { tk } from '@localization/translationKeys'
import { stateToTranslationKey } from '@localization/translationKeys'
export function OrderSummary({ order }: { order: Order }) {
    const { t } = useTranslation()
    const cardHeader = (
        <header className="text-on-surface-light mx-2 my-4 text-sm font-normal">
            <p className="uppercase">
                {t(tk.order.heading)} #{order.trackingNumber}
            </p>
            <h2 className="text-on-surface text-2xl font-semibold">
                {t(
                    stateToTranslationKey[order.currentStep.code] +
                        tk.modifiers.short
                )}
            </h2>
            <p className="mb-2">
                {order.steps.length > 0 &&
                    t(
                        stateToTranslationKey[order.currentStep.code] +
                            tk.modifiers.long
                    )}
                &nbsp;
                <ShortDate
                    className="text-secondary"
                    date={order.currentStep.date}
                />
            </p>

            {order.currentStep.code === 41 && (
                <p className="text-wrap">{t(tk.order.deliveryTime)}</p>
            )}
        </header>
    )
    const showTopHeader =
        order.steps.length > 0 ||
        order.currentStep.code === DeliveryState.Delivered
    return (
        <Card
            className="mt-10 w-[calc(100%-2rem)] max-w-4xl"
            style={{
                boxShadow: '0 0 1px 1px #e4e7ec,0 4px 4px rgba(29,41,57,.05)'
            }}
            title={showTopHeader && cardHeader}
        >
            {!showTopHeader && cardHeader}
            {(order.steps.length > 0 ||
                order.currentStep.code === DeliveryState.Delivered) && (
                <OrderSteps order={order} />
            )}
        </Card>
    )
}
