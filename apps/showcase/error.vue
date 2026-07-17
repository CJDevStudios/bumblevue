<script setup lang="ts">
    import type { NuxtError } from '#app';

    const props = defineProps<{ error: NuxtError }>();
</script>
<template>
    <div class="flex min-h-screen items-center justify-center">
        <div class="flex card flex-col items-center gap-8 sm:p-20">
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary">
                <span class="font-bold text-9xl">{{ error.statusCode }}</span>
            </div>
            <div class="font-bold text-center text-4xl border-t border-surface pt-8">{{ error.statusMessage }}</div>
            <NuxtLink to="/"><Button label="GO TO HOMEPAGE" /></NuxtLink>
        </div>
    </div>
</template>
