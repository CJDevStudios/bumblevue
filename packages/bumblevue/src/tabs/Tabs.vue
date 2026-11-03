<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot></slot>
    </div>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import TabsStyle from '@cjdevstudios/bumblevue/tabs/style';

export default {
    name: 'Tabs',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        lazy: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        showNavigators: {
            type: Boolean,
            default: true
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        },
        orientation: {
            type: String,
            default: 'horizontal',
            validator: (value) => ['horizontal', 'vertical'].includes(value)
        }
    },
    emits: ['update:value'],
    style: TabsStyle,
    provide() {
        return {
            $pcTabs: this,
            $parentInstance: this
        };
    },
    data() {
        return {
            d_value: this.value
        };
    },
    watch: {
        value(newValue) {
            this.d_value = newValue;
        }
    },
    methods: {
        updateValue(newValue) {
            if (this.d_value !== newValue) {
                this.d_value = newValue;
                this.$emit('update:value', newValue);
            }
        },
        isVertical() {
            return this.orientation === 'vertical';
        }
    }
};
</script>
