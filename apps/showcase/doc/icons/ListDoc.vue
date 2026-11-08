<script>
    import * as Icons from '@cjdevstudios/bumblevue/icons';
    import { markRaw } from 'vue';

    export default {
        data() {
            return {
                icons: Object.keys(Icons)
                    .filter((name) => name.endsWith('Icon') && name !== 'BaseIcon')
                    .sort()
                    .map((name) => ({
                        name,
                        path: `@cjdevstudios/bumblevue/icons/${name.slice(0, -4).toLowerCase()}`,
                        component: markRaw(Icons[name])
                    })),
                filter: null
            };
        },
        computed: {
            filteredIcons() {
                const query = this.filter?.replace(/[^\w]/gi, '').toLowerCase();

                return query ? this.icons.filter((icon) => icon.name.toLowerCase().includes(query)) : this.icons;
            }
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Here is the full list of built-in icons. The set is intentionally limited to the icons that BumbleVue components use by default, for any other icon use the icon library of your choice as described in
            <NuxtLink to="/customicons">Custom Icons</NuxtLink>.
        </p>
    </DocSectionText>

    <InputText v-model="filter" class="w-full p-4 mt-4 mb-6" placeholder="Search an icon" />

    <div class="card">
        <div class="grid grid-cols-12 gap-4 text-center">
            <div v-for="icon of filteredIcons" :key="icon.name" class="col-span-12 md:col-span-3 mb-8">
                <component :is="icon.component" class="mb-4 text-surface-500 dark:text-surface-400" style="width: 1.5rem; height: 1.5rem" />
                <div>{{ icon.name }}</div>
                <div class="text-sm text-surface-500 dark:text-surface-400">{{ icon.path }}</div>
            </div>
        </div>
    </div>
</template>
