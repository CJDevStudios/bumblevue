<template>
    <div :class="cx('root')" :style="sx('root')" role="separator" :aria-orientation="layout" :data-p="dataP" v-bind="ptmi('root')">
        <div v-if="$slots.default" :class="cx('content')" :data-p="dataP" v-bind="ptm('content')">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { cn } from '@cjdevstudios/bumbleuix-utils';
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import DividerStyle from '@cjdevstudios/bumblevue/divider/style';

export default {
    name: 'Divider',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        align: {
            type: String,
            default: null
        },
        layout: {
            type: String,
            default: 'horizontal'
        },
        type: {
            type: String,
            default: 'solid'
        }
    },
    style: DividerStyle,
    provide() {
        return {
            $pcDivider: this,
            $parentInstance: this
        };
    },
    computed: {
        dataP() {
            return cn({
                [this.align]: this.align,
                [this.layout]: this.layout,
                [this.type]: this.type
            });
        }
    }
};
</script>
