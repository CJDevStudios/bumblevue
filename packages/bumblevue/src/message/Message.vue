<template>
    <transition name="p-message" appear v-bind="ptmi('transition')">
        <div v-if="visible" :class="cx('root')" role="alert" aria-live="assertive" aria-atomic="true" :data-p="dataP" v-bind="ptm('root')">
            <div :class="cx('contentWrapper')" v-bind="ptm('contentWrapper')">
                <slot v-if="$slots.container" name="container" :closeCallback="close"></slot>
                <div v-else :class="cx('content')" :data-p="dataP" v-bind="ptm('content')">
                    <slot name="icon" :class="cx('icon')">
                        <component :is="icon ? 'span' : null" :class="[cx('icon'), icon]" :data-p="dataP" v-bind="ptm('icon')"></component>
                    </slot>
                    <div v-if="$slots.default" :class="cx('text')" :data-p="dataP" v-bind="ptm('text')">
                        <slot></slot>
                    </div>
                    <button v-if="closable" v-ripple :class="cx('closeButton')" :aria-label="closeAriaLabel" type="button" @click="close($event)" :data-p="dataP"
                        v-bind="{ ...closeButtonProps, ...ptm('closeButton') }">
                        <slot name="closeicon">
                            <i v-if="closeIcon" :class="[cx('closeIcon'), closeIcon]" :data-p="dataP" v-bind="ptm('closeIcon')" />
                            <TimesIcon v-else :class="[cx('closeIcon'), closeIcon]" :data-p="dataP" v-bind="ptm('closeIcon')" />
                        </slot>
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { cn } from '@cjdevstudios/bumbleuix-utils';
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import TimesIcon from '@cjdevstudios/bumblevue-icons/times';
import MessageStyle from '@cjdevstudios/bumblevue/message/style';
import Ripple from '@cjdevstudios/bumblevue/ripple';

export default {
    name: 'Message',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        severity: {
            type: String,
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: false
        },
        life: {
            type: Number,
            default: null
        },
        icon: {
            type: String,
            default: undefined
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        closeButtonProps: {
            type: null,
            default: null
        },
        size: {
            type: String,
            default: null
        },
        variant: {
            type: String,
            default: null
        }
    },
    emits: ['close', 'life-end'],
    style: MessageStyle,
    provide() {
        return {
            $pcMessage: this,
            $parentInstance: this
        };
    },
    timeout: null,
    data() {
        return {
            visible: true
        };
    },
    mounted() {
        if (this.life) {
            setTimeout(() => {
                this.visible = false;
                this.$emit('life-end');
            }, this.life);
        }
    },
    methods: {
        close(event) {
            this.visible = false;
            this.$emit('close', event);
        }
    },
    computed: {
        closeAriaLabel() {
            return this.$bumblevue.config.locale.aria ? this.$bumblevue.config.locale.aria.close : undefined;
        },
        dataP() {
            return cn({
                outlined: this.variant === 'outlined',
                simple: this.variant === 'simple',
                [this.severity]: this.severity,
                [this.size]: this.size
            });
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        TimesIcon
    }
};
</script>
