<template>
    <DocSectionText v-bind="$attrs">
        <p>Configuration is managed by the <i>BumbleVue</i> instance imported from <i>@cjdevstudios/bumblevue/config</i>.</p>
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
const app = createApp(App);

app.use(BumbleVue, { /* options */ });
`
            }
        };
    }
};
</script>
