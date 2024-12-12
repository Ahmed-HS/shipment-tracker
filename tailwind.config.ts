import type { Config } from 'tailwindcss'

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary))',
                secondary: 'rgb(var(--color-secondary))',
                'secondary-light': 'rgb(var(--color-secondary-light))',
                surface: 'rgb(var(--color-surface))',
                'on-surface': 'rgb(var(--color-on-surface))',
                'on-surface-light': 'rgb(var(--color-on-surface-light))'
            }
        }
    },
    plugins: []
} satisfies Config
