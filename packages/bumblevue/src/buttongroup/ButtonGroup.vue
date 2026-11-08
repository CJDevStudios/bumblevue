<template>
    <span :class="cx('root')" role="group" v-bind="ptmi('root')">
        <slot />
    </span>
</template>

<script>
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import ButtonGroupStyle from '@cjdevstudios/bumblevue/buttongroup/style';

    export default {
        name: 'ButtonGroup',
        extends: BaseComponent,
        inheritAttrs: false,
        style: ButtonGroupStyle,
        provide() {
            return {
                $pcButtonGroup: this,
                $parentInstance: this
            };
        }
    };
</script>
