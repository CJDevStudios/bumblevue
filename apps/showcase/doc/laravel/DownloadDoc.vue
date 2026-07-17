<template>
    <DocSectionText v-bind="$attrs">
        <p>BumbleVue is available for download on <a href="https://www.npmjs.com/package/@cjdevstudios/bumblevue">npm registry</a>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
# Using npm
npm install @cjdevstudios/bumblevue @cjdevstudios/bumbleuix-themes

# Using yarn
yarn add @cjdevstudios/bumblevue @cjdevstudios/bumbleuix-themes

# Using pnpm
pnpm add @cjdevstudios/bumblevue @cjdevstudios/bumbleuix-themes
`
            }
        };
    }
};
</script>
