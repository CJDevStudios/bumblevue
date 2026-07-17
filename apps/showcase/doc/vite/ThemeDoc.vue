<template>
    <DocSectionText v-bind="$attrs">
        <p>Configure BumbleVue to use a theme like Aura.</p>
        <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from 'vue';
import BumbleVue from '@cjdevstudios/bumblevue/config';
import Aura from '@cjdevstudios/bumbleuix-themes/aura';

const app = createApp(App);
app.use(BumbleVue, {
    theme: {
        preset: Aura
    }
});
`
            }
        };
    }
};
</script>
