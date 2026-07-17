<template>
    <DocSectionText v-bind="$attrs">
        <p>Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at your app's entry file (e.g. main.js) during the BumbleVue setup.</p>

        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />

        <p>Ripple describes how to use it with your own components and standard elements that needs to be imported and configured with a name of your choice. Global configuration is done with the <i>app.directive</i> function.</p>

        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import { createApp } from 'vue';
import BumbleVue from '@cjdevstudios/bumblevue/config';
const app = createApp(App);

app.use(BumbleVue, { ripple: true });
`
            },
            code2: {
                basic: `
import Ripple from '@cjdevstudios/bumblevue/ripple';

app.directive('ripple', Ripple);
`
            }
        };
    }
};
</script>
