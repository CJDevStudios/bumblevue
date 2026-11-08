<script>
    export default {
        data() {
            return {
                code2: {
                    basic: `
import Aura from '@cjdevstudios/bumblevue/themes/aura';

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

<template>
    <DocSectionText v-bind="$attrs">
        <p>Styled mode provides pre-skinned components, default theme is Aura with emerald as the primary color. See the <NuxtLink to="/theming/styled">styled mode</NuxtLink> documentation for details.</p>
        <p>The theme presets are included in BumbleVue and can be imported from <i>@cjdevstudios/bumblevue/themes</i>. Configure the module to use a theme like Aura.</p>
        <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>
