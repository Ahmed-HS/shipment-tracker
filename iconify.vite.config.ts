import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'

export const iconifyPlugins = [
    AutoImport({
        resolvers: [
            IconsResolver({
                prefix: 'Icon',
                extension: 'jsx'
            })
        ]
    }),
    Icons({ compiler: 'jsx', jsx: 'react' })
]
