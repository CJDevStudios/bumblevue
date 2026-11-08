<template>
    <input type="text" :class="cx('root')" :value="d_value" :name="name" :disabled="disabled" :aria-invalid="$invalid || undefined" :data-p="dataP" @input="onInput" v-bind="attrs" />
</template>

<script>
    import { cn } from '@cjdevstudios/bumblevue/utils';
    import BaseInput from '@cjdevstudios/bumblevue/core/baseinput';
    import InputTextStyle from '@cjdevstudios/bumblevue/inputtext/style';
    import { mergeProps } from 'vue';

    export default {
        name: 'InputText',
        extends: BaseInput,
        inheritAttrs: false,
        style: InputTextStyle,
        provide() {
            return {
                $pcInputText: this,
                $parentInstance: this
            };
        },
        methods: {
            onInput(event) {
                this.writeValue(event.target.value, event);
            }
        },
        computed: {
            attrs() {
                return mergeProps(
                    this.ptmi('root', {
                        context: {
                            filled: this.$filled,
                            disabled: this.disabled
                        }
                    }),
                    this.formField
                );
            },
            dataP() {
                return cn({
                    invalid: this.$invalid,
                    fluid: this.$fluid,
                    filled: this.$variant === 'filled',
                    [this.size]: this.size
                });
            }
        }
    };
</script>
