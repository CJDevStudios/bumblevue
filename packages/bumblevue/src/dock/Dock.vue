<template>
    <div :class="containerClass" :style="style" v-bind="ptmi('root')">
        <DockSub :model="model" :templates="$slots" :tooltipOptions="tooltipOptions" :position="position" :menuId="menuId" :aria-label="ariaLabel" :aria-labelledby="ariaLabelledby" :tabindex="tabindex" :pt="pt" :unstyled="unstyled"></DockSub>
    </div>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import DockStyle from '@cjdevstudios/bumblevue/dock/style';
import DockSub from './DockSub.vue';

export default {
    name: 'Dock',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        position: {
            type: String,
            default: 'bottom'
        },
        model: null,
        class: null,
        style: null,
        tooltipOptions: null,
        menuId: {
            type: String,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
        },
        breakpoint: {
            type: String,
            default: '960px'
        },
        ariaLabel: {
            type: String,
            default: null
        },
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: DockStyle,
    provide() {
        return {
            $pcDock: this,
            $parentInstance: this
        };
    },
    matchMediaListener: null,
    data() {
        return {
            query: null,
            queryMatches: false
        };
    },
    mounted() {
        this.bindMatchMediaListener();
    },
    beforeUnmount() {
        this.unbindMatchMediaListener();
    },
    methods: {
        bindMatchMediaListener() {
            if (!this.matchMediaListener) {
                const query = matchMedia(`(max-width: ${this.breakpoint})`);

                this.query = query;
                this.queryMatches = query.matches;

                this.matchMediaListener = () => {
                    this.queryMatches = query.matches;
                    this.mobileActive = false;
                };

                this.query.addEventListener('change', this.matchMediaListener);
            }
        },
        unbindMatchMediaListener() {
            if (this.matchMediaListener) {
                this.query.removeEventListener('change', this.matchMediaListener);
                this.matchMediaListener = null;
            }
        }
    },
    computed: {
        containerClass() {
            return [this.class, this.cx('root')];
        }
    },
    components: {
        DockSub
    }
};
</script>
