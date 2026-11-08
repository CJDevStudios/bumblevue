<script>
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import InputIconStyle from '@cjdevstudios/bumblevue/inputicon/style';

    export default {
        name: 'InputIcon',
        extends: BaseComponent,
        inheritAttrs: false,
        props: {
            class: null
        },
        style: InputIconStyle,
        provide() {
            return {
                $pcInputIcon: this,
                $parentInstance: this
            };
        },
        computed: {
            containerClass() {
                return [this.cx('root'), this.class];
            }
        }
    };
</script>

<template>
    <span :class="containerClass" v-bind="ptmi('root')" aria-hidden="true">
        <slot />
    </span>
</template>
