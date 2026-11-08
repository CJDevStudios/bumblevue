<script>
    export default {
        data() {
            return {
                code1: {
                    basic: `
import BumbleVue from '@cjdevstudios/bumblevue/config';
import Aura from '@cjdevstudios/bumblevue/themes/aura';

const app = createApp(App);

app.use(BumbleVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
 });
`
                },
                code2: {
                    basic: `
@import "tailwindcss";
@import "@cjdevstudios/bumblevue/tailwind.css";
@custom-variant dark (&:where(.my-app-dark, .my-app-dark *));     //dark mode configuration
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            In styled mode, BumbleVue uses the <i>system</i> as the default <i>darkModeSelector</i> in theme configuration. If you have a dark mode switch in your application, ensure that <i>darkModeSelector</i> is aligned with the Tailwind dark
            variant for seamless integration. Note that, this particular configuration isn't required if you're utilizing the default system color scheme.
        </p>
        <p>Suppose that, the darkModeSelector is set as <i>my-app-dark</i> in BumbleVue.</p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>Add a custom variant for dark with a custom selector.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>
