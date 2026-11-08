<template>
    <span :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </span>
</template>

<script>
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import IftaLabelStyle from '@cjdevstudios/bumblevue/iftalabel/style';

    export default {
        name: 'IftaLabel',
        extends: BaseComponent,
        inheritAttrs: false,
        style: IftaLabelStyle,
        provide() {
            return {
                $pcIftaLabel: this,
                $parentInstance: this
            };
        }
    };
</script>
