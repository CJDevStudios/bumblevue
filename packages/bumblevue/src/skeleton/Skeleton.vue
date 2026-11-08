<script>
    import { cn } from '@cjdevstudios/bumblevue/utils';
    import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
    import SkeletonStyle from '@cjdevstudios/bumblevue/skeleton/style';

    export default {
        name: 'Skeleton',
        extends: BaseComponent,
        inheritAttrs: false,
        props: {
            shape: {
                type: String,
                default: 'rectangle'
            },
            size: {
                type: String,
                default: null
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '1rem'
            },
            borderRadius: {
                type: String,
                default: null
            },
            animation: {
                type: String,
                default: 'wave'
            }
        },
        style: SkeletonStyle,
        provide() {
            return {
                $pcSkeleton: this,
                $parentInstance: this
            };
        },
        computed: {
            containerStyle() {
                if (this.size) return { width: this.size, height: this.size, borderRadius: this.borderRadius };
                else return { width: this.width, height: this.height, borderRadius: this.borderRadius };
            },
            dataP() {
                return cn({
                    [this.shape]: this.shape
                });
            }
        }
    };
</script>

<template>
    <div :class="cx('root')" :style="[sx('root'), containerStyle]" aria-hidden="true" v-bind="ptmi('root')" :data-p="dataP"></div>
</template>
