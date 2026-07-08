<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import CardStyle from '@cjdevstudios/bumblevue/card/style';

export default {
    name: 'BaseCard',
    extends: BaseComponent,
    style: CardStyle,
    provide() {
        return {
            $pcCard: this,
            $parentInstance: this
        };
    }
};
</script>
