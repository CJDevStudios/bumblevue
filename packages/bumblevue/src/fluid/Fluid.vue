<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import FluidStyle from '@cjdevstudios/bumblevue/fluid/style';

export default {
    name: 'Fluid',
    extends: BaseComponent,
    inheritAttrs: false,
    style: FluidStyle,
    provide() {
        return {
            $pcFluid: this,
            $parentInstance: this
        };
    }
};
</script>
