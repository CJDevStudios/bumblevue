<script setup>
    import Button from '@cjdevstudios/bumblevue/button';

    const props = defineProps({
        severity: {
            type: String,
            default: 'secondary'
        },
        label: {
            type: String,
            default: 'Submit'
        }
    });
</script>

<template>
    <Button type="submit" :severity :label />
</template>
