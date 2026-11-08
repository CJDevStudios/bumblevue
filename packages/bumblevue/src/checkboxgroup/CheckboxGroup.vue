<script>
    import { uuid } from '@cjdevstudios/bumblevue/utils';
    import BaseEditableHolder from '@cjdevstudios/bumblevue/core/baseeditableholder';
    import CheckboxGroupStyle from '@cjdevstudios/bumblevue/checkboxgroup/style';

    export default {
        name: 'CheckboxGroup',
        extends: BaseEditableHolder,
        inheritAttrs: false,
        style: CheckboxGroupStyle,
        provide() {
            return {
                $pcCheckboxGroup: this,
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
                this.groupName = newValue || uuid('checkbox-group-');
            }
        },
        mounted() {
            this.groupName = this.groupName || uuid('checkbox-group-');
        }
    };
</script>

<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>
