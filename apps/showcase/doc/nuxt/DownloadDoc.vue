<template>
    <DocSectionText v-bind="$attrs">
        <p>
            BumbleVue is available for download on <a href="https://www.npmjs.com/package/@cjdevstudios/bumblevue">npm registry</a> along with the official
            <a href="https://www.npmjs.com/package/@cjdevstudios/bumblevue-nuxt-module" target="_blank" rel="noopener noreferrer">@cjdevstudios/bumblevue-nuxt-module</a>.
        </p>
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
npm install --save-dev @cjdevstudios/bumblevue-nuxt-module

# Using yarn
yarn add @cjdevstudios/bumblevue @cjdevstudios/bumbleuix-themes
yarn add --dev @cjdevstudios/bumblevue-nuxt-module

# Using pnpm
pnpm add @cjdevstudios/bumblevue @cjdevstudios/bumbleuix-themes
pnpm add -D @cjdevstudios/bumblevue-nuxt-module
`
            }
        };
    }
};
</script>
