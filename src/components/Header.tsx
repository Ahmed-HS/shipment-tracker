import bostaLogo from '@assets/bosta.svg'
import bostaLogoAr from '@assets/bostaAr.svg'
import { Dropdown, Space } from 'antd'
import { useLocaleStore } from '@stores/locale'

export function Header() {
    const localeToLabel: { [key: string]: string } = {
        en: 'English',
        ar: 'العربية'
    }
    const { locale, setLocale } = useLocaleStore()
    const items = [
        { key: 'en', label: localeToLabel.en },
        { key: 'ar', label: localeToLabel.ar }
    ]
    const handleMenuClick = (e: { key: string }) => {
        setLocale(e.key)
    }
    const logo = locale === 'en' ? bostaLogo : bostaLogoAr
    return (
        <header className="bg-secondary-light sticky top-0 z-10 flex items-center p-5 md:px-16 md:py-4">
            <a href="https://bosta.co/en-eg/home" target="_blank">
                <img src={logo} alt="Bosta Logo" />
            </a>
            <span className="flex-grow"></span>
            <a
                className="hover:text-secondary transition duration-300"
                href=""
                onClick={(e) => e.preventDefault()}
            >
                <Dropdown
                    menu={{ items, onClick: handleMenuClick }}
                    trigger={['click']}
                >
                    <Space>
                        <span>{localeToLabel[locale]}</span>
                        <IconLucideChevronDown />
                    </Space>
                </Dropdown>
            </a>
        </header>
    )
}
