<template>
    <DocSectionText v-bind="$attrs">
        <p>The module installs the BumbleVue plugin by default. Disable this option if you prefer to configure BumbleVue manually e.g. with a Nuxt plugin.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
bumblevue: {
    useBumbleVue: true | false
}
`
            }
        };
    }
};
</script>
