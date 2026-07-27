<script setup lang="ts">
import EventBus from '@/app/AppEventBus';
import { onMounted, onBeforeUnmount, inject } from 'vue';
import { AppState } from './index';

const appState = inject<AppState>('appState');

onMounted(() => {
    EventBus.on('dark-mode-toggle', darkModeToggleListener);
});

onBeforeUnmount(() => {
    EventBus.off('dark-mode-toggle', darkModeToggleListener);
});

function darkModeToggleListener(event) {
    if (!document.startViewTransition) {
        toggleDarkMode(event);

        return;
    }

    document.startViewTransition(() => toggleDarkMode(event));
}
function toggleDarkMode(event) {
    const isDark = event.dark;

    if (isDark) document.documentElement.classList.add('p-dark');
    else document.documentElement.classList.remove('p-dark');

    appState.darkTheme = isDark;

    EventBus.emit('dark-mode-toggle-complete');
}
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
