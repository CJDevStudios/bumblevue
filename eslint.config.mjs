import eslint from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginVue.configs['flat/recommended'],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
                vi: 'readonly',
                defineNuxtConfig: 'readonly',
                defineNuxtPlugin: 'readonly',
                defineNuxtLink: 'readonly',
                defineNuxtRouteMiddleware: 'readonly',
                defineEventHandler: 'readonly',
                useRuntimeConfig: 'readonly',
                useNuxtApp: 'readonly'
            }
        },
        rules: {
            'no-empty': 'off',
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-fallthrough': 'off',
            'padding-line-between-statements': [
                //TODO evaluate this rule's configuration later or remove
                'off',
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
                { blankLine: 'any', prev: ['case', 'default'], next: 'break' },
                { blankLine: 'any', prev: 'case', next: 'case' },
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: 'block', next: '*' },
                { blankLine: 'always', prev: '*', next: 'block' },
                { blankLine: 'always', prev: 'block-like', next: '*' },
                { blankLine: 'always', prev: '*', next: 'block-like' },
                { blankLine: 'always', prev: ['import'], next: ['const', 'let', 'var'] }
            ],
            'no-unused-vars': [
                'warn',
                {
                    varsIgnorePattern: '^_'
                }
            ],
            //TODO Try to re-enable these later as errors
            'no-case-declarations': 'warn',
            'no-constant-binary-expression': 'warn',
            'no-extra-boolean-cast': 'warn',
            'no-prototype-builtins': 'warn',
            'no-undef': 'warn',
            'no-useless-escape': 'warn',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-this-alias': 'off',
            '@typescript-eslint/no-unsafe-function-type': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-vars': 'off'
        }
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: eslintPluginVue.parser,
            parserOptions: {
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            'vue/valid-template-root': 'error',
            'vue/no-multiple-template-root': 'off',
            'vue/this-in-template': ['error', 'never'],
            'vue/multi-word-component-names': 'off',
            'vue/no-reserved-component-names': 'off',
            'vue/block-order': [
                'error',
                {
                    order: ['script', 'template', 'style']
                }
            ],
            'vue/require-explicit-emits': [
                'error',
                {
                    allowProps: false
                }
            ],
            'vue/attributes-order': [
                //TODO evaluate this rule's configuration later or remove
                'warn',
                {
                    order: ['CONDITIONALS', 'LIST_RENDERING', 'DEFINITION', ['UNIQUE', 'SLOT'], 'RENDER_MODIFIERS', 'GLOBAL', 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', ['OTHER_ATTR', 'EVENTS'], 'CONTENT'],
                    alphabetical: false
                }
            ],
            'vue/order-in-components': [
                //TODO evaluate this rule's configuration later or remove
                'warn',
                {
                    order: [
                        'el',
                        'name',
                        'key',
                        'parent',
                        'functional',
                        'extends',
                        'mixins',
                        ['delimiters', 'comments'],
                        'ROUTER_GUARDS',
                        'layout',
                        'middleware',
                        'validate',
                        'scrollToTop',
                        'transition',
                        'loading',
                        'inheritAttrs',
                        'model',
                        'emits',
                        'setup',
                        'fetch',
                        'head',
                        ['props', 'propsData'],
                        ['provide', 'inject'],
                        'asyncData',
                        'data',
                        'watch',
                        'watchQuery',
                        'LIFECYCLE_HOOKS',
                        'methods',
                        'computed',
                        ['components', 'directives', 'filters'],
                        ['template', 'render'],
                        'renderError'
                    ]
                }
            ]
        }
    },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        }
    },
    {
        ignores: ['**/dist/**', '**/node_modules/**', '**/.nuxt/**', '**/.output/**', 'build/**', '**/prism.js']
    }
];
