<template>
    <DocSectionText v-bind="$attrs">
        <p>Defines the shared pass through properties per component type. Visit the <NuxtLink to="/passthrough">Pass Through Props</NuxtLink> documentation for more information.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from "vue";
import BumbleVue from "@cjdevstudios/bumblevue/config";
const app = createApp(App);

app.use(BumbleVue, {
    pt: {
        slider: {
            handle: { class: 'bg-primary text-primary-contrast' }
        }
    }
});
`
            }
        };
    }
};
</script>
