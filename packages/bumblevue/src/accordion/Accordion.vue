<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <template v-if="hasAccordionTab">
            <AccordionPanel v-for="(tab, i) of tabs" :key="getKey(tab, i)" :value="`${i}`" :pt="{ root: getTabPT(tab, 'root', i) }" :disabled="getTabProp(tab, 'disabled')">
                <AccordionHeader :class="getTabProp(tab, 'headerClass')" :pt="getHeaderPT(tab, i)">
                    <component v-if="tab.children && tab.children.headericon" :is="tab.children.headericon" :isTabActive="isItemActive(`${i}`)" :active="isItemActive(`${i}`)" :index="i"></component>
                    <span v-if="tab.props && tab.props.header" v-bind="getTabPT(tab, 'headertitle', i)">{{ tab.props.header }}</span>
                    <template #toggleicon="slotProps">
                        <component
                            v-if="slotProps.active"
                            :is="$slots.collapseicon ? $slots.collapseicon : collapseIcon ? 'span' : ChevronDownIcon"
                            :class="[collapseIcon, slotProps.class]"
                            aria-hidden="true"
                            v-bind="getTabPT(tab, 'headericon', i)"
                        />
                        <component v-else :is="$slots.expandicon ? $slots.expandicon : expandIcon ? 'span' : ChevronUpIcon" :class="[expandIcon, slotProps.class]" aria-hidden="true" v-bind="getTabPT(tab, 'headericon', i)" />
                    </template>
                    <component v-if="tab.children && tab.children.header" :is="tab.children.header"></component>
                </AccordionHeader>
                <AccordionContent :pt="getContentPT(tab, i)">
                    <component :is="tab"></component>
                </AccordionContent>
            </AccordionPanel>
        </template>

        <slot v-else></slot>
    </div>
</template>

<script setup>
import ChevronDownIcon from '@cjdevstudios/bumblevue-icons/chevrondown';
import ChevronUpIcon from '@cjdevstudios/bumblevue-icons/chevronup';
import { baseComponentProps, useComponent } from '@cjdevstudios/bumblevue-core/usecomponent';
import AccordionStyle from '@cjdevstudios/bumblevue/accordion/style';
import AccordionContent from '@cjdevstudios/bumblevue/accordioncontent';
import AccordionHeader from '@cjdevstudios/bumblevue/accordionheader';
import AccordionPanel from '@cjdevstudios/bumblevue/accordionpanel';
import { computed, mergeProps, provide, reactive, useSlots, watch } from 'vue';

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
    },
    // @deprecated since v4.
    activeIndex: {
        type: [Number, Array],
        default: null
    }
});

const emit = defineEmits(['update:value', 'update:activeIndex', 'tab-open', 'tab-close', 'tab-click']);

const slots = useSlots();

const state = reactive({
    d_value: props.value
});

const { instance, cx, ptm, ptmi, ptmo } = useComponent(props, {
    name: 'Accordion',
    style: AccordionStyle,
    state,
    members: { isItemActive, updateValue }
});

provide('$pcAccordion', instance);
provide('$parentInstance', instance);

// @deprecated since v4.
const tabs = computed(() =>
    slots.default().reduce((tabs, child) => {
        if (isAccordionTab(child)) {
            tabs.push(child);
        } else if (child.children && child.children instanceof Array) {
            child.children.forEach((nestedChild) => {
                if (isAccordionTab(nestedChild)) {
                    tabs.push(nestedChild);
                }
            });
        }

        return tabs;
    }, [])
);

const hasAccordionTab = computed(() => tabs.value.length);

watch(
    () => props.value,
    (newValue) => {
        state.d_value = newValue;
    }
);

watch(
    () => props.activeIndex,
    (newValue) => {
        if (hasAccordionTab.value) {
            state.d_value = props.multiple ? newValue?.map(String) : newValue?.toString();
        }
    },
    { immediate: true }
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

    // @deprecated since v4.
    emit('update:activeIndex', props.multiple ? state.d_value?.map(Number) : Number(state.d_value));
    emit(active ? 'tab-close' : 'tab-open', { originalEvent: undefined, index: Number(newValue) });
}

// @deprecated since v4. Use new structure instead.
function isAccordionTab(child) {
    return child.type.name === 'AccordionTab';
}

function getTabProp(tab, name) {
    return tab.props ? tab.props[name] : undefined;
}

function getKey(tab, index) {
    return getTabProp(tab, 'header') || index;
}

function getHeaderPT(tab, index) {
    return {
        root: mergeProps({ onClick: (event) => onTabClick(event, index) }, getTabProp(tab, 'headerProps'), getTabPT(tab, 'header', index)),
        toggleicon: mergeProps(getTabProp(tab, 'headeractionprops'), getTabPT(tab, 'headeraction', index))
    };
}

function getContentPT(tab, index) {
    return {
        root: mergeProps(getTabProp(tab, 'contentProps'), getTabPT(tab, 'toggleablecontent', index)),
        transition: getTabPT(tab, 'transition', index),
        content: getTabPT(tab, 'content', index)
    };
}

function getTabPT(tab, key, index) {
    const count = tabs.value.length;
    const tabMetaData = {
        props: tab.props || {},
        parent: {
            instance,
            props,
            state
        },
        context: {
            index,
            count,
            first: index === 0,
            last: index === count - 1,
            active: isItemActive(`${index}`)
        }
    };

    return mergeProps(ptm(`accordiontab.${key}`, tabMetaData), ptmo(getTabProp(tab, 'pt'), key, tabMetaData));
}

function onTabClick(event, index) {
    emit('tab-click', { originalEvent: event, index });
}
</script>
