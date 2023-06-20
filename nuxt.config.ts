// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt-alt/proxy',
    ],
    proxy: {
        proxies: {
            '/shields': {
                // target: 'https://localhost:5000',
                target: 'https://img.shields.io',
                changeOrigin: true,
                rewrite: (path: any) => path.replace(/^\/shields/, '')
            },
            '/githubusercontent': {
                target: 'https://raw.githubusercontent.com',
                changeOrigin: true,
                rewrite: (path: any) => path.replace(/^\/githubusercontent/, '')
            },
            '/github': {
                target: 'https://github.com/',
                changeOrigin: true,
                rewrite: (path: any) => path.replace(/^\/github/, '')
            },
        }
    },
})
