<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
    import { uuid } from '@cjdevstudios/bumblevue/utils';
    import BaseEditableHolder from '@cjdevstudios/bumblevue/core/baseeditableholder';
    import RadioButtonGroupStyle from '@cjdevstudios/bumblevue/radiobuttongroup/style';

    export default {
        name: 'RadioButtonGroup',
        extends: BaseEditableHolder,
        inheritAttrs: false,
        style: RadioButtonGroupStyle,
        provide() {
            return {
                $pcRadioButtonGroup: this,
                $parentInstance: this
            };
        },
        data() {
            return {
                groupName: this.name
            };
        },
        watch: {
            name(newValue) {
                this.groupName = newValue || uuid('radiobutton-group-');
            }
        },
        mounted() {
            this.groupName = this.groupName || uuid('radiobutton-group-');
        }
    };
</script>
