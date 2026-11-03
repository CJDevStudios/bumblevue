<template>
    <component v-if="!asChild" :is="as" :class="cx('root')" v-bind="attrs">
        <slot></slot>
    </component>
    <slot v-else :class="cx('root')" :active="active" :a11yAttrs="a11yAttrs"></slot>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import AccordionPanelStyle from '@cjdevstudios/bumblevue/accordionpanel/style';
import { mergeProps } from 'vue';

export default {
    name: 'AccordionPanel',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        },
        as: {
            type: [String, Object],
            default: 'DIV'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionPanelStyle,
    provide() {
        return {
            $pcAccordionPanel: this,
            $parentInstance: this
        };
    },
    inject: ['$pcAccordion'],
    computed: {
        active() {
            return this.$pcAccordion.isItemActive(this.value);
        },
        attrs() {
            return mergeProps(this.a11yAttrs, this.ptmi('root', this.ptParams));
        },
        a11yAttrs() {
            return {
                'data-pc-name': 'accordionpanel',
                'data-p-disabled': this.disabled,
                'data-p-active': this.active
            };
        },
        ptParams() {
            return {
                context: {
                    active: this.active
                }
            };
        }
    }
};
</script>
