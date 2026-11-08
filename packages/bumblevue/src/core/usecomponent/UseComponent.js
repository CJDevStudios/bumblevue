import { Theme, ThemeService } from '@cjdevstudios/bumblevue/styled';
import { findSingle, isElement } from '@cjdevstudios/bumblevue/utils/dom';
import { getKeyValue, isArray, isFunction, isEmpty, isString, resolve, toFlatCase } from '@cjdevstudios/bumblevue/utils/object';
import Base from '@cjdevstudios/bumblevue/core/base';
import BaseStyle from '@cjdevstudios/bumblevue/core/base/style';
import BaseComponentStyle from '@cjdevstudios/bumblevue/core/basecomponent/style';
import { useAttrSelector } from '@cjdevstudios/bumblevue/core/useattrselector';
import { computed, getCurrentInstance, inject, mergeProps, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, useAttrs, useSlots, watch } from 'vue';

/**
 * Composition API replacement for BaseComponent.
 * The implementation mirrors basecomponent/BaseComponent.vue; keep the two in sync until BaseComponent is removed.
 */
export const baseComponentProps = {
    pt: {
        type: Object,
        default: undefined
    },
    ptOptions: {
        type: Object,
        default: undefined
    },
    unstyled: {
        type: Boolean,
        default: undefined
    },
    dt: {
        type: Object,
        default: undefined
    }
};

export function useComponent(props, { name, style, hostName, state = {}, members = {} } = {}) {
    const vm = getCurrentInstance();
    const attrs = useAttrs();
    const slots = useSlots();
    const $parentInstance = inject('$parentInstance', undefined);
    const typeName = name || vm.type.name;

    let scopedStyleEl = undefined;
    let rootEl = undefined;
    let _themeScopedListener = undefined;

    // Stand-in for the Options API `this`, used by PT functions, child components ($pcX / $parentInstance injections) and host instance lookups.
    const compat = {
        $props: () => props,
        $attrs: () => attrs,
        $slots: () => slots,
        $data: () => state,
        $el: () => vm.proxy?.$el,
        $emit: () => vm.emit,
        $parent: () => vm.parent?.proxy,
        $parentInstance: () => $parentInstance,
        $: () => vm,
        $options: () => ({ ...vm.type, hostName, style }),
        $attrSelector: () => $attrSelector,
        $id: () => $id.value,
        $name: () => $name.value,
        $style: () => $style.value,
        $params: () => $params.value,
        $bumblevueConfig: () => $bumblevueConfig.value,
        isUnstyled: () => isUnstyled.value,
        cx: () => cx,
        sx: () => sx,
        ptm: () => ptm,
        ptmi: () => ptmi,
        ptmo: () => ptmo
    };

    const instance = new Proxy(
        {},
        {
            get(_, key) {
                if (key === '__v_skip') return true;
                if (typeof key === 'string' && key.startsWith('__v_')) return undefined;
                if (Object.prototype.hasOwnProperty.call(compat, key)) return compat[key]();
                if (key in members) return members[key];
                if (key in state) return state[key];

                return props[key];
            },
            has(_, key) {
                return key in compat || key in members || key in state || key in props;
            }
        }
    );

    // computed
    const $bumblevueConfig = computed(() => vm.proxy.$bumblevue?.config);
    const $name = computed(() => hostName || typeName);
    const $theme = computed(() => $bumblevueConfig.value?.theme);
    const $styleOptions = computed(() => ({ nonce: $bumblevueConfig.value?.csp?.nonce }));
    const isUnstyled = computed(() => (props.unstyled !== undefined ? props.unstyled : $bumblevueConfig.value?.unstyled));
    const $style = computed(() => ({ classes: undefined, inlineStyles: undefined, load: () => {}, loadCSS: () => {}, loadStyle: () => {}, ...(_getHostInstance(instance) || {}).$style, ...style }));
    const $params = computed(() => {
        const parentInstance = _getHostInstance(instance) || vm.parent?.proxy;

        return {
            instance,
            props,
            state,
            attrs,
            parent: {
                instance: parentInstance,
                props: parentInstance?.$props,
                state: parentInstance?.$data,
                attrs: parentInstance?.$attrs
            }
        };
    });
    const $inProps = computed(() => {
        const nodePropKeys = Object.keys(vm.vnode?.props || {});

        return Object.fromEntries(Object.entries(props).filter(([k]) => nodePropKeys?.includes(k)));
    });
    const globalPT = computed(() => _getPT($bumblevueConfig.value?.pt, undefined, (value) => resolve(value, { instance })));
    const defaultPT = computed(() => _getPT($bumblevueConfig.value?.pt, undefined, (value) => _getOptionValue(value, $name.value, { ...$params.value }) || resolve(value, { ...$params.value })));
    const $_attrsPT = computed(() =>
        Object.entries(attrs || {})
            .filter(([key]) => key?.startsWith('pt:'))
            .reduce((result, [key, value]) => {
                const [, ...rest] = key.split(':');

                rest?.reduce((currentObj, nestedKey, index, array) => {
                    !currentObj[nestedKey] && (currentObj[nestedKey] = index === array.length - 1 ? value : {});

                    return currentObj[nestedKey];
                }, result);

                return result;
            }, {})
    );
    const $_attrsWithoutPT = computed(() =>
        Object.entries(attrs || {})
            .filter(([key]) => !key?.startsWith('pt:'))
            .reduce((acc, [key, value]) => {
                acc[key] = value;

                return acc;
            }, {})
    );

    // methods
    function _hook(hookName) {
        if (!hostName) {
            const selfHook = _usePT(_getPT(props.pt, typeName), _getOptionValue, `hooks.${hookName}`);
            const defaultHook = _useDefaultPT(_getOptionValue, `hooks.${hookName}`);

            selfHook?.();
            defaultHook?.();
        }
    }

    function _mergeProps(fn, ...args) {
        return isFunction(fn) ? fn(...args) : mergeProps(...args);
    }

    function _load() {
        // @todo
        if (!Base.isStyleNameLoaded('base')) {
            BaseStyle.loadCSS($styleOptions.value);
            _loadGlobalStyles();

            Base.setLoadedStyleName('base');
        }

        _loadThemeStyles();
    }

    function _loadStyles() {
        _load();
        _themeChangeListener(_load);
    }

    function _loadCoreStyles() {
        if (!Base.isStyleNameLoaded($style.value?.name) && $style.value?.name) {
            BaseComponentStyle.loadCSS($styleOptions.value);
            style && $style.value.loadCSS($styleOptions.value);

            Base.setLoadedStyleName($style.value.name);
        }
    }

    function _loadGlobalStyles() {
        const globalCSS = _useGlobalPT(_getOptionValue, 'global.css', $params.value);

        !isEmpty(globalCSS) && BaseStyle.load(globalCSS, { name: 'global', ...$styleOptions.value });
    }

    function _loadThemeStyles() {
        if (isUnstyled.value || $theme.value === 'none') return;

        // common
        if (!Theme.isStyleNameLoaded('common')) {
            const { primitive, semantic, global, style } = $style.value?.getCommonTheme?.() || {};

            BaseStyle.load(primitive?.css, { name: 'primitive-variables', ...$styleOptions.value });
            BaseStyle.load(semantic?.css, { name: 'semantic-variables', ...$styleOptions.value });
            BaseStyle.load(global?.css, { name: 'global-variables', ...$styleOptions.value });
            BaseStyle.loadStyle({ name: 'global-style', ...$styleOptions.value }, style);

            Theme.setLoadedStyleName('common');
        }

        // component
        if (!Theme.isStyleNameLoaded($style.value?.name) && $style.value?.name) {
            const { css, style } = $style.value?.getComponentTheme?.() || {};

            $style.value?.load(css, { name: `${$style.value.name}-variables`, ...$styleOptions.value });
            $style.value?.loadStyle({ name: `${$style.value.name}-style`, ...$styleOptions.value }, style);

            Theme.setLoadedStyleName($style.value.name);
        }

        // layer order
        if (!Theme.isStyleNameLoaded('layer-order')) {
            const layerOrder = $style.value?.getLayerOrderThemeCSS?.();

            BaseStyle.load(layerOrder, { name: 'layer-order', first: true, ...$styleOptions.value });

            Theme.setLoadedStyleName('layer-order');
        }
    }

    function _loadScopedThemeStyles(preset) {
        const { css } = $style.value?.getPresetTheme?.(preset, `[${$attrSelector}]`) || {};
        const scopedStyle = $style.value?.load(css, { name: `${$attrSelector}-${$style.value.name}`, ...$styleOptions.value });

        scopedStyleEl = scopedStyle.el;
    }

    function _unloadScopedThemeStyles() {
        scopedStyleEl?.value?.remove();
    }

    function _themeChangeListener(callback = () => {}) {
        Base.clearLoadedStyleNames();
        ThemeService.on('theme:change', callback);
    }

    function _removeThemeListeners() {
        ThemeService.off('theme:change', _loadCoreStyles);
        ThemeService.off('theme:change', _load);
        ThemeService.off('theme:change', _themeScopedListener);
    }

    function _getHostInstance(inst) {
        return inst ? (hostName ? (inst.$.type.name === hostName ? inst : _getHostInstance(inst.$parentInstance)) : inst.$parentInstance) : undefined;
    }

    function _getPropValue(name) {
        return props[name] || _getHostInstance(instance)?.[name];
    }

    function _getOptionValue(options, key = '', params = {}) {
        return getKeyValue(options, key, params);
    }

    function _getPTValue(obj = {}, key = '', params = {}, searchInDefaultPT = true) {
        const searchOut = /./g.test(key) && !!params[key.split('.')[0]];
        const { mergeSections = true, mergeProps: useMergeProps = false } = _getPropValue('ptOptions') || $bumblevueConfig.value?.ptOptions || {};
        const global = searchInDefaultPT ? (searchOut ? _useGlobalPT(_getPTClassValue, key, params) : _useDefaultPT(_getPTClassValue, key, params)) : undefined;
        const self = searchOut ? undefined : _getPTSelf(obj, _getPTClassValue, key, { ...params, global: global || {} });
        const datasets = _getPTDatasets(key);

        return mergeSections || (!mergeSections && self) ? (useMergeProps ? _mergeProps(useMergeProps, global, self, datasets) : { ...global, ...self, ...datasets }) : { ...self, ...datasets };
    }

    function _getPTSelf(obj = {}, ...args) {
        return mergeProps(
            _usePT(_getPT(obj, $name.value), ...args), // Exp; <component :pt="{}"
            _usePT($_attrsPT.value, ...args) // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
        );
    }

    function _getPTDatasets(key = '') {
        const datasetPrefix = 'data-pc-';
        const isExtended = key === 'root' && !isEmpty(props.pt?.['data-pc-section']);

        return (
            key !== 'transition' && {
                ...(key === 'root' && {
                    [`${datasetPrefix}name`]: toFlatCase(isExtended ? props.pt?.['data-pc-section'] : typeName),
                    ...(isExtended && { [`${datasetPrefix}extend`]: toFlatCase(typeName) }),
                    [`${$attrSelector}`]: ''
                }),
                [`${datasetPrefix}section`]: toFlatCase(key)
            }
        );
    }

    function _getPTClassValue(...args) {
        const value = _getOptionValue(...args);

        return isString(value) || isArray(value) ? { class: value } : value;
    }

    function _getPT(pt, key = '', callback) {
        const getValue = (value, checkSameKey = false) => {
            const computedValue = callback ? callback(value) : value;
            const _key = toFlatCase(key);
            const _cKey = toFlatCase($name.value);

            return (checkSameKey ? (_key !== _cKey ? computedValue?.[_key] : undefined) : computedValue?.[_key]) ?? computedValue;
        };

        return Object.prototype.hasOwnProperty.call(pt ?? {}, '_usept')
            ? {
                  _usept: pt['_usept'],
                  originalValue: getValue(pt.originalValue),
                  value: getValue(pt.value)
              }
            : getValue(pt, true);
    }

    function _usePT(pt, callback, key, params) {
        const fn = (value) => callback(value, key, params);

        if (Object.prototype.hasOwnProperty.call(pt ?? {}, '_usept')) {
            const { mergeSections = true, mergeProps: useMergeProps = false } = pt['_usept'] || $bumblevueConfig.value?.ptOptions || {};
            const originalValue = fn(pt.originalValue);
            const value = fn(pt.value);

            if (originalValue === undefined && value === undefined) return undefined;
            else if (isString(value)) return value;
            else if (isString(originalValue)) return originalValue;

            return mergeSections || (!mergeSections && value) ? (useMergeProps ? _mergeProps(useMergeProps, originalValue, value) : { ...originalValue, ...value }) : value;
        }

        return fn(pt);
    }

    function _useGlobalPT(callback, key, params) {
        return _usePT(globalPT.value, callback, key, params);
    }

    function _useDefaultPT(callback, key, params) {
        return _usePT(defaultPT.value, callback, key, params);
    }

    function ptm(key = '', params = {}) {
        return _getPTValue(props.pt, key, { ...$params.value, ...params });
    }

    function ptmi(key = '', params = {}) {
        // inheritAttrs:true
        const attrs = mergeProps($_attrsWithoutPT.value, ptm(key, params));

        Object.prototype.hasOwnProperty.call(attrs ?? {}, 'id') && (attrs.id ??= $id.value);

        return attrs;
    }

    function ptmo(obj = {}, key = '', params = {}) {
        return _getPTValue(obj, key, { instance, ...params }, false);
    }

    function cx(key = '', params = {}) {
        return !isUnstyled.value ? _getOptionValue($style.value.classes, key, { ...$params.value, ...params }) : undefined;
    }

    function sx(key = '', when = true, params = {}) {
        if (when) {
            const self = _getOptionValue($style.value.inlineStyles, key, { ...$params.value, ...params });
            const base = _getOptionValue(BaseComponentStyle.inlineStyles, key, { ...$params.value, ...params });

            return [base, self];
        }

        return undefined;
    }

    // beforeCreate
    const _usept = props.pt?.['_usept'];
    const originalValue = _usept ? props.pt?.originalValue?.[typeName] : undefined;
    const value = _usept ? props.pt?.value?.[typeName] : props.pt;

    (value || originalValue)?.hooks?.['onBeforeCreate']?.();

    const _useptInConfig = $bumblevueConfig.value?.pt?.['_usept'];
    const originalValueInConfig = _useptInConfig ? vm.proxy.$bumblevue?.config?.pt?.originalValue : undefined;
    const valueInConfig = _useptInConfig ? vm.proxy.$bumblevue?.config?.pt?.value : vm.proxy.$bumblevue?.config?.pt;

    (valueInConfig || originalValueInConfig)?.[typeName]?.hooks?.['onBeforeCreate']?.();

    const $attrSelector = useAttrSelector();
    const uid = attrs.id || $attrSelector.replace('pc', 'pv_id_');
    const $id = computed(() => attrs.id || uid);

    // watch
    watch(
        isUnstyled,
        (newValue) => {
            ThemeService.off('theme:change', _loadCoreStyles);

            if (!newValue) {
                _loadCoreStyles();
                _themeChangeListener(_loadCoreStyles); // update styles with theme settings
            }
        },
        { immediate: true }
    );

    watch(
        () => props.dt,
        (newValue) => {
            ThemeService.off('theme:change', _themeScopedListener);

            if (newValue) {
                _loadScopedThemeStyles(newValue);
                _themeScopedListener = () => _loadScopedThemeStyles(newValue);
                _themeChangeListener(_themeScopedListener);
            } else {
                _unloadScopedThemeStyles();
            }
        },
        { immediate: true }
    );

    // created
    _hook('onCreated');

    onBeforeMount(() => {
        // @deprecated - remove in v5
        rootEl = findSingle(isElement(vm.proxy.$el) ? vm.proxy.$el : vm.proxy.$el?.parentElement, `[${$attrSelector}]`);

        if (rootEl) {
            rootEl.$pc = { name: typeName, attrSelector: $attrSelector, ...$params.value };
        }

        _loadStyles();
        _hook('onBeforeMount');
    });
    onMounted(() => _hook('onMounted'));
    onBeforeUpdate(() => _hook('onBeforeUpdate'));
    onUpdated(() => _hook('onUpdated'));
    onBeforeUnmount(() => _hook('onBeforeUnmount'));
    onUnmounted(() => {
        _removeThemeListeners();
        _unloadScopedThemeStyles();
        _hook('onUnmounted');
    });

    return {
        instance,
        cx,
        sx,
        ptm,
        ptmi,
        ptmo,
        $id,
        $name,
        $attrSelector,
        $style,
        $params,
        $inProps,
        $bumblevueConfig,
        isUnstyled
    };
}
