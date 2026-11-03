<template>
    <div v-if="visible" :class="cx('root')" :aria-label="label" v-bind="ptmi('root')" :data-p="dataP">
        <slot>
            <img v-if="image" :src="image" v-bind="ptm('image')" :class="cx('image')" />
            <component v-else-if="$slots.icon" :is="$slots.icon" :class="cx('icon')" v-bind="ptm('icon')" />
            <span v-else-if="icon" :class="[cx('icon'), icon]" v-bind="ptm('icon')" />
            <div v-if="label !== null" :class="cx('label')" v-bind="ptm('label')">{{ label }}</div>
        </slot>
        <slot v-if="removable" name="removeicon" :removeCallback="close" :keydownCallback="onKeydown">
            <component :is="removeIcon ? 'span' : 'TimesCircleIcon'" :class="[cx('removeIcon'), removeIcon]" @click="close" @keydown="onKeydown" v-bind="ptm('removeIcon')"></component>
        </slot>
    </div>
</template>

<script>
import { cn } from '@cjdevstudios/bumbleuix-utils';
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import TimesCircleIcon from '@cjdevstudios/bumblevue-icons/timescircle';
import ChipStyle from '@cjdevstudios/bumblevue/chip/style';

export default {
    name: 'Chip',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        label: {
            type: [String, Number],
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
        removable: {
            type: Boolean,
            default: false
        },
        removeIcon: {
            type: String,
            default: undefined
        }
    },
    emits: ['remove'],
    style: ChipStyle,
    provide() {
        return {
            $pcChip: this,
            $parentInstance: this
        };
    },
    data() {
        return {
            visible: true
        };
    },
    methods: {
        onKeydown(event) {
            if (event.key === 'Enter' || event.key === 'Backspace') {
                this.close(event);
            }
        },
        close(event) {
            this.visible = false;
            this.$emit('remove', event);
        }
    },
    computed: {
        dataP() {
            return cn({
                removable: this.removable
            });
        }
    },
    components: {
        TimesCircleIcon
    }
};
</script>
