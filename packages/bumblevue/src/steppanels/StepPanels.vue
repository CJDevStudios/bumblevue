<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import StepPanelsStyle from '@cjdevstudios/bumblevue/steppanels/style';

export default {
    name: 'StepPanels',
    extends: BaseComponent,
    inheritAttrs: false,
    style: StepPanelsStyle,
    provide() {
        return {
            $pcStepPanels: this,
            $parentInstance: this
        };
    }
};
</script>
