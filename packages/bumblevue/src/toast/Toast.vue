<template>
    <Portal>
        <div ref="container" :class="cx('root')" :style="sx('root', true, { position })" :data-p="dataP" v-bind="ptmi('root')">
            <transition-group name="p-toast-message" tag="div" @enter="onEnter" @leave="onLeave" v-bind="{ ...ptm('transition') }">
                <ToastMessage
                    v-for="msg of messages"
                    :key="msg.id"
                    :message="msg"
                    :templates="$slots"
                    :closeIcon="closeIcon"
                    :infoIcon="infoIcon"
                    :warnIcon="warnIcon"
                    :errorIcon="errorIcon"
                    :successIcon="successIcon"
                    :closeButtonProps="closeButtonProps"
                    :onMouseEnter="onMouseEnter"
                    :onMouseLeave="onMouseLeave"
                    :onClick="onClick"
                    :unstyled="unstyled"
                    @close="remove($event)"
                    :pt="pt"
                />
            </transition-group>
        </div>
    </Portal>
</template>

<script>
import { cn } from '@cjdevstudios/bumbleuix-utils';
import { setAttribute } from '@cjdevstudios/bumbleuix-utils/dom';
import { isEmpty } from '@cjdevstudios/bumbleuix-utils/object';
import { ZIndex } from '@cjdevstudios/bumbleuix-utils/zindex';
import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
import Portal from '@cjdevstudios/bumblevue/portal';
import ToastStyle from '@cjdevstudios/bumblevue/toast/style';
import ToastEventBus from '@cjdevstudios/bumblevue/toasteventbus';
import ToastMessage from './ToastMessage.vue';

var messageIdx = 0;

export default {
    name: 'Toast',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        group: {
            type: String,
            default: null
        },
        position: {
            type: String,
            default: 'top-right'
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        breakpoints: {
            type: Object,
            default: null
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        infoIcon: {
            type: String,
            default: undefined
        },
        warnIcon: {
            type: String,
            default: undefined
        },
        errorIcon: {
            type: String,
            default: undefined
        },
        successIcon: {
            type: String,
            default: undefined
        },
        closeButtonProps: {
            type: null,
            default: null
        },
        onMouseEnter: {
            type: Function,
            default: undefined
        },
        onMouseLeave: {
            type: Function,
            default: undefined
        },
        onClick: {
            type: Function,
            default: undefined
        }
    },
    emits: ['close', 'life-end'],
    style: ToastStyle,
    provide() {
        return {
            $pcToast: this,
            $parentInstance: this
        };
    },
    data() {
        return {
            messages: []
        };
    },
    styleElement: null,
    mounted() {
        ToastEventBus.on('add', this.onAdd);
        ToastEventBus.on('remove', this.onRemove);
        ToastEventBus.on('remove-group', this.onRemoveGroup);
        ToastEventBus.on('remove-all-groups', this.onRemoveAllGroups);

        if (this.breakpoints) {
            this.createStyle();
        }
    },
    beforeUnmount() {
        this.destroyStyle();

        if (this.$refs.container && this.autoZIndex) {
            ZIndex.clear(this.$refs.container);
        }

        ToastEventBus.off('add', this.onAdd);
        ToastEventBus.off('remove', this.onRemove);
        ToastEventBus.off('remove-group', this.onRemoveGroup);
        ToastEventBus.off('remove-all-groups', this.onRemoveAllGroups);
    },
    methods: {
        add(message) {
            if (message.id == null) {
                message.id = messageIdx++;
            }

            this.messages = [...this.messages, message];
        },
        remove(params) {
            const index = this.messages.findIndex((m) => m.id === params.message.id);

            if (index !== -1) {
                this.messages.splice(index, 1);
                this.$emit(params.type, { message: params.message });
            }
        },
        onAdd(message) {
            if (this.group == message.group) {
                this.add(message);
            }
        },
        onRemove(message) {
            this.remove({ message, type: 'close' });
        },
        onRemoveGroup(group) {
            if (this.group === group) {
                this.messages = [];
            }
        },
        onRemoveAllGroups() {
            this.messages.forEach((message) => this.$emit('close', { message }));
            this.messages = [];
        },
        onEnter() {
            if (this.autoZIndex) {
                ZIndex.set('modal', this.$refs.container, this.baseZIndex || this.$bumblevue.config.zIndex.modal);
            }
        },
        onLeave() {
            if (this.$refs.container && this.autoZIndex && isEmpty(this.messages)) {
                setTimeout(() => {
                    ZIndex.clear(this.$refs.container);
                }, 200);
            }
        },
        createStyle() {
            if (!this.styleElement && !this.isUnstyled) {
                this.styleElement = document.createElement('style');
                this.styleElement.type = 'text/css';
                setAttribute(this.styleElement, 'nonce', this.$bumblevue?.config?.csp?.nonce);
                document.head.appendChild(this.styleElement);

                let innerHTML = '';

                for (let breakpoint in this.breakpoints) {
                    let breakpointStyle = '';

                    for (let styleProp in this.breakpoints[breakpoint]) {
                        breakpointStyle += styleProp + ':' + this.breakpoints[breakpoint][styleProp] + '!important;';
                    }

                    innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-toast[${this.$attrSelector}] {
                                ${breakpointStyle}
                            }
                        }
                    `;
                }

                this.styleElement.innerHTML = innerHTML;
            }
        },
        destroyStyle() {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
        }
    },
    computed: {
        dataP() {
            return cn({
                [this.position]: this.position
            });
        }
    },
    components: {
        ToastMessage: ToastMessage,
        Portal: Portal
    }
};
</script>
