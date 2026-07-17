<template>
    <DocSectionText v-bind="$attrs">
        <p>Configure the module to use a theme like Aura.</p>
        <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Aura from '@cjdevstudios/bumbleuix-themes/aura';

export default defineNuxtConfig({
    modules: [
        '@cjdevstudios/bumblevue-nuxt-module'
    ],
    bumblevue: {
        options: {
            theme: {
                preset: Aura
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
