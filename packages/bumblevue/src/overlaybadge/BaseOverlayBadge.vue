<script>
import Badge from '@cjdevstudios/bumblevue/badge';
import OverlayBadgeStyle from '@cjdevstudios/bumblevue/overlaybadge/style';

export default {
    name: 'OverlayBadge',
    extends: Badge,
    style: OverlayBadgeStyle,
    provide() {
        return {
            $pcOverlayBadge: this,
            $parentInstance: this
        };
    }
};
</script>
