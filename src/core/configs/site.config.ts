import { envConfig } from '@/core/configs/env.config'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
    title: 'Pixel Builder',
    description: 'Create Your Own Pixel Component Easily',
    keywords: [
        'pixel component',
        'pixel editor',
        'pixel design',
        'pixel creator',
        'pixel graphics',
        'pixel builder',
        'pixel tool',
        'pixel generator',
        'pixel customization',
        'pixel',
        'builder',
        'component',
    ],
    url: envConfig.APP_URL,
    ogImage: `${envConfig.APP_URL + '/imgs/og-image.jpg'}`,
}
