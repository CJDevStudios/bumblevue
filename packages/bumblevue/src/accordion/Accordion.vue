<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot></slot>
    </div>
</template>

<script setup>
    import { baseComponentProps, useComponent } from '@cjdevstudios/bumblevue/core/usecomponent';
    import AccordionStyle from '@cjdevstudios/bumblevue/accordion/style';
    import { provide, reactive, watch } from 'vue';

    defineOptions({
        name: 'Accordion',
        inheritAttrs: false
    });

    const props = defineProps({
        ...baseComponentProps,
        value: {
            type: [String, Number, Array],
            default: undefined
        },
        multiple: {
            type: Boolean,
            default: false
        },
        lazy: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        },
        expandIcon: {
            type: String,
            default: undefined
        },
        collapseIcon: {
            type: String,
            default: undefined
        }
    });

    const emit = defineEmits(['update:value']);

    const state = reactive({
        d_value: props.value
    });

    const { instance, cx, ptmi } = useComponent(props, {
        name: 'Accordion',
        style: AccordionStyle,
        state,
        members: { isItemActive, updateValue }
    });

    provide('$pcAccordion', instance);
    provide('$parentInstance', instance);

    watch(
        () => props.value,
        (newValue) => {
            state.d_value = newValue;
        }
    );

    function isItemActive(value) {
        return props.multiple ? state.d_value?.includes(value) : state.d_value === value;
    }

    function updateValue(newValue) {
        const active = isItemActive(newValue);

        if (props.multiple) {
            if (active) {
                state.d_value = state.d_value.filter((v) => v !== newValue);
            } else {
                if (state.d_value) state.d_value.push(newValue);
                else state.d_value = [newValue];
            }
        } else {
            state.d_value = active ? null : newValue;
        }

        emit('update:value', state.d_value);
    }
</script>
