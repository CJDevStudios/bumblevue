<template>
    <div :class="cx('root')" aria-live="polite" v-bind="ptmi('root')">
        <div v-if="!d_active" ref="display" :class="cx('display')" :tabindex="$attrs.tabindex || '0'" role="button" @click="open" @keydown.enter="open" :data-p-disabled="disabled" v-bind="{ ...displayProps, ...ptm('display') }">
            <slot name="display"></slot>
        </div>
        <div v-else :class="cx('content')" v-bind="ptm('content')">
            <slot name="content" :closeCallback="close" />
        </div>
    </div>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import InplaceStyle from '@cjdevstudios/bumblevue/inplace/style';

export default {
    name: 'Inplace',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        displayProps: {
            type: null,
            default: null
        }
    },
    emits: ['open', 'close', 'update:active'],
    style: InplaceStyle,
    provide() {
        return {
            $pcInplace: this,
            $parentInstance: this
        };
    },
    data() {
        return {
            d_active: this.active
        };
    },
    watch: {
        active(newValue) {
            this.d_active = newValue;
        }
    },
    methods: {
        open(event) {
            if (this.disabled) {
                return;
            }

            this.d_active = true;

            this.$emit('open', event);
            this.$emit('update:active', true);
        },
        close(event) {
            this.d_active = false;

            this.$emit('close', event);
            this.$emit('update:active', false);

            setTimeout(() => {
                this.$refs.display.focus();
            }, 0);
        }
    }
};
</script>
