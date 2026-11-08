<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import StepListStyle from '@cjdevstudios/bumblevue/steplist/style';

    export default {
        name: 'StepList',
        extends: BaseComponent,
        inheritAttrs: false,
        style: StepListStyle,
        provide() {
            return {
                $pcStepList: this,
                $parentInstance: this
            };
        }
    };
</script>
