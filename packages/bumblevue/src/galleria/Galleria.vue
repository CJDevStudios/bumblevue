<template>
    <Portal v-if="fullScreen">
        <div v-if="containerVisible" :ref="maskRef" :class="[cx('mask'), maskClass]" role="dialog" :aria-modal="fullScreen ? 'true' : undefined" v-bind="ptm('mask')">
            <transition name="p-galleria" @before-enter="onBeforeEnter" @enter="onEnter" @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave" appear v-bind="ptm('transition')">
                <GalleriaContent v-if="visible" :ref="containerRef" v-focustrap @mask-hide="maskHide" :templates="$slots" @activeitem-change="onActiveItemChange" :pt="pt" :unstyled="unstyled"
                    v-bind="$props" />
            </transition>
        </div>
    </Portal>
    <GalleriaContent v-else :templates="$slots" @activeitem-change="onActiveItemChange" :pt="pt" :unstyled="unstyled" v-bind="$props" />
</template>

<script>
import { addClass, focus } from '@cjdevstudios/bumbleuix-utils/dom';
import { ZIndex } from '@cjdevstudios/bumbleuix-utils/zindex';
import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
import FocusTrap from '@cjdevstudios/bumblevue/focustrap';
import GalleriaStyle from '@cjdevstudios/bumblevue/galleria/style';
import Portal from '@cjdevstudios/bumblevue/portal';
import { blockBodyScroll, unblockBodyScroll } from '@cjdevstudios/bumblevue/utils';
import GalleriaContent from './GalleriaContent.vue';

export default {
    name: 'Galleria',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        id: {
            type: String,
            default: null
        },
        value: {
            type: Array,
            default: null
        },
        activeIndex: {
            type: Number,
            default: 0
        },
        fullScreen: {
            type: Boolean,
            default: false
        },
        visible: {
            type: Boolean,
            default: false
        },
        numVisible: {
            type: Number,
            default: 3
        },
        responsiveOptions: {
            type: Array,
            default: null
        },
        showItemNavigators: {
            type: Boolean,
            default: false
        },
        showThumbnailNavigators: {
            type: Boolean,
            default: true
        },
        showItemNavigatorsOnHover: {
            type: Boolean,
            default: false
        },
        changeItemOnIndicatorHover: {
            type: Boolean,
            default: false
        },
        circular: {
            type: Boolean,
            default: false
        },
        autoPlay: {
            type: Boolean,
            default: false
        },
        transitionInterval: {
            type: Number,
            default: 4000
        },
        showThumbnails: {
            type: Boolean,
            default: true
        },
        thumbnailsPosition: {
            type: String,
            default: 'bottom'
        },
        verticalThumbnailViewPortHeight: {
            type: String,
            default: '300px'
        },
        showIndicators: {
            type: Boolean,
            default: false
        },
        showIndicatorsOnItem: {
            type: Boolean,
            default: false
        },
        indicatorsPosition: {
            type: String,
            default: 'bottom'
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        maskClass: {
            type: String,
            default: null
        },
        containerStyle: {
            type: null,
            default: null
        },
        containerClass: {
            type: null,
            default: null
        },
        containerProps: {
            type: null,
            default: null
        },
        prevButtonProps: {
            type: null,
            default: null
        },
        nextButtonProps: {
            type: null,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        },
        ariaRoledescription: {
            type: String,
            default: null
        }
    },
    emits: ['update:activeIndex', 'update:visible'],
    style: GalleriaStyle,
    provide() {
        return {
            $pcGalleria: this,
            $parentInstance: this
        };
    },
    container: null,
    mask: null,
    documentKeydownListener: null,
    data() {
        return {
            containerVisible: this.visible,
            target: null
        };
    },
    updated() {
        if (this.fullScreen && this.visible) {
            this.containerVisible = this.visible;
        }
    },
    beforeUnmount() {
        if (this.fullScreen) {
            unblockBodyScroll();
        }

        this.mask = null;

        if (this.container) {
            ZIndex.clear(this.container.$el || this.container);
            this.container = null;
        }
    },
    methods: {
        onBeforeEnter(el) {
            ZIndex.set('modal', el, this.baseZIndex || this.$bumblevue.config.zIndex.modal);
        },
        onEnter(el) {
            this.target = document.activeElement;
            this.mask.style.zIndex = String(parseInt(el.style.zIndex, 10) - 1);
            blockBodyScroll();
            this.focus();
            this.bindGlobalListeners();
        },
        onBeforeLeave() {
            !this.isUnstyled && addClass(this.mask, 'p-overlay-mask-leave-active');
        },
        onLeave() {
            focus(this.target);
            this.target = null;
        },
        onAfterLeave(el) {
            ZIndex.clear(el);
            this.containerVisible = false;
            unblockBodyScroll();
            this.unbindGlobalListeners();
        },
        onActiveItemChange(index) {
            if (this.activeIndex !== index) {
                this.$emit('update:activeIndex', index);
            }
        },
        maskHide() {
            this.$emit('update:visible', false);
        },
        containerRef(el) {
            this.container = el;
        },
        maskRef(el) {
            this.mask = el;
        },
        onKeyDown(event) {
            if (event.code === 'Escape') {
                this.maskHide();
            }
        },
        bindDocumentKeyDownListener() {
            if (!this.documentKeydownListener) {
                this.documentKeydownListener = this.onKeyDown.bind(this);
                window.document.addEventListener('keydown', this.documentKeydownListener);
            }
        },
        unbindDocumentKeyDownListener() {
            if (this.documentKeydownListener) {
                window.document.removeEventListener('keydown', this.documentKeydownListener);
                this.documentKeydownListener = null;
            }
        },
        bindGlobalListeners() {
            if (this.fullScreen) {
                this.bindDocumentKeyDownListener();
            }
        },
        unbindGlobalListeners() {
            if (this.fullScreen) {
                this.unbindDocumentKeyDownListener();
            }
        },
        focus() {
            let focusTarget = this.container.$el.querySelector('[autofocus]');

            if (focusTarget) {
                focusTarget.focus();
            }
        }
    },
    components: {
        GalleriaContent: GalleriaContent,
        Portal: Portal
    },
    directives: {
        focustrap: FocusTrap
    }
};
</script>
