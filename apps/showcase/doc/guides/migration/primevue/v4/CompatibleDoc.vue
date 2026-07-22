<script setup lang="ts"></script>

<template>
    <DocSectionText v-bind="$attrs">
        <h4>TypeScript Generics Support</h4>
        <p>
            The types for 32 components have been updated to add generic types inferred from the component's props, replacing many uses of the <code>any</code> type.
            This change improves type safety and allows for better type inference when using these components in TypeScript projects.
            If you are using TypeScript, you may see some new type errors if your code was not consistent with the expected types of these components.
        </p>
    </DocSectionText>
</template>

<style scoped></style>
