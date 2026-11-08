<script>
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import InputGroupStyle from '@cjdevstudios/bumblevue/inputgroup/style';

    export default {
        name: 'InputGroup',
        extends: BaseComponent,
        inheritAttrs: false,
        style: InputGroupStyle,
        provide() {
            return {
                $pcInputGroup: this,
                $parentInstance: this
            };
        }
    };
</script>

<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>
