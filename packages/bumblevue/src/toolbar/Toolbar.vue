<script>
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import ToolbarStyle from '@cjdevstudios/bumblevue/toolbar/style';

    export default {
        name: 'Toolbar',
        extends: BaseComponent,
        inheritAttrs: false,
        props: {
            ariaLabelledby: {
                type: String,
                default: null
            }
        },
        style: ToolbarStyle,
        provide() {
            return {
                $pcToolbar: this,
                $parentInstance: this
            };
        }
    };
</script>

<template>
    <div :class="cx('root')" role="toolbar" :aria-labelledby="ariaLabelledby" v-bind="ptmi('root')">
        <div :class="cx('start')" v-bind="ptm('start')">
            <slot name="start"></slot>
        </div>
        <div :class="cx('center')" v-bind="ptm('center')">
            <slot name="center"></slot>
        </div>
        <div :class="cx('end')" v-bind="ptm('end')">
            <slot name="end"></slot>
        </div>
    </div>
</template>
