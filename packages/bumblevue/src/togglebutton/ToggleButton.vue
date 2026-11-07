<template>
    <button
        v-ripple
        type="button"
        :class="cx('root')"
        :tabindex="tabindex"
        :disabled="disabled"
        :aria-pressed="d_value"
        @click="onChange"
        @blur="onBlur"
        v-bind="getPTOptions('root')"
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabelledby"
        :data-p-checked="active"
        :data-p-disabled="disabled"
        :data-p="dataP"
    >
        <span :class="cx('content')" v-bind="getPTOptions('content')" :data-p="dataP">
            <slot>
                <slot name="icon" :value="d_value" :class="cx('icon')">
                    <span v-if="onIcon || offIcon" :class="[cx('icon'), d_value ? onIcon : offIcon]" v-bind="getPTOptions('icon')" />
                </slot>
                <span :class="cx('label')" v-bind="getPTOptions('label')">{{ label }}</span>
            </slot>
        </span>
    </button>
</template>

<script>
import { cn } from '@cjdevstudios/bumblevue/utils';
import { isNotEmpty } from '@cjdevstudios/bumblevue/utils/object';
import BaseEditableHolder from '@cjdevstudios/bumblevue/core/baseeditableholder';
import Ripple from '@cjdevstudios/bumblevue/ripple';
import ToggleButtonStyle from '@cjdevstudios/bumblevue/togglebutton/style';

export default {
    name: 'ToggleButton',
    extends: BaseEditableHolder,
    inheritAttrs: false,
    props: {
        onIcon: String,
        offIcon: String,
        onLabel: {
            type: String,
            default: 'Yes'
        },
        offLabel: {
            type: String,
            default: 'No'
        },
        readonly: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: null
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null
        },
        fluid: {
            type: Boolean,
            default: null
        }
    },
    emits: ['change'],
    style: ToggleButtonStyle,
    provide() {
        return {
            $pcToggleButton: this,
            $parentInstance: this
        };
    },
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    active: this.active,
                    disabled: this.disabled
                }
            });
        },
        onChange(event) {
            if (!this.disabled && !this.readonly) {
                this.writeValue(!this.d_value, event);
                this.$emit('change', event);
            }
        },
        onBlur(event) {
            this.formField.onBlur?.(event);
        }
    },
    computed: {
        active() {
            return this.d_value === true;
        },
        hasLabel() {
            return isNotEmpty(this.onLabel) && isNotEmpty(this.offLabel);
        },
        label() {
            return this.hasLabel ? (this.d_value ? this.onLabel : this.offLabel) : '\u00A0';
        },
        dataP() {
            return cn({
                checked: this.active,
                invalid: this.$invalid,
                [this.size]: this.size
            });
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
