import { Input } from 'antd'
import locationIcon from '@assets/location.png'
import { useTrackingStore } from '../stores/trackingStore'
import { useState } from 'react'
import { tk } from '@localization/translationKeys'
export function SearchBar() {
    const { setTrackingNumberQuery } = useTrackingStore()
    const [searchValue, setSearchValue] = useState('')
    const { t } = useTranslation()
    return (
        <>
            <section className="bg-secondary-light flex w-full flex-col items-center pb-20">
                <img src={locationIcon} alt="Location" />
                <h1 className="mb-5 text-4xl font-semibold">
                    {t(tk.search.heading)}
                </h1>
                <p>{t(tk.search.subheading)}</p>
            </section>
            <Input.Search
                size="large"
                style={{
                    boxShadow:
                        '0 2px 4px rgba(29,41,57,.05), 0 4px 16px rgba(29,41,57,.1)'
                }}
                className="-mt-10 w-[calc(100%-2rem)] max-w-md rounded-xl"
                placeholder={t(tk.search.placeholder)}
                onSearch={() => setTrackingNumberQuery(searchValue)}
                value={searchValue}
                onChange={(e) => {
                    if (/^\d*$/.test(e.target.value)) {
                        setSearchValue(e.target.value)
                    }
                }}
                enterButton={<IconLucideSearch className="size-8" />}
            />
        </>
    )
}
