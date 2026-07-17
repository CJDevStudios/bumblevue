import path from 'path';

const baseUrl = '/';

const alias = {
    '@cjdevstudios/bumblevue': path.resolve(__dirname, '../../packages/bumblevue/src'),
    // bumblevue: path.resolve(__dirname, '../../packages/bumblevue/src'),
    '@cjdevstudios/bumblevue-core': path.resolve(__dirname, '../../packages/core/src'),
    '@cjdevstudios/bumblevue-icons': path.resolve(__dirname, '../../packages/icons/src'),
};

let PROCESS_ENV = {};

try {
    PROCESS_ENV = process?.env || {};
} catch {
    // NOOP
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    modules: ['@cjdevstudios/bumblevue-nuxt-module'],
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    vite: {
        optimizeDeps: {
            noDiscovery: true,
            include: ['quill', 'yup']
        },
        resolve: {
            dedupe: ['vue', '@cjdevstudios/bumbleuix-styles', '@cjdevstudios/bumbleuix-themes', '@cjdevstudios/bumbleuix-utils'],
            alias
        }
    },
    nitro: {
        alias
    },
    routeRules: {
        '/accessibility': { redirect: { to: '/guides/accessibility', statusCode: 301 } },
        '/installation': { redirect: { to: '/vite', statusCode: 301 } },
    },
    bumblevue: {
        useBumbleVue: process.env.DEV_ENV !== 'hot',
        autoImport: true, // When enabled, the module automatically imports BumbleVue components and directives used throughout the application.
        importTheme: { from: '@/themes/app-theme.js' }
    },
    app: {
        baseURL: baseUrl,
        head: {
            title: 'BumbleVue - Vue UI Component Library',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { name: 'robots', content: 'index,follow' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'BumbleVue | Vue UI Component Library' },
                { property: 'og:url', content: 'https://bumblevue.org/' },
                { property: 'og:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:ttl', content: '604800' }
            ],
            link: [
                { rel: 'icon', href: baseUrl + 'favicon.png' },
                { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
            ],
            script: [
                {
                    src: baseUrl + 'scripts/prism.js',
                    'data-manual': true
                }
            ]
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    runtimeConfig: {
        public: {
            contextPath: baseUrl,
            DEV_ENV: PROCESS_ENV.DEV_ENV,
            designerApiUrl: ''
        }
    },
    css: ['@cjdevstudios/bumbleicons/bumbleicons.css', '@/assets/styles/flags.css', '@docsearch/css/dist/style.css', '@/assets/styles/tailwind/main.css', '@/assets/styles/layout/layout.scss']
});
