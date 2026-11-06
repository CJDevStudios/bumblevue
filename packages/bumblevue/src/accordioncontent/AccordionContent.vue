<template>
    <template v-if="!asChild">
        <transition name="p-collapsible" v-bind="ptm('transition', ptParams)">
            <component v-if="$pcAccordion.lazy ? $pcAccordionPanel.active : true" v-show="$pcAccordion.lazy ? true : $pcAccordionPanel.active" :is="as" :class="cx('root')" v-bind="attrs">
                <div :class="cx('contentWrapper')" v-bind="ptm('contentWrapper', ptParams)">
                    <div :class="cx('content')" v-bind="ptm('content', ptParams)">
                        <slot></slot>
                    </div>
                </div>
            </component>
        </transition>
    </template>
    <slot v-else :class="cx('root')" :active="$pcAccordionPanel.active" :a11yAttrs="a11yAttrs"></slot>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
import AccordionContentStyle from '@cjdevstudios/bumblevue/accordioncontent/style';
import { mergeProps } from 'vue';

export default {
    name: 'AccordionContent',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        as: {
            type: [String, Object],
            default: 'DIV'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionContentStyle,
    provide() {
        return {
            $pcAccordionContent: this,
            $parentInstance: this
        };
    },
    inject: ['$pcAccordion', '$pcAccordionPanel'],
    computed: {
        id() {
            return `${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`;
        },
        ariaLabelledby() {
            return `${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`;
        },
        attrs() {
            return mergeProps(this.a11yAttrs, this.ptmi('root', this.ptParams));
        },
        a11yAttrs() {
            return {
                id: this.id,
                role: 'region',
                'aria-labelledby': this.ariaLabelledby,
                'data-pc-name': 'accordioncontent',
                'data-p-active': this.$pcAccordionPanel.active
            };
        },
        ptParams() {
            return {
                context: {
                    active: this.$pcAccordionPanel.active
                }
            };
        }
    }
};
</script>
