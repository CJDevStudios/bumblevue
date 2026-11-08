<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Aura from '@cjdevstudios/bumblevue/themes/aura';

export default defineNuxtConfig({
    modules: [
        '@cjdevstudios/bumblevue-nuxt-module'
    ],
    bumblevue: {
        options: {
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'system',
                    cssLayer: false
                }
            }
        }
    }
})
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Main configuration settings of BumbleVue, refer to the <BumbleVueNuxtLink to="/configuration">configuration</BumbleVueNuxtLink> documentation for details.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>
