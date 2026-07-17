<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>theme</i> property is used to customize the initial theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import BumbleVue from '@cjdevstudios/bumblevue/config';
import Aura from '@cjdevstudios/bumbleuix-themes/aura';

const app = createApp(App);

app.use(BumbleVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
 });
`
            }
        };
    }
};
</script>
