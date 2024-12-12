import { Timeline } from 'antd'
import { TimelineItem } from './TimelineItem'
import { Order, Step } from '../model/order'
import { tk } from '@localization/translationKeys'
export function OrderTimeline({ order }: { order: Order }) {
    const { t } = useTranslation()
    const stepsGroupedByDate = groupStepsByDate(order.steps)
    return (
        <section className="ms-8 mt-10 w-[calc(100%-2rem)] max-w-4xl">
            <h2 className="text-on-surface-light mb-8 text-xl font-semibold">
                {t(tk.order.trackingDetails)}
            </h2>
            <Timeline
                items={[
                    ...stepsGroupedByDate.map((steps) => ({
                        dot: (
                            <IconMaterialSymbolsCircle className="rtl:relative rtl:left-4" />
                        ),
                        children: <TimelineItem steps={steps} />
                    })),
                    {
                        dot: ' '
                    }
                ]}
            />
        </section>
    )
}

function groupStepsByDate(steps: Step[]): Step[][] {
    if (steps.length === 0) return []
    const groups: Step[][] = []
    let currentGroup: Step[] = []
    let currentDate = steps[0].date.toDateString()
    for (const step of steps) {
        if (step.date.toDateString() !== currentDate) {
            groups.push(currentGroup)
            currentGroup = []
            currentDate = step.date.toDateString()
        }
        currentGroup.push(step)
    }
    groups.push(currentGroup)
    return groups
}
