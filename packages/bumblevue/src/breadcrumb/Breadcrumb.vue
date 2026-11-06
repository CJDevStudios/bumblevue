<template>
    <nav :class="cx('root')" v-bind="ptmi('root')">
        <ol :class="cx('list')" v-bind="ptm('list')">
            <BreadcrumbItem v-if="home" :item="home" :class="cx('homeItem')" :templates="$slots" :pt="pt" :unstyled="unstyled" v-bind="ptm('homeItem')" />
            <template v-for="(item, i) of model" :key="item.label + '_' + i">
                <li v-if="home || i !== 0" :class="cx('separator')" v-bind="ptm('separator')">
                    <slot name="separator">
                        <ChevronRightIcon aria-hidden="true" :class="cx('separatorIcon')" v-bind="ptm('separatorIcon')" />
                    </slot>
                </li>
                <BreadcrumbItem :item="item" :index="i" :templates="$slots" :pt="pt" :unstyled="unstyled" />
            </template>
        </ol>
    </nav>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
import ChevronRightIcon from '@cjdevstudios/bumblevue/icons/chevronright';
import BreadcrumbStyle from '@cjdevstudios/bumblevue/breadcrumb/style';
import BreadcrumbItem from './BreadcrumbItem.vue';

export default {
    name: 'Breadcrumb',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        model: {
            type: Array,
            default: null
        },
        home: {
            type: null,
            default: null
        }
    },
    style: BreadcrumbStyle,
    provide() {
        return {
            $pcBreadcrumb: this,
            $parentInstance: this
        };
    },
    components: {
        BreadcrumbItem,
        ChevronRightIcon
    }
};
</script>
