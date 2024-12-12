import { useLocaleStore } from "@stores/locale"

export function ShortDate({
    date,
    timeOnly = false,
    className = ''
}: {
    date: Date
    timeOnly?: boolean
    className?: string
}) {
    const { locale } = useLocaleStore()
    if (timeOnly) {
        return (
            <time className={className}>
                {date.toLocaleTimeString(locale, {
                    hour: '2-digit',
                    minute: '2-digit'
                })}
            </time>
        )
    }
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    }
    return (
        <time className={className}>
            {date.toLocaleDateString(locale, options)}
        </time>
    )
}
