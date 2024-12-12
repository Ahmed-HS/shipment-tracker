import { SearchBar } from './components/SearchBar'
import { OrderSummary } from './components/OrderSummary'
import { OrderTimeline } from './components/OrderTimeline'
import { Card, Skeleton } from 'antd'
import { useTrackingStore } from './stores/trackingStore'
import { useOrder } from './hooks/useOrder'
import { tk } from '@localization/translationKeys'
export function TrackingPage() {
    const { trackingNumberQuery } = useTrackingStore()
    const { isFetching, isError, data: order } = useOrder(trackingNumberQuery)
    const { t } = useTranslation()
    return (
        <>
            <SearchBar />

            {isFetching && (
                <Skeleton
                    className="mt-10 w-[calc(100%-2rem)] max-w-4xl"
                    active
                />
            )}

            {isError && (
                <Card className="mt-8">
                    <div className="m-4 flex items-center gap-2">
                        <IconIxErrorFilled className="text-secondary size-6" />
                        <h2 className="text-xl">{t(tk.search.error)}</h2>
                    </div>
                </Card>
            )}
            {order && <OrderSummary order={order} />}
            {order && order.steps.length > 0 && <OrderTimeline order={order} />}
        </>
    )
}
