<template>
    <div :class="cx('root')" :data-p-active="isActive" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import StepItemStyle from '@cjdevstudios/bumblevue/stepitem/style';

export default {
    name: 'StepItem',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        }
    },
    style: StepItemStyle,
    provide() {
        return {
            $pcStepItem: this,
            $parentInstance: this
        };
    },
    inject: ['$pcStepper'],
    computed: {
        isActive() {
            return this.$pcStepper?.d_value === this.value;
        }
    }
};
</script>
