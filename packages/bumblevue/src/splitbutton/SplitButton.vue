<template>
    <div :class="containerClass" :style="style" v-bind="ptmi('root')" :data-p-severity="severity">
        <PVSButton
            type="button"
            :class="cx('pcButton')"
            :label="label"
            :disabled="disabled"
            :severity="severity"
            :text="text"
            :icon="icon"
            :outlined="outlined"
            :size="size"
            :fluid="fluid"
            :aria-label="label"
            @click="onDefaultButtonClick"
            v-bind="buttonProps"
            :pt="ptm('pcButton')"
            :unstyled="unstyled"
        >
            <template v-if="$slots.icon" #icon="slotProps">
                <slot name="icon" :class="slotProps.class">
                    <span :class="[icon, slotProps.class]" v-bind="ptm('pcButton')['icon']" data-pc-section="buttonicon" />
                </slot>
            </template>
            <template #default>
                <slot></slot>
            </template>
        </PVSButton>
        <PVSButton
            ref="button"
            type="button"
            :class="cx('pcDropdown')"
            :disabled="disabled"
            aria-haspopup="true"
            :aria-expanded="isExpanded"
            :aria-controls="isExpanded ?  $id + '_overlay' : undefined"
            @click="onDropdownButtonClick"
            @keydown="onDropdownKeydown"
            :severity="severity"
            :text="text"
            :outlined="outlined"
            :size="size"
            :unstyled="unstyled"
            v-bind="menuButtonProps"
            :pt="ptm('pcDropdown')"
        >
            <template #icon="slotProps">
                <slot name="dropdownicon" :class="slotProps.class">
                    <component :is="dropdownIcon ? 'span' : 'ChevronDownIcon'" :class="[dropdownIcon, slotProps.class]" v-bind="ptm('pcDropdown')['icon']" data-pc-section="menubuttonicon" />
                </slot>
            </template>
        </PVSButton>
        <PVSMenu ref="menu" :id="$id + '_overlay'" :model="model" :popup="true" :autoZIndex="autoZIndex" :baseZIndex="baseZIndex" :appendTo="appendTo" :unstyled="unstyled" :pt="ptm('pcMenu')">
            <template v-if="$slots.menuitemicon" #itemicon="slotProps">
                <slot name="menuitemicon" :item="slotProps.item" :class="slotProps.class" />
            </template>
            <template v-if="$slots.item" #item="slotProps">
                <slot name="item" :item="slotProps.item" :hasSubmenu="slotProps.hasSubmenu" :label="slotProps.label" :props="slotProps.props"></slot>
            </template>
        </PVSMenu>
    </div>
</template>

<script>
import { isEmpty } from '@cjdevstudios/bumbleuix-utils/object';
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import ChevronDownIcon from '@cjdevstudios/bumblevue-icons/chevrondown';
import Button from '@cjdevstudios/bumblevue/button';
import SplitButtonStyle from '@cjdevstudios/bumblevue/splitbutton/style';
import TieredMenu from '@cjdevstudios/bumblevue/tieredmenu';

export default {
    name: 'SplitButton',
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
        model: {
            type: Array,
            default: null
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        appendTo: {
            type: [String, Object],
            default: 'body'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        fluid: {
            type: Boolean,
            default: null
        },
        class: {
            type: null,
            default: null
        },
        style: {
            type: null,
            default: null
        },
        buttonProps: {
            type: null,
            default: null
        },
        menuButtonProps: {
            type: null,
            default: null
        },
        dropdownIcon: {
            type: String,
            default: undefined
        },
        severity: {
            type: String,
            default: null
        },
        raised: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        },
        text: {
            type: Boolean,
            default: false
        },
        outlined: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: null
        }
    },
    emits: ['click'],
    style: SplitButtonStyle,
    provide() {
        return {
            $pcSplitButton: this,
            $parentInstance: this
        };
    },
    inject: {
        $pcFluid: { default: null }
    },
    data() {
        return {
            isExpanded: false
        };
    },
    mounted() {
        this.$watch('$refs.menu.visible', (newValue) => {
            this.isExpanded = newValue;
        });
    },
    methods: {
        onDropdownButtonClick(event) {
            if (event) {
                event.preventDefault();
            }

            this.$refs.menu.toggle({ currentTarget: this.$el, relatedTarget: this.$refs.button.$el });
            this.isExpanded = this.$refs.menu.visible;
        },
        onDropdownKeydown(event) {
            if (event.code === 'ArrowDown' || event.code === 'ArrowUp') {
                this.onDropdownButtonClick();
                event.preventDefault();
            }
        },
        onDefaultButtonClick(event) {
            if (this.isExpanded) {
                this.$refs.menu.hide(event);
            }

            this.$emit('click', event);
        }
    },
    computed: {
        containerClass() {
            return [this.cx('root'), this.class];
        },
        hasFluid() {
            return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
        }
    },
    components: {
        PVSButton: Button,
        PVSMenu: TieredMenu,
        ChevronDownIcon: ChevronDownIcon
    }
};
</script>
