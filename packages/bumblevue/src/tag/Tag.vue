<template>
    <span :class="cx('root')" :data-p="dataP" v-bind="ptmi('root')">
        <component v-if="$slots.icon" :is="$slots.icon" :class="cx('icon')" v-bind="ptm('icon')" />
        <span v-else-if="icon" :class="[cx('icon'), icon]" v-bind="ptm('icon')"></span>
        <slot v-if="value != null || $slots.default">
            <span :class="cx('label')" v-bind="ptm('label')">{{ value }}</span>
        </slot>
    </span>
</template>

<script>
import { cn } from '@cjdevstudios/bumbleuix-utils';
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import TagStyle from '@cjdevstudios/bumblevue/tag/style';

export default {
    name: 'Tag',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    style: TagStyle,
    provide() {
        return {
            $pcTag: this,
            $parentInstance: this
        };
    },
    computed: {
        dataP() {
            return cn({
                rounded: this.rounded,
                [this.severity]: this.severity
            });
        }
    }
};
</script>
