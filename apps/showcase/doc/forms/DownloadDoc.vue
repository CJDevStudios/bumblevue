<template>
    <DocSectionText v-bind="$attrs">
        <p>Forms add-on is available for download on npm registry.</p>
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
npm install @cjdevstudios/bumblevue-forms

# Using yarn
yarn add @cjdevstudios/bumblevue-forms

# Using pnpm
pnpm add @cjdevstudios/bumblevue-forms
`
            }
        };
    }
};
</script>
