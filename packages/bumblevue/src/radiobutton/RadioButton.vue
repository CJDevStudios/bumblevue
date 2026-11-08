<script>
    import { cn } from '@cjdevstudios/bumblevue/utils';
    import { equals } from '@cjdevstudios/bumblevue/utils/object';
    import BaseInput from '@cjdevstudios/bumblevue/core/baseinput';
    import RadioButtonStyle from '@cjdevstudios/bumblevue/radiobutton/style';

    export default {
        name: 'RadioButton',
        extends: BaseInput,
        inheritAttrs: false,
        props: {
            value: null,
            binary: Boolean,
            readonly: {
                type: Boolean,
                default: false
            },
            tabindex: {
                type: Number,
                default: null
            },
            inputId: {
                type: String,
                default: null
            },
            inputClass: {
                type: [String, Object],
                default: null
            },
            inputStyle: {
                type: Object,
                default: null
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
        emits: ['change', 'focus', 'blur'],
        style: RadioButtonStyle,
        provide() {
            return {
                $pcRadioButton: this,
                $parentInstance: this
            };
        },
        inject: {
            $pcRadioButtonGroup: {
                default: undefined
            }
        },
        methods: {
            getPTOptions(key) {
                const _ptm = key === 'root' ? this.ptmi : this.ptm;

                return _ptm(key, {
                    context: {
                        checked: this.checked,
                        disabled: this.disabled
                    }
                });
            },
            onChange(event) {
                if (!this.disabled && !this.readonly) {
                    const newModelValue = this.binary ? !this.checked : this.value;

                    this.$pcRadioButtonGroup ? this.$pcRadioButtonGroup.writeValue(newModelValue, event) : this.writeValue(newModelValue, event);
                    this.$emit('change', event);
                }
            },
            onFocus(event) {
                this.$emit('focus', event);
            },
            onBlur(event) {
                this.$emit('blur', event);
                this.formField.onBlur?.(event);
            }
        },
        computed: {
            groupName() {
                return this.$pcRadioButtonGroup ? this.$pcRadioButtonGroup.groupName : this.$formName;
            },
            checked() {
                const value = this.$pcRadioButtonGroup ? this.$pcRadioButtonGroup.d_value : this.d_value;

                return value != null && (this.binary ? !!value : equals(value, this.value));
            },
            dataP() {
                return cn({
                    invalid: this.$invalid,
                    checked: this.checked,
                    disabled: this.disabled,
                    filled: this.$variant === 'filled',
                    [this.size]: this.size
                });
            }
        }
    };
</script>

<template>
    <div :class="cx('root')" v-bind="getPTOptions('root')" :data-p-checked="checked" :data-p-disabled="disabled" :data-p="dataP">
        <input
            :id="inputId"
            type="radio"
            :class="[cx('input'), inputClass]"
            :style="inputStyle"
            :value="value"
            :name="groupName"
            :checked="checked"
            :tabindex="tabindex"
            :disabled="disabled"
            :readonly="readonly"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :aria-invalid="invalid || undefined"
            @focus="onFocus"
            @blur="onBlur"
            @change="onChange"
            v-bind="getPTOptions('input')"
        />
        <div :class="cx('box')" v-bind="getPTOptions('box')" :data-p="dataP">
            <div :class="cx('icon')" v-bind="getPTOptions('icon')" :data-p="dataP"></div>
        </div>
    </div>
</template>
