<template>
    <div :class="cx('root')" role="progressbar" v-bind="ptmi('root')">
        <svg :class="cx('spin')" viewBox="25 25 50 50" :style="svgStyle" v-bind="ptm('spin')">
            <circle :class="cx('circle')" cx="50" cy="50" r="20" :fill="fill" :stroke-width="strokeWidth" strokeMiterlimit="10" v-bind="ptm('circle')" />
        </svg>
    </div>
</template>

<script>
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import ProgressSpinnerStyle from '@cjdevstudios/bumblevue/progressspinner/style';

    export default {
        name: 'ProgressSpinner',
        extends: BaseComponent,
        inheritAttrs: false,
        props: {
            strokeWidth: {
                type: String,
                default: '2'
            },
            fill: {
                type: String,
                default: 'none'
            },
            animationDuration: {
                type: String,
                default: '2s'
            }
        },
        style: ProgressSpinnerStyle,
        provide() {
            return {
                $pcProgressSpinner: this,
                $parentInstance: this
            };
        },
        computed: {
            svgStyle() {
                return {
                    'animation-duration': this.animationDuration
                };
            }
        }
    };
</script>
