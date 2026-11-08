<script>
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import StepperStyle from '@cjdevstudios/bumblevue/stepper/style';

    export default {
        name: 'Stepper',
        extends: BaseComponent,
        inheritAttrs: false,
        props: {
            value: {
                type: [String, Number],
                default: undefined
            },
            linear: {
                type: Boolean,
                default: false
            }
        },
        emits: ['update:value'],
        style: StepperStyle,
        provide() {
            return {
                $pcStepper: this,
                $parentInstance: this,
                $pcStepItem: null
            };
        },
        data() {
            return {
                d_value: this.value
            };
        },
        watch: {
            value(newValue) {
                this.d_value = newValue;
            }
        },
        methods: {
            updateValue(newValue) {
                if (this.d_value !== newValue) {
                    this.d_value = newValue;
                    this.$emit('update:value', newValue);
                }
            },
            isStepActive(value) {
                return this.d_value === value;
            },
            isStepDisabled() {
                return this.linear;
            }
        }
    };
</script>

<template>
    <div :class="cx('root')" role="tablist" v-bind="ptmi('root')">
        <slot v-if="$slots.start" name="start" />
        <slot />
        <slot v-if="$slots.end" name="end" />
    </div>
</template>
