<template>
    <span :class="cx('root')" :data-p="dataP" v-bind="ptmi('root')">
        <slot>{{ value }}</slot>
    </span>
</template>

<script>
import { cn } from '@cjdevstudios/bumblevue/utils';
import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
import BadgeStyle from '@cjdevstudios/bumblevue/badge/style';

export default {
    name: 'Badge',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        value: {
            type: [String, Number],
            default: null
        },
        severity: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null
        }
    },
    style: BadgeStyle,
    provide() {
        return {
            $pcBadge: this,
            $parentInstance: this
        };
    },
    computed: {
        dataP() {
            return cn({
                circle: this.value != null && String(this.value).length === 1,
                empty: this.value == null && !this.$slots.default,
                [this.severity]: this.severity,
                [this.size]: this.size
            });
        }
    }
};
</script>
