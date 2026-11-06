<template>
    <DocSectionText v-bind="$attrs">
        <p>Forms is included in the <i>@cjdevstudios/bumblevue</i> package, no additional installation is required. To validate with one of the built-in resolvers, install the schema validation library of your choice, such as Zod.</p>
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
npm install zod

# Using yarn
yarn add zod

# Using pnpm
pnpm add zod
`
            }
        };
    }
};
</script>
