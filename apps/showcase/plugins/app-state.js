import AppTheme from '@/themes/app-theme';
import BumbleVue from '@cjdevstudios/bumblevue/config';
import { reactive } from 'vue';

const $appState = {
    install: (Vue) => {
        const appState = reactive({
            preset: 'Aura',
            primary: 'noir',
            darkTheme: false,
            codeSandbox: false,
            newsActive: false,
            announcement: null,
            storageKey: 'bumblevue',
        });

        Vue.config.globalProperties.$appState = appState;
        // provide the appState as well for composition API usage
        Vue.provide('appState', appState);
    }
};

export default defineNuxtPlugin(async (nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();

    nuxtApp.vueApp.use($appState);

    if (runtimeConfig.public.DEV_ENV === 'hot') {
        nuxtApp.vueApp.use(BumbleVue, {
            theme: AppTheme
        });
    }
});
