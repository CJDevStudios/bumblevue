<template>
    <div ref="container" :class="cx('root')" v-bind="ptmi('root', getPTOptions)">
        <slot></slot>
    </div>
</template>

<script>
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import SplitterPanelStyle from '@cjdevstudios/bumblevue/splitterpanel/style';

    export default {
        name: 'SplitterPanel',
        extends: BaseComponent,
        inheritAttrs: false,
        props: {
            size: {
                type: Number,
                default: null
            },
            minSize: {
                type: Number,
                default: null
            }
        },
        style: SplitterPanelStyle,
        provide() {
            return {
                $pcSplitterPanel: this,
                $parentInstance: this
            };
        },
        data() {
            return {
                nestedState: null
            };
        },
        computed: {
            isNested() {
                return this.$slots.default().some((child) => {
                    this.nestedState = child.type.name === 'Splitter' ? true : null;

                    return this.nestedState;
                });
            },
            getPTOptions() {
                return {
                    context: {
                        nested: this.isNested
                    }
                };
            }
        }
    };
</script>
