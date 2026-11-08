<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
        <Badge v-bind="$props" :pt="ptm('pcBadge')" />
    </div>
</template>

<script>
    import Badge from '@cjdevstudios/bumblevue/badge';
    import OverlayBadgeStyle from '@cjdevstudios/bumblevue/overlaybadge/style';

    export default {
        name: 'OverlayBadge',
        extends: Badge,
        inheritAttrs: false,
        style: OverlayBadgeStyle,
        provide() {
            return {
                $pcOverlayBadge: this,
                $parentInstance: this
            };
        },
        components: {
            Badge
        }
    };
</script>
