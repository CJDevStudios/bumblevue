<template>
    <div :class="cx('root')" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel" v-bind="ptmi('root')" :data-p="dataP">
        <slot>
            <span v-if="label" :class="cx('label')" v-bind="ptm('label')" :data-p="dataP">{{ label }}</span>
            <component v-else-if="$slots.icon" :is="$slots.icon" :class="cx('icon')" />
            <span v-else-if="icon" :class="[cx('icon'), icon]" v-bind="ptm('icon')" :data-p="dataP" />
            <img v-else-if="image" :src="image" :alt="ariaLabel" @error="onError" v-bind="ptm('image')" :data-p="dataP" />
        </slot>
    </div>
</template>

<script>
import { cn } from '@cjdevstudios/bumblevue/utils';
import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
import AvatarStyle from '@cjdevstudios/bumblevue/avatar/style';

export default {
    name: 'Avatar',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: 'normal'
        },
        shape: {
            type: String,
            default: 'square'
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    emits: ['error'],
    style: AvatarStyle,
    provide() {
        return {
            $pcAvatar: this,
            $parentInstance: this
        };
    },
    methods: {
        onError(event) {
            this.$emit('error', event);
        }
    },
    computed: {
        dataP() {
            return cn({
                [this.shape]: this.shape,
                [this.size]: this.size
            });
        }
    }
};
</script>
