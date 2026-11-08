<script>
    import { cn } from '@cjdevstudios/bumblevue/utils';
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import ProgressBarStyle from '@cjdevstudios/bumblevue/progressbar/style';

    export default {
        name: 'ProgressBar',
        extends: BaseComponent,
        inheritAttrs: false,
        props: {
            value: {
                type: Number,
                default: null
            },
            mode: {
                type: String,
                default: 'determinate'
            },
            showValue: {
                type: Boolean,
                default: true
            }
        },
        style: ProgressBarStyle,
        provide() {
            return {
                $pcProgressBar: this,
                $parentInstance: this
            };
        },
        computed: {
            progressStyle() {
                return {
                    width: this.value + '%',
                    display: 'flex'
                };
            },
            indeterminate() {
                return this.mode === 'indeterminate';
            },
            determinate() {
                return this.mode === 'determinate';
            },
            dataP() {
                return cn({
                    determinate: this.determinate,
                    indeterminate: this.indeterminate
                });
            }
        }
    };
</script>

<template>
    <div role="progressbar" :class="cx('root')" aria-valuemin="0" :aria-valuenow="value" aria-valuemax="100" :data-p="dataP" v-bind="ptmi('root')">
        <div v-if="determinate" :class="cx('value')" :style="progressStyle" :data-p="dataP" v-bind="ptm('value')">
            <div v-if="value != null && value !== 0 && showValue" :class="cx('label')" :data-p="dataP" v-bind="ptm('label')">
                <slot>{{ value + '%' }}</slot>
            </div>
        </div>
        <div v-else-if="indeterminate" :class="cx('value')" :data-p="dataP" v-bind="ptm('value')"></div>
    </div>
</template>
