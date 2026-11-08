<script>
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import FloatLabelStyle from '@cjdevstudios/bumblevue/floatlabel/style';

    export default {
        name: 'FloatLabel',
        extends: BaseComponent,
        inheritAttrs: false,
        props: {
            variant: {
                type: String,
                default: 'over'
            }
        },
        style: FloatLabelStyle,
        provide() {
            return {
                $pcFloatLabel: this,
                $parentInstance: this
            };
        }
    };
</script>

<template>
    <span :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </span>
</template>
