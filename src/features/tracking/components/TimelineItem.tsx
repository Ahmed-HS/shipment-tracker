import { Card } from 'antd'
import { Step } from '../model/order'
import { ShortDate } from '@components/ShortDate'
import { stateToTranslationKey } from '@localization/translationKeys'
import { tk } from '@localization/translationKeys'
export function TimelineItem({ steps }: { steps: Step[] }) {
    const { t } = useTranslation()
    return (
        <section className="flex flex-col gap-4">
            <h3 className="text-base font-medium">
                <ShortDate date={steps[0].date} />
            </h3>

            {steps.map((step, index) => (
                <Card key={index} style={{ width: 'fit-content' }}>
                    <p>
                        {t(
                            stateToTranslationKey[step.code] + tk.modifiers.long
                        )}
                    </p>
                    <p className="text-on-surface-light">
                        <ShortDate date={step.date} timeOnly />
                    </p>
                </Card>
            ))}
        </section>
    )
}
