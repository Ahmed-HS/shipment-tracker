import { useEffect, useState } from 'react'

type AppTheme = {
    colorPrimary: string
    colorSecondary: string
    colorSecondaryLight: string
    colorOnSurfaceLight: string
}

export function useTheme(): AppTheme {
    const defaultTheme = {
        colorPrimary: '#e30613',
        colorSecondary: '#0098a5',
        colorSecondaryLight: '#f3fafb',
        colorOnSurfaceLight: '#f3f3f3'
    }
    const [theme, setTheme] = useState<AppTheme>(defaultTheme)
    useEffect(() => {
        const currentTheme = {
            colorPrimary: getComputedColor('--color-primary'),
            colorSecondary: getComputedColor('--color-secondary'),
            colorSecondaryLight: getComputedColor('--color-secondary-light'),
            colorOnSurfaceLight: getComputedColor('--color-on-surface-light')
        }
        setTheme(currentTheme)
    }, [])
    return theme
}

function getComputedColor(color: string): string {
    const root = document.documentElement
    const computedStyle = getComputedStyle(root)
    const rgbColor = computedStyle.getPropertyValue(color)
    return rgbToHex(rgbColor)
}

function rgbToHex(rgb: string): string {
    const [r, g, b] = rgb.split(' ').map(Number)
    const toHex = (value: number) => value.toString(16).padStart(2, '0')
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
