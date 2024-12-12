import { create } from 'zustand'
import i18n from '../localization/localization'

interface LocaleStore {
    locale: string
    setLocale: (locale: string) => void
}

export const useLocaleStore = create<LocaleStore>((set) => ({
    locale: 'en',
    setLocale: (locale: string) => {
        localStorage.setItem('locale', locale)
        i18n.changeLanguage(locale)
        document.documentElement.lang = locale
        document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
        set({ locale })
    }
}))
