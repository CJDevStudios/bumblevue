import { isEmpty, isNotEmpty, isObject, matchRegex, minifyCSS, resolve } from '@cjdevstudios/bumblevue/utils/object';
import { dt, toVariables } from '../helpers/index.js';
import { CALC_REGEX, EXPR_REGEX, getRule, toTokenKey, VAR_REGEX } from './sharedUtils.js';

export default {
    regex: {
        rules: {
            class: {
                pattern: /^\.([a-zA-Z][\w-]*)$/,
                resolve(value) {
                    return { type: 'class', selector: value, matched: this.pattern.test(value.trim()) };
                }
            },
            attr: {
                pattern: /^\[(.*)\]$/,
                resolve(value) {
                    return { type: 'attr', selector: `:root${value},:host${value}`, matched: this.pattern.test(value.trim()) };
                }
            },
            media: {
                pattern: /^@media (.*)$/,
                resolve(value) {
                    return { type: 'media', selector: value, matched: this.pattern.test(value.trim()) };
                }
            },
            system: {
                pattern: /^system$/,
                resolve(value) {
                    return { type: 'system', selector: '@media (prefers-color-scheme: dark)', matched: this.pattern.test(value.trim()) };
                }
            },
            custom: {
                resolve(value) {
                    return { type: 'custom', selector: value, matched: true };
                }
            }
        },
        resolve(value) {
            const rules = Object.keys(this.rules)
                .filter((k) => k !== 'custom')
                .map((r) => this.rules[r]);

            return [value].flat().map((v) => rules.map((r) => r.resolve(v)).find((rr) => rr.matched) ?? this.rules.custom.resolve(v));
        }
    },
    _toVariables(theme, options) {
        return toVariables(theme, { prefix: options?.prefix });
    },
    getCommon({ name = '', theme = {}, params, set, defaults }) {
        const { preset, options } = theme;
        let primitive_css, primitive_tokens, semantic_css, semantic_tokens, global_css, global_tokens, style;

        // @todo - check if options is not empty
        if (isNotEmpty(preset) && options.transform !== 'strict') {
            const { primitive, semantic, extend } = preset;
            const { colorScheme, ...sRest } = semantic || {};
            const { colorScheme: eColorScheme, ...eRest } = extend || {};
            const { dark, ...csRest } = colorScheme || {};
            const { dark: eDark, ...ecsRest } = eColorScheme || {};
            const prim_var = isNotEmpty(primitive) ? this._toVariables({ primitive }, options) : {};
            const sRest_var = isNotEmpty(sRest) ? this._toVariables({ semantic: sRest }, options) : {};
            const csRest_var = isNotEmpty(csRest) ? this._toVariables({ light: csRest }, options) : {};
            const csDark_var = isNotEmpty(dark) ? this._toVariables({ dark }, options) : {};
            const eRest_var = isNotEmpty(eRest) ? this._toVariables({ semantic: eRest }, options) : {};
            const ecsRest_var = isNotEmpty(ecsRest) ? this._toVariables({ light: ecsRest }, options) : {};
            const ecsDark_var = isNotEmpty(eDark) ? this._toVariables({ dark: eDark }, options) : {};

            const [prim_css, prim_tokens] = [prim_var.declarations ?? '', prim_var.tokens];
            const [sRest_css, sRest_tokens] = [sRest_var.declarations ?? '', sRest_var.tokens || []];
            const [csRest_css, csRest_tokens] = [csRest_var.declarations ?? '', csRest_var.tokens || []];
            const [csDark_css, csDark_tokens] = [csDark_var.declarations ?? '', csDark_var.tokens || []];
            const [eRest_css, eRest_tokens] = [eRest_var.declarations ?? '', eRest_var.tokens || []];
            const [ecsRest_css, ecsRest_tokens] = [ecsRest_var.declarations ?? '', ecsRest_var.tokens || []];
            const [ecsDark_css, ecsDark_tokens] = [ecsDark_var.declarations ?? '', ecsDark_var.tokens || []];

            primitive_css = this.transformCSS(name, prim_css, 'light', 'variable', options, set, defaults);
            primitive_tokens = prim_tokens;

            const semantic_light_css = this.transformCSS(name, `${sRest_css}${csRest_css}`, 'light', 'variable', options, set, defaults);
            const semantic_dark_css = this.transformCSS(name, `${csDark_css}`, 'dark', 'variable', options, set, defaults);

            semantic_css = `${semantic_light_css}${semantic_dark_css}`;
            semantic_tokens = [...new Set([...sRest_tokens, ...csRest_tokens, ...csDark_tokens])];

            const global_light_css = this.transformCSS(name, `${eRest_css}${ecsRest_css}color-scheme:light`, 'light', 'variable', options, set, defaults);
            const global_dark_css = this.transformCSS(name, `${ecsDark_css}color-scheme:dark`, 'dark', 'variable', options, set, defaults);

            global_css = `${global_light_css}${global_dark_css}`;
            global_tokens = [...new Set([...eRest_tokens, ...ecsRest_tokens, ...ecsDark_tokens])];

            style = resolve(preset.css, { dt });
        }

        return {
            primitive: {
                css: primitive_css,
                tokens: primitive_tokens
            },
            semantic: {
                css: semantic_css,
                tokens: semantic_tokens
            },
            global: {
                css: global_css,
                tokens: global_tokens
            },
            style
        };
    },
    getPreset({ name = '', preset = {}, options, params, set, defaults, selector }) {
        let p_css, p_tokens, p_style;

        if (isNotEmpty(preset) && options.transform !== 'strict') {
            const _name = name.replace('-directive', '');
            const { colorScheme, extend, css, ...vRest } = preset;
            const { colorScheme: eColorScheme, ...evRest } = extend || {};
            const { dark, ...csRest } = colorScheme || {};
            const { dark: ecsDark, ...ecsRest } = eColorScheme || {};
            const vRest_var = isNotEmpty(vRest) ? this._toVariables({ [_name]: { ...vRest, ...evRest } }, options) : {};
            const csRest_var = isNotEmpty(csRest) ? this._toVariables({ [_name]: { ...csRest, ...ecsRest } }, options) : {};
            const csDark_var = isNotEmpty(dark) ? this._toVariables({ [_name]: { ...dark, ...ecsDark } }, options) : {};

            const [vRest_css, vRest_tokens] = [vRest_var.declarations ?? '', vRest_var.tokens || []];
            const [csRest_css, csRest_tokens] = [csRest_var.declarations ?? '', csRest_var.tokens || []];
            const [csDark_css, csDark_tokens] = [csDark_var.declarations ?? '', csDark_var.tokens || []];

            const light_variable_css = this.transformCSS(_name, `${vRest_css}${csRest_css}`, 'light', 'variable', options, set, defaults, selector);
            const dark_variable_css = this.transformCSS(_name, csDark_css, 'dark', 'variable', options, set, defaults, selector);

            p_css = `${light_variable_css}${dark_variable_css}`;
            p_tokens = [...new Set([...vRest_tokens, ...csRest_tokens, ...csDark_tokens])];

            p_style = resolve(css, { dt });
        }

        return {
            css: p_css,
            tokens: p_tokens,
            style: p_style
        };
    },
    getPresetC({ name = '', theme = {}, params, set, defaults }) {
        const { preset, options } = theme;
        const cPreset = preset?.components?.[name];

        return this.getPreset({ name, preset: cPreset, options, params, set, defaults });
    },
    // @deprecated - use getPresetC instead
    getPresetD({ name = '', theme = {}, params, set, defaults }) {
        const dName = name.replace('-directive', '');
        const { preset, options } = theme;
        const dPreset = preset?.components?.[dName] || preset?.directives?.[dName];

        return this.getPreset({ name: dName, preset: dPreset, options, params, set, defaults });
    },
    applyDarkColorScheme(options) {
        return !(options.darkModeSelector === 'none' || options.darkModeSelector === false);
    },
    getColorSchemeOption(options, defaults) {
        return this.applyDarkColorScheme(options) ? this.regex.resolve(options.darkModeSelector === true ? defaults.options.darkModeSelector : (options.darkModeSelector ?? defaults.options.darkModeSelector)) : [];
    },
    getLayerOrder(name, options = {}, params, defaults) {
        const { cssLayer } = options;

        if (cssLayer) {
            const order = resolve(cssLayer.order || cssLayer.name || 'primeui', params);

            return `@layer ${order}`;
        }

        return '';
    },
    getCommonStyleSheet({ name = '', theme = {}, params, props = {}, set, defaults }) {
        const common = this.getCommon({ name, theme, params, set, defaults });
        const _props = Object.entries(props)
            .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');

        return Object.entries(common || {})
            .reduce((acc, [key, value]) => {
                if (isObject(value) && Object.hasOwn(value, 'css')) {
                    const _css = minifyCSS(value.css);
                    const id = `${key}-variables`;

                    acc.push(`<style type="text/css" data-bumblevue-style-id="${id}" ${_props}>${_css}</style>`);
                }

                return acc;
            }, [])
            .join('');
    },
    getStyleSheet({ name = '', theme = {}, params, props = {}, set, defaults }) {
        const options = { name, theme, params, set, defaults };
        const preset_css = (name.includes('-directive') ? this.getPresetD(options) : this.getPresetC(options))?.css;
        const _props = Object.entries(props)
            .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
            .join(' ');

        return preset_css ? `<style type="text/css" data-bumblevue-style-id="${name}-variables" ${_props}>${minifyCSS(preset_css)}</style>` : ''; // @todo check
    },
    createTokens(obj = {}, defaults, parentKey = '', parentPath = '', tokens = {}) {
        const computedFn = function (colorScheme, tokenPathMap = {}, stack = []) {
            if (stack.includes(this.path)) {
                console.warn(`Circular reference detected at ${this.path}`);

                return {
                    colorScheme,
                    path: this.path,
                    paths: tokenPathMap,
                    value: undefined
                };
            }

            stack.push(this.path);
            tokenPathMap['name'] = this.path;
            tokenPathMap['binding'] ||= {};

            let computedValue = this.value;

            if (typeof this.value === 'string' && EXPR_REGEX.test(this.value)) {
                const val = this.value.trim();
                const _val = val.replace(EXPR_REGEX, (v) => {
                    const refPath = v.slice(1, -1);
                    const refToken = this.tokens[refPath];

                    if (!refToken) {
                        console.warn(`Token not found for path: ${refPath}`);

                        return `__UNRESOLVED__`;
                    }

                    const computed = refToken.computed(colorScheme, tokenPathMap, stack);

                    if (Array.isArray(computed) && computed.length === 2) {
                        return `light-dark(${computed[0].value},${computed[1].value})`;
                    } else {
                        return computed?.value ?? `__UNRESOLVED__`;
                    }
                });

                computedValue = CALC_REGEX.test(_val.replace(VAR_REGEX, '0')) ? `calc(${_val})` : _val;
            }

            if (isEmpty(tokenPathMap['binding'])) {
                delete tokenPathMap['binding'];
            }

            stack.pop();

            return {
                colorScheme,
                path: this.path,
                paths: tokenPathMap,
                value: computedValue.includes('__UNRESOLVED__') ? undefined : computedValue
            };
        };

        const traverse = (obj, parentKey, parentPath) => {
            Object.entries(obj).forEach(([key, value]) => {
                const currentKey = matchRegex(key, defaults.variable.excludedKeyRegex) ? parentKey : parentKey ? `${parentKey}.${toTokenKey(key)}` : toTokenKey(key);

                const currentPath = parentPath ? `${parentPath}.${key}` : key;

                if (isObject(value)) {
                    traverse(value, currentKey, currentPath);
                } else {
                    if (!tokens[currentKey]) {
                        tokens[currentKey] = {
                            paths: [],
                            computed: (colorScheme, tokenPathMap = {}, stack = []) => {
                                if (tokens[currentKey].paths.length === 1) {
                                    return tokens[currentKey].paths[0].computed(tokens[currentKey].paths[0].scheme, tokenPathMap['binding'], stack);
                                } else if (colorScheme && colorScheme !== 'none') {
                                    for (let i = 0; i < tokens[currentKey].paths.length; i++) {
                                        const p = tokens[currentKey].paths[i];

                                        if (p.scheme === colorScheme) {
                                            return p.computed(colorScheme, tokenPathMap['binding'], stack);
                                        }
                                    }
                                }

                                return tokens[currentKey].paths.map((p) => p.computed(p.scheme, tokenPathMap[p.scheme], stack));
                            }
                        };
                    }

                    tokens[currentKey].paths.push({
                        path: currentPath,
                        value,
                        scheme: currentPath.includes('colorScheme.light') ? 'light' : currentPath.includes('colorScheme.dark') ? 'dark' : 'none',
                        computed: computedFn,
                        tokens
                    });
                }
            });
        };

        traverse(obj, parentKey, parentPath);

        return tokens;
    },
    getTokenValue(tokens, path, defaults) {
        const normalizePath = (str) => {
            const strArr = str.split('.');

            return strArr.filter((s) => !matchRegex(s.toLowerCase(), defaults.variable.excludedKeyRegex)).join('.');
        };

        const token = normalizePath(path);
        const colorScheme = path.includes('colorScheme.light') ? 'light' : path.includes('colorScheme.dark') ? 'dark' : undefined;
        const computedValues = [tokens[token]?.computed(colorScheme)].flat().filter((computed) => computed);

        return computedValues.length === 1
            ? computedValues[0].value
            : computedValues.reduce((acc = {}, computed) => {
                  const { colorScheme: cs, ...rest } = computed;

                  acc[cs] = rest;

                  return acc;
              }, undefined);
    },
    getSelectorRule(selector1, selector2, type, css) {
        return type === 'class' || type === 'attr' ? getRule(isNotEmpty(selector2) ? `${selector1}${selector2},${selector1} ${selector2}` : selector1, css) : getRule(selector1, getRule(selector2 ?? ':root,:host', css));
    },
    transformCSS(name, css, mode, type, options = {}, set, defaults, selector) {
        if (isNotEmpty(css)) {
            const { cssLayer } = options;

            if (type !== 'style') {
                const colorSchemeOption = this.getColorSchemeOption(options, defaults);

                css =
                    mode === 'dark'
                        ? colorSchemeOption.reduce((acc, { type, selector: _selector }) => {
                              if (isNotEmpty(_selector)) {
                                  acc += _selector.includes('[CSS]') ? _selector.replace('[CSS]', css) : this.getSelectorRule(_selector, selector, type, css);
                              }

                              return acc;
                          }, '')
                        : getRule(selector ?? ':root,:host', css);
            }

            if (cssLayer) {
                const layerOptions = {
                    name: 'bumbleuix',
                    order: 'bumbleuix'
                };

                isObject(cssLayer) && (layerOptions.name = resolve(cssLayer.name, { name, type }));

                if (isNotEmpty(layerOptions.name)) {
                    css = getRule(`@layer ${layerOptions.name}`, css);
                    set?.layerNames(layerOptions.name);
                }
            }

            return css;
        }

        return '';
    }
};
