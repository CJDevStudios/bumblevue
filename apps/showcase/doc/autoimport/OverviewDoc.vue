<template>
    <DocSectionText v-bind="$attrs">
        <p>BumbleVue components need to be imported and configured individually. In the next section, we'll cleanup the code using auto imports.</p>
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
import InputText from '@cjdevstudios/bumblevue/inputtext';
import Button from '@cjdevstudios/bumblevue/button';
import App from './App.vue'
const app = createApp(App);

app.use(BumbleVue);
app.component('InputText', InputText);
app.component('Button', Button);
`
            }
        };
    }
};
</script>
