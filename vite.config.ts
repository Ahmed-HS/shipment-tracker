import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { iconifyPlugins } from './iconify.vite.config'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        ...iconifyPlugins,
        AutoImport({
            imports: [
                {
                    'react-i18next': ['useTranslation']
                }
            ]
        })
    ],
    resolve: {
        alias: {
            '@': '/src',
            '@assets': '/src/assets',
            '@services': '/src/services',
            '@hooks': '/src/hooks',
            '@components': '/src/components',
            '@localization': '/src/localization',
            '@features': '/src/features',
            '@stores': '/src/stores'
        }
    }
})
