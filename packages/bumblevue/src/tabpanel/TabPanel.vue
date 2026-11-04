<template>
    <slot v-if="!$pcTabs"></slot>
    <template v-else>
        <template v-if="!asChild">
            <component v-if="$pcTabs?.lazy ? active : true" v-show="$pcTabs?.lazy ? true : active" :is="as" :class="cx('root')" v-bind="attrs">
                <slot></slot>
            </component>
        </template>

        <slot v-else :class="cx('root')" :active="active" :a11yAttrs="a11yAttrs"></slot>
    </template>
</template>

<script>
import { equals } from '@cjdevstudios/bumbleuix-utils/object';
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import TabPanelStyle from '@cjdevstudios/bumblevue/tabpanel/style';
import { mergeProps } from 'vue';

export default {
    name: 'TabPanel',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        value: {
            type: [String, Number],
            default: undefined
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
    style: TabPanelStyle,
    provide() {
        return {
            $pcTabPanel: this,
            $parentInstance: this
        };
    },
    inject: ['$pcTabs'],
    computed: {
        active() {
            return equals(this.$pcTabs?.d_value, this.value);
        },
        id() {
            return `${this.$pcTabs?.$id}_tabpanel_${this.value}`;
        },
        ariaLabelledby() {
            return `${this.$pcTabs?.$id}_tab_${this.value}`;
        },
        attrs() {
            return mergeProps(this.a11yAttrs, this.ptmi('root', this.ptParams));
        },
        a11yAttrs() {
            return {
                id: this.id,
                tabindex: this.$pcTabs?.tabindex,
                role: 'tabpanel',
                'aria-labelledby': this.ariaLabelledby,
                'data-pc-name': 'tabpanel',
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
