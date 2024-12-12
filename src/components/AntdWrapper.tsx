import { useTheme } from '../hooks/useTheme'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { ReactNode } from 'react'
import { useLocaleStore } from '@stores/locale'
import en from 'antd/locale/en_US'
import ar from 'antd/locale/ar_EG'
export function AntdWrapper({ children }: { children: ReactNode }) {
    const currentTheme = useTheme()
    const { locale, setLocale } = useLocaleStore()
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale && savedLocale !== locale) {
        setLocale(savedLocale)
    }
    handleStepsRTL(locale)
    const antdLocale = locale === 'en' ? en : ar
    const antdTheme = {
        token: {
            colorPrimary: currentTheme.colorPrimary,
            borderRadius: 10
        },
        components: {
            Input: {
                controlHeightLG: 60,
                hoverBorderColor: currentTheme.colorSecondary,
                activeBorderColor: 'transparent',
                activeShadow: `0 0 0 2px ${currentTheme.colorSecondary}33`,
                boxShadowFocus: `0 0 0 2px ${currentTheme.colorSecondary}33`
            },
            Card: {
                lineWidth: 2,
                fontFamily: "'Lato', sans-serif",
                paddingLG: 12
            },
            Steps: {
                colorPrimary: currentTheme.colorSecondary,
                lineWidth: 3
            },
            Timeline: {
                colorPrimary: '#d0d5dd',
                tailWidth: 3
            }
        }
    }
    return (
        <StyleProvider layer>
            <ConfigProvider locale={antdLocale} theme={antdTheme}>
                {children}
            </ConfigProvider>
        </StyleProvider>
    )
}

function handleStepsRTL(locale: string) {
    const sheet = document.styleSheets[0]
    if (locale === 'ar') {
        sheet.insertRule(
            '.ant-steps-item-tail {inset-inline-start: calc(90%);}',
            sheet.cssRules.length
        )
    } else {
        sheet.insertRule(
            '.ant-steps-item-tail {inset-inline-start: 13px;}',
            sheet.cssRules.length
        )
    }
}
