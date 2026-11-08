<script>
    export default {
        data() {
            return {
                code1: {
                    basic: `
npm i unplugin-vue-components -D
`
                },
                code2: {
                    basic: `
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { BumbleVueResolver } from '@cjdevstudios/bumblevue/resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        BumbleVueResolver()
      ]
    })
  ]
})
`
                },
                code3: {
                    basic: `
import { createApp } from "vue";
import BumbleVue from "@cjdevstudios/bumblevue/config";
import App from './App.vue'
const app = createApp(App);

app.use(BumbleVue);
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <a href="https://github.com/unplugin/unplugin-vue-components" target="_blank" rel="noopener noreferrer">unplugin-vue-components</a> library can automatically import and register BumbleVue components with the help of the
            <i>BumbleVueResolver</i> from <i>@cjdevstudios/bumblevue/resolver</i>. Begin with installing the plugin as a dev dependency.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>Next step would be adding the <i>BumbleVueResolver</i> at vite.config using the <i>Components</i> plugin.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
        <p>
            That's it, now the initialization code can be refactored as the following. For configuration like namespacing, visit the
            <a href="https://github.com/unplugin/unplugin-vue-components?tab=readme-ov-file#configuration" target="_blank" rel="noopener noreferrer">official documentation</a>.
        </p>
        <DocSectionCode :code="code3" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>
