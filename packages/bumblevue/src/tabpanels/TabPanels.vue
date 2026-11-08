<script>
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import TabPanelsStyle from '@cjdevstudios/bumblevue/tabpanels/style';

    export default {
        name: 'TabPanels',
        extends: BaseComponent,
        inheritAttrs: false,
        props: {},
        style: TabPanelsStyle,
        provide() {
            return {
                $pcTabPanels: this,
                $parentInstance: this
            };
        }
    };
</script>

<template>
    <div :class="cx('root')" role="presentation" v-bind="ptmi('root')">
        <slot></slot>
    </div>
</template>
